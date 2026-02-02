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
    
    // Method 1: Use channels.list with forHandle parameter (most reliable, introduced in 2023)
    try {
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`
      )

      const channelData = await channelResponse.json()
      
      if (channelResponse.ok) {
        if (!channelData.error && channelData.items && channelData.items.length > 0) {
          channelId = channelData.items[0].id
          console.log('Found channel ID via forHandle method:', channelId)
        } else if (channelData.error) {
          console.warn('forHandle method API error:', channelData.error)
        }
      } else {
        console.warn('forHandle method HTTP error:', channelResponse.status, channelData)
      }
    } catch (error) {
      console.warn('forHandle method failed, trying alternatives:', error)
    }

    // Method 2: Try searching for the channel handle with @ symbol
    if (!channelId) {
      try {
        const searchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent('@' + CHANNEL_HANDLE)}&type=channel&key=${apiKey}&maxResults=10`
        )

        const searchData = await searchResponse.json()
        
        if (searchResponse.ok) {
          if (!searchData.error && searchData.items && searchData.items.length > 0) {
            console.log(`Method 2 found ${searchData.items.length} channels, searching for exact match...`)
            // Find exact match by checking customUrl or channel title
            const exactMatch = searchData.items.find((item: any) => {
              const customUrl = item.snippet.customUrl?.toLowerCase().replace('@', '')
              const title = item.snippet.title?.toLowerCase()
              const handleLower = CHANNEL_HANDLE.toLowerCase()
              const match = customUrl === handleLower || title.includes(handleLower)
              if (match) {
                console.log('Exact match found:', { customUrl, title, handleLower })
              }
              return match
            })
            
            if (exactMatch) {
              channelId = exactMatch.snippet.channelId
              console.log('Found channel ID via search Method 2:', channelId)
            } else if (searchData.items.length > 0) {
              // Use the first result if no exact match
              channelId = searchData.items[0].snippet.channelId
              console.log('Found channel ID via search Method 2 (first result):', channelId, 'Title:', searchData.items[0].snippet.title)
            }
          } else if (searchData.error) {
            console.warn('Search Method 2 API error:', searchData.error)
          }
        } else {
          console.warn('Search Method 2 HTTP error:', searchResponse.status, searchData)
        }
      } catch (error) {
        console.warn('Search Method 2 failed:', error)
      }
    }

    // Method 3: Try searching without @ symbol
    if (!channelId) {
      try {
        const searchResponse2 = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(CHANNEL_HANDLE)}&type=channel&key=${apiKey}&maxResults=10`
        )

        const searchData2 = await searchResponse2.json()
        
        if (searchResponse2.ok) {
          if (!searchData2.error && searchData2.items && searchData2.items.length > 0) {
            console.log(`Method 3 found ${searchData2.items.length} channels, searching for best match...`)
            // Try to find best match
            const bestMatch = searchData2.items.find((item: any) => {
              const customUrl = item.snippet.customUrl?.toLowerCase().replace('@', '')
              const title = item.snippet.title?.toLowerCase()
              const handleLower = CHANNEL_HANDLE.toLowerCase()
              const match = customUrl === handleLower || title.includes(handleLower) || title.includes('daderwal')
              if (match) {
                console.log('Best match found:', { customUrl, title, handleLower })
              }
              return match
            })
            
            if (bestMatch) {
              channelId = bestMatch.snippet.channelId
              console.log('Found channel ID via search Method 3:', channelId)
            } else {
              channelId = searchData2.items[0].snippet.channelId
              console.log('Found channel ID via search Method 3 (first result):', channelId, 'Title:', searchData2.items[0].snippet.title)
            }
          } else if (searchData2.error) {
            console.warn('Search Method 3 API error:', searchData2.error)
          }
        } else {
          console.warn('Search Method 3 HTTP error:', searchResponse2.status, searchData2)
        }
      } catch (error) {
        console.warn('Search Method 3 failed:', error)
      }
    }

    // Method 4: Try searching by doctor's full name as last resort
    if (!channelId) {
      try {
        const searchResponse3 = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent('Dr. Mukesh Chand Daderwal')}&type=channel&key=${apiKey}&maxResults=5`
        )

        const searchData3 = await searchResponse3.json()
        
        if (searchResponse3.ok) {
          if (!searchData3.error && searchData3.items && searchData3.items.length > 0) {
            console.log(`Method 4 found ${searchData3.items.length} channels by name...`)
            // Look for channel with daderwal in title or customUrl
            const nameMatch = searchData3.items.find((item: any) => {
              const customUrl = item.snippet.customUrl?.toLowerCase()
              const title = item.snippet.title?.toLowerCase()
              return (customUrl && customUrl.includes('daderwal')) || title.includes('daderwal')
            })
            
            if (nameMatch) {
              channelId = nameMatch.snippet.channelId
              console.log('Found channel ID via search Method 4 (name search):', channelId, 'Title:', nameMatch.snippet.title)
            }
          }
        }
      } catch (error) {
        console.warn('Search Method 4 failed:', error)
      }
    }

    if (!channelId) {
      console.error('Channel not found for handle:', CHANNEL_HANDLE)
      console.error('All lookup methods failed. Please verify:')
      console.error('1. Channel handle is correct:', CHANNEL_HANDLE)
      console.error('2. Channel URL is:', CHANNEL_URL)
      console.error('3. YouTube API key is configured and has proper permissions')
      return NextResponse.json(
        { 
          videos: [],
          channelUrl: CHANNEL_URL,
          error: 'Channel not found. Please verify the channel handle.',
          errorMessage: 'Channel not found. Please verify the channel handle.',
          debug: `Could not find channel with handle: ${CHANNEL_HANDLE}. Please check: 1) Channel handle is correct, 2) YouTube API key has proper permissions, 3) Channel exists and is public.`
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

