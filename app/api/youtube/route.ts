import { NextResponse } from 'next/server'

interface YouTubeVideoItem {
  id: string
  title: string
  description: string
  videoId: string
  thumbnailUrl?: string
  duration?: string
  date?: string
  category?: string
}

// YouTube channel handle and URL
const CHANNEL_HANDLE = 'Daderwalmukesh'
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_HANDLE}`

// Function to format date
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  } catch {
    return ''
  }
}

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    
    if (!apiKey) {
      // Return empty videos if API key is not configured
      console.error('YouTube API key not found in environment variables')
      return NextResponse.json(
        { 
          videos: [],
          channelUrl: CHANNEL_URL,
          error: 'YouTube API key not configured. Add YOUTUBE_API_KEY to environment variables.',
          message: 'YouTube API key not configured. Add YOUTUBE_API_KEY to environment variables.'
        },
        { status: 200 }
      )
    }

    // Step 1: Get channel ID from handle
    // Try multiple methods to find the channel
    let channelId: string | null = null
    
    // Method 1: Try searching for the channel handle
    try {
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent('@' + CHANNEL_HANDLE)}&type=channel&key=${apiKey}&maxResults=5`
      )

      if (!searchResponse.ok) {
        const errorData = await searchResponse.json().catch(() => ({}))
        console.error('YouTube API search error:', errorData)
        throw new Error(`YouTube API error: ${errorData.error?.message || 'Unknown error'}`)
      }

      const searchData = await searchResponse.json()
      
      if (searchData.error) {
        console.error('YouTube API returned error:', searchData.error)
        throw new Error(`YouTube API error: ${searchData.error.message}`)
      }
      
      if (searchData.items && searchData.items.length > 0) {
        // Find the exact match for the channel handle
        const exactMatch = searchData.items.find((item: any) => 
          item.snippet.customUrl?.toLowerCase().includes(CHANNEL_HANDLE.toLowerCase()) ||
          item.snippet.title?.toLowerCase().includes(CHANNEL_HANDLE.toLowerCase())
        )
        
        if (exactMatch) {
          channelId = exactMatch.snippet.channelId
          console.log('Found channel ID via Method 1:', channelId)
        } else {
          // Use the first result if no exact match
          channelId = searchData.items[0].snippet.channelId
          console.log('Found channel ID via Method 1 (first result):', channelId)
        }
      }
    } catch (error) {
      console.warn('Method 1 failed, trying alternative:', error)
    }

    // Method 2: If Method 1 failed, try searching by channel name
    if (!channelId) {
      try {
        const searchResponse2 = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(CHANNEL_HANDLE)}&type=channel&key=${apiKey}&maxResults=5`
        )

        if (!searchResponse2.ok) {
          const errorData2 = await searchResponse2.json().catch(() => ({}))
          console.error('YouTube API search error (Method 2):', errorData2)
          throw new Error(`YouTube API error: ${errorData2.error?.message || 'Unknown error'}`)
        }

        const searchData2 = await searchResponse2.json()
        
        if (searchData2.error) {
          console.error('YouTube API returned error (Method 2):', searchData2.error)
          throw new Error(`YouTube API error: ${searchData2.error.message}`)
        }
        
        if (searchData2.items && searchData2.items.length > 0) {
          channelId = searchData2.items[0].snippet.channelId
          console.log('Found channel ID via Method 2:', channelId)
        }
      } catch (error) {
        console.warn('Method 2 failed:', error)
      }
    }

    if (!channelId) {
      console.error('Channel not found for handle:', CHANNEL_HANDLE)
      return NextResponse.json(
        { 
          videos: [],
          channelUrl: CHANNEL_URL,
          error: 'Channel not found. Please verify the channel handle.',
          debug: 'Could not find channel with handle: ' + CHANNEL_HANDLE
        },
        { status: 200 }
      )
    }

    // Step 2: Get channel's uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    )

    if (!channelResponse.ok) {
      throw new Error('Failed to fetch channel details')
    }

    const channelData = await channelResponse.json()
    
    if (channelData.error) {
      console.error('YouTube API channel error:', channelData.error)
      throw new Error(`YouTube API error: ${channelData.error.message}`)
    }
    
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel data not found')
    }
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads
    
    if (!uploadsPlaylistId) {
      throw new Error('Uploads playlist ID not found')
    }
    
    console.log('Found uploads playlist ID:', uploadsPlaylistId)

    // Step 3: Get videos from uploads playlist (fetch all videos with pagination)
    let allVideos: any[] = []
    let nextPageToken: string | undefined = undefined
    
    // Fetch videos in batches (YouTube API max is 50 per request)
    do {
      const url: string = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${apiKey}&order=date${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`
      
      const playlistResponse = await fetch(url)

      if (!playlistResponse.ok) {
        const errorData = await playlistResponse.json().catch(() => ({}))
        throw new Error(`Failed to fetch playlist videos: ${errorData.error?.message || 'Unknown error'}`)
      }

      const playlistData = await playlistResponse.json()
      
      if (playlistData.items) {
        allVideos = allVideos.concat(playlistData.items)
      }
      
      nextPageToken = playlistData.nextPageToken
      
      // Limit to prevent too many API calls (max 200 videos, adjust if needed)
      if (allVideos.length >= 200) {
        break
      }
    } while (nextPageToken)

    // Step 4: Get video details (duration, etc.) for each video
    // Process in batches of 50 (YouTube API limit)
    const videoIds = allVideos.map((item: any) => item.snippet.resourceId.videoId)
    
    // Fetch video details in batches
    let videosDetails: any = {}
    for (let i = 0; i < videoIds.length; i += 50) {
      const batch = videoIds.slice(i, i + 50).join(',')
      
      const videosDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${batch}&key=${apiKey}`
      )

      if (videosDetailsResponse.ok) {
        const detailsData = await videosDetailsResponse.json()
        if (detailsData.items) {
          detailsData.items.forEach((item: any) => {
            videosDetails[item.id] = item
          })
        }
      }
    }

    // Format duration helper
    const formatDuration = (duration: string): string => {
      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
      if (!match) return ''
      
      const hours = match[1] ? parseInt(match[1]) : 0
      const minutes = match[2] ? parseInt(match[2]) : 0
      const seconds = match[3] ? parseInt(match[3]) : 0
      
      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      }
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    // Step 5: Map videos to our format
    const videos: YouTubeVideoItem[] = allVideos.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId
      const details = videosDetails[videoId]
      
      return {
        id: `yt-${videoId}`,
        title: item.snippet.title,
        description: item.snippet.description || '',
        videoId: videoId,
        thumbnailUrl: item.snippet.thumbnails?.high?.url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        duration: details?.contentDetails?.duration ? formatDuration(details.contentDetails.duration) : undefined,
        date: formatDate(item.snippet.publishedAt),
        category: 'Education',
      }
    })

    console.log(`Successfully fetched ${videos.length} videos from channel`)
    
    return NextResponse.json({ 
      videos,
      channelUrl: CHANNEL_URL,
      count: videos.length
    })
    
  } catch (error: any) {
    console.error('Error fetching YouTube videos:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch YouTube videos',
        errorMessage: error?.message || 'Unknown error',
        videos: [],
        channelUrl: CHANNEL_URL,
        debug: error?.stack || 'No stack trace available'
      },
      { status: 500 }
    )
  }
}

