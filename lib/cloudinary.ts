import { v2 as cloudinary } from 'cloudinary'

if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
}

export { cloudinary }

export async function uploadImage(file: File | string): Promise<string> {
  try {
    if (typeof file === 'string') {
      // If it's already a URL, return it
      if (file.startsWith('http')) {
        return file
      }
      
      // If it's a base64 data URI, upload it
      if (file.startsWith('data:')) {
        const result = await cloudinary.uploader.upload(file, {
          folder: 'blog',
          resource_type: 'image',
        })
        return result.secure_url
      }
    }

    // For file uploads, convert to base64 first
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const base64 = buffer.toString('base64')
      const dataUri = `data:${file.type};base64,${base64}`
      
      const result = await cloudinary.uploader.upload(dataUri, {
        folder: 'blog',
        resource_type: 'image',
      })
      return result.secure_url
    }

    throw new Error('Invalid file type')
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error)
    throw error
  }
}


