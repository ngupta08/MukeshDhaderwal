export interface GalleryEvent {
  id: string
  title: string
  location: string
  date: string
  attendance: string
  imagePath?: string
  cloudinaryImageUrl?: string
  linkedInUrl?: string
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: '1',
    title: 'Manipal Hospital',
    location: 'Jaipur, Rajasthan',
    date: 'Sep 2025',
    attendance: '100+',
    cloudinaryImageUrl: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766730983/1757596304024_lmcrgz.jpg',
    linkedInUrl: 'https://www.linkedin.com/posts/dr-mukesh-chand-daderwal-902b39210_worldsuicidepreventionday-mentalhealthawareness-activity-7371893218210213888-FHke?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDg'
  },
  {
    id: '2',
    title: 'Gail (India) Limited',
    location: 'Jaipur',
    date: 'Sep 2025',
    attendance: '120+',
    imagePath: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766731439/1757437419427_qffy0q.jpg',
    linkedInUrl: 'https://www.linkedin.com/posts/dr-mukesh-chand-daderwal-902b39210_mentalhealthawareness-wellbeingatwork-resilience-activity-7371226820400177152-qoJr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDg'
  },
  {
    id: '3',
    title: 'IcfaiTech',
    location: 'Jaipur, Rajasthan',
    date: 'Aug 2025',
    attendance: '200+',
    imagePath: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766731439/1755666324509_aqp7yj.jpg',
    linkedInUrl: 'https://www.linkedin.com/posts/aksaini77_deeksharambh25-icfaitech-studentinduction-ugcPost-7363798548926132224-HvJu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDg'
  },
  {
    id: '4',
    title: 'ICFAI University',
    location: 'Jaipur, Rajasthan',
    date: 'Aug 2024',
    attendance: '180+',
    imagePath: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766731441/1755536606493_dfgcrn.jpg',
    linkedInUrl: 'https://www.linkedin.com/posts/dr-mukesh-chand-daderwal-902b39210_stressmanagement-suicideprevention-mentalhealthawareness-activity-7363254220076052481-LSFN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDg'
  },
  {
    id: '5',
    title: 'Indus Towers',
    location: 'Jaipur',
    date: 'Jun 2025',
    attendance: '75+',
    imagePath: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766734899/indust_towers_wzb9vn.jpg',
    linkedInUrl: 'https://www.linkedin.com/posts/dr-mukesh-chand-daderwal-902b39210_mentalhealthmatters-worklifebalance-stressmanagement-activity-7354900670941974528-CwgW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDghttps://www.linkedin.com/posts/dr-mukesh-chand-daderwal-902b39210_psychiatristonthetrail-hikingformentalhealth-activity-7304498915343507457-9AUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDg'
  },
  {
    id: '6',
    title: 'HikingForMentalHealth',
    location: 'BlueMonkeys Adventures & Films Pvt.',
    date: 'Apr 2024',
    attendance: '30+',
    imagePath: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766731439/1741528236406_cbd1ol.jpg',
    linkedInUrl: 'https://www.linkedin.com/posts/dr-mukesh-chand-daderwal-902b39210_psychiatristonthetrail-hikingformentalhealth-activity-7304498915343507457-9AUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjURLcBe60xzPXtb_PO7xLHNhHJPYL7iDg'
  }
]

// Helper function to get image URL (prioritizes Cloudinary, falls back to local)
export const getEventImageUrl = (event: GalleryEvent): string => {
  if (event.cloudinaryImageUrl) {
    return event.cloudinaryImageUrl
  }
  if (event.imagePath) {
    return event.imagePath
  }
  // Fallback to placeholder
  return '/gallery/placeholder.jpg'
}

// Statistics calculation helpers
export const getGalleryStatistics = () => {
  const totalWorkshops = galleryEvents.length
  const totalAttendance = galleryEvents.reduce((sum, event) => {
    const num = parseInt(event.attendance.replace('+', ''))
    return sum + num
  }, 0)
  const avgAttendance = Math.round(totalAttendance / totalWorkshops)

  return {
    totalWorkshops,
    totalAttendance,
    avgAttendance
  }
}

