export interface ClinicPhoto {
  id: string
  title: string
  description?: string
  imagePath?: string
  cloudinaryImageUrl?: string
}

// Clinic photos are OPTIONAL
// Only the first image is used for the main section background
// The info cards (Location, Timings, Contact) use gradient backgrounds only
export const clinicPhotos: ClinicPhoto[] = [
  // Main section background image
  {
    id: '1',
    title: 'Our Clinic',
    description: 'Professional clinic environment',
    imagePath: '/clinic/Clinic.png',
    // cloudinaryImageUrl: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v...'
  }
]

// Helper function to get image URL (prioritizes Cloudinary, falls back to local)
export const getClinicPhotoUrl = (photo: ClinicPhoto): string => {
  if (photo.cloudinaryImageUrl) {
    return photo.cloudinaryImageUrl
  }
  if (photo.imagePath) {
    return photo.imagePath
  }
  // Fallback to placeholder
  return '/clinic/placeholder.jpg'
}

