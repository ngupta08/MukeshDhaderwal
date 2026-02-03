import { NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";

interface YouTubeVideoItem {
  videoId: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  date: string;
}

interface PlaylistItemsResponse {
  items: {
    snippet: PlaylistItemSnippet;
  }[];
  nextPageToken?: string;
}
interface PlaylistItemSnippet {
  resourceId: {
    kind: "youtube#video";
    videoId: string;
  };
  title: string;
  description: string;
  thumbnails: {
    high?: { url: string };
    medium: { url: string };
  };
  publishedAt: string;
}

interface ChannelResponse {
  items: {
    contentDetails: {
      relatedPlaylists: {
        uploads: string;
      };
    };
  }[];
}

// YouTube channel handle and URL
const CHANNEL_HANDLE = "Daderwalmukesh";
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_HANDLE}`;
let channelId = "UCMHK0ve29tjWAo3Fw9v4ZRw";

// Function to format date
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  } catch {
    return "";
  }
}

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        videos: [],
        channelUrl: CHANNEL_URL,
        error: "YouTube API key missing",
      });
    }

    // 1️⃣ Get uploads playlist ID
    const channelRes = await axios.get<ChannelResponse>(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "contentDetails",
          id: channelId,
          key: apiKey,
        },
      },
    );

    const uploadsPlaylistId =
      channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

    let videos: YouTubeVideoItem[] = [];
    let nextPageToken: string | undefined = undefined;

    // 2️⃣ Fetch playlist videos
    do {
      const res: AxiosResponse<PlaylistItemsResponse> = await axios.get<PlaylistItemsResponse>(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet",
            playlistId: uploadsPlaylistId,
            maxResults: 50,
            pageToken: nextPageToken,
            key: apiKey,
          },
        },
      );

      res.data.items.forEach(({ snippet }) => {
        const videoId = snippet.resourceId.videoId;

        videos.push({
          videoId,
          title: snippet.title,
          description: snippet.description,
          url: `https://www.youtube.com/watch?v=${videoId}`,
          thumbnailUrl:
            snippet.thumbnails.high?.url || snippet.thumbnails.medium.url,
          date: formatDate(snippet.publishedAt),
        });
      });

      nextPageToken = res.data.nextPageToken;
    } while (nextPageToken);

    return NextResponse.json({
      videos,
      channelUrl: CHANNEL_URL,
      count: videos.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to fetch YouTube videos",
        message: error?.message,
      },
      { status: 500 },
    );
  }
}
