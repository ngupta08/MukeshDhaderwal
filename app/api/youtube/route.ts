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
      return NextResponse.json(
        { 
          videos: [],
          channelUrl: CHANNEL_URL,
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

      if (searchResponse.ok) {
        const searchData = await searchResponse.json()
        
        if (searchData.items && searchData.items.length > 0) {
          // Find the exact match for the channel handle
          const exactMatch = searchData.items.find((item: any) => 
            item.snippet.customUrl?.includes(CHANNEL_HANDLE.toLowerCase()) ||
            item.snippet.title?.toLowerCase().includes(CHANNEL_HANDLE.toLowerCase())
          )
          
          if (exactMatch) {
            channelId = exactMatch.snippet.channelId
          } else {
            // Use the first result if no exact match
            channelId = searchData.items[0].snippet.channelId
          }
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

        if (searchResponse2.ok) {
          const searchData2 = await searchResponse2.json()
          if (searchData2.items && searchData2.items.length > 0) {
            channelId = searchData2.items[0].snippet.channelId
          }
        }
      } catch (error) {
        console.warn('Method 2 failed:', error)
      }
    }

    if (!channelId) {
      return NextResponse.json(
        { 
          videos: [],
          channelUrl: CHANNEL_URL,
          error: 'Channel not found. Please verify the channel handle.'
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
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // Step 3: Get videos from uploads playlist (fetch more videos)
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${apiKey}&order=date`
    )

    if (!playlistResponse.ok) {
      throw new Error('Failed to fetch playlist videos')
    }

    const playlistData = await playlistResponse.json()

    // Step 4: Get video details (duration, etc.) for each video
    const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(',')
    
    const videosDetailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`
    )

    let videosDetails: any = {}
    if (videosDetailsResponse.ok) {
      const detailsData = await videosDetailsResponse.json()
      videosDetails = detailsData.items.reduce((acc: any, item: any) => {
        acc[item.id] = item
        return acc
      }, {})
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
    const videos: YouTubeVideoItem[] = playlistData.items.map((item: any) => {
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

    return NextResponse.json({ 
      videos,
      channelUrl: CHANNEL_URL
    })
    
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch YouTube videos',
        videos: [],
        channelUrl: CHANNEL_URL
      },
      { status: 500 }
    )
  }
}

