export interface YouTubeVideo {
  id: string
  title: string
  description: string
  videoId: string
  thumbnailUrl?: string
  duration?: string
  views?: string
  date?: string
  category?: string
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Mental Health Secrets: Anxiety, Overthinking Aur Depression Ka Asli Raasta ft. Dr. Mukesh Chand Daderwal',
    description: 'An informative session about mental health awareness, anxiety, overthinking, and depression with expert insights from Dr. Mukesh Chand Daderwal.',
    videoId: '28-dH0gxnvQ',
    category: 'Education',
    date: 'Jul 2025'
  },
  {
    id: '2',
    title: 'Dementia Myths vs. Facts: What You Need to Know with renowned Neuropsychiatrist Dr. Mukesh Chand Daderwal!',
    description: 'In this informative session, Dr. Mukesh Chand Daderwal addresses common misconceptions about dementia, providing clarity and expert insights to help you understand the condition better.',
    videoId: 'wr3ubFb2N7Y',
    category: 'Education',
    date: 'Sep 2025'
  },
  {
    id: '3',
    title: 'Mental Health and Wellness with Dr. Mukesh Chand Daderwal',
    description: 'Expert insights on mental health, wellness, and psychiatric care from Dr. Mukesh Chand Daderwal.',
    videoId: 'AWM_I576R1s',
    category: 'Health',
    date: 'Oct 2022'
  },
  {
    id: '4',
    title: 'Understanding Mental Health Disorders with Dr. Mukesh Chand Daderwal',
    description: 'Comprehensive discussion about mental health disorders, their symptoms, and treatment approaches.',
    videoId: 'oZvNJKcTAbs',
    category: 'Education',
    date: 'May 2024'
  },
  {
    id: '5',
    title: 'World Mental Health Day | Dr. Mukesh Chand Daderwal | MHJ',
    description: 'Join Dr. Mukesh Chand Daderwal as he discusses the importance of mental health awareness on World Mental Health Day.',
    videoId: 'lVZUeWghP3c',
    category: 'Education',
    date: 'Oct 2024'
  }
]

// Helper function to get YouTube embed URL
export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`
}

// Helper function to get YouTube thumbnail URL
export const getYouTubeThumbnailUrl = (videoId: string, quality: 'default' | 'medium' | 'high' = 'high'): string => {
  const qualityMap = {
    default: 'default',
    medium: 'mqdefault',
    high: 'hqdefault'
  }
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`
}

