# Specialization Images

## Where to Add Images

Place your specialization background images in this folder: `/public/specializations/`

## Required Image Names

Add images with these exact names:

1. **child-psychiatry.jpg** - For Child Psychiatry specialization
2. **geriatric-psychiatry.jpg** - For Geriatric Psychiatry specialization
3. **de-addiction.jpg** - For De Addiction specialization
4. **clinical-liaison-psychiatry.jpg** - For Clinical Liaison Psychiatry specialization
5. **neurology.jpg** - For Neurology specialization
6. **sexual-disorders.jpg** - For Sexual Disorders specialization
7. **sleep-disorders.jpg** - For Sleep Disorders specialization
8. **brain-stimulation.jpg** - For Brain Stimulation specialization

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or larger
- **Aspect Ratio**: 4:3 or 16:9 works best
- **File Size**: Keep under 500KB for faster loading

## How It Works

The images will be used as full background images in the specialization cards. They will have:
- Dark overlay for text readability
- Color gradient overlay matching the specialization theme
- Hover effects (image scales on hover)

## Alternative: Using Cloudinary URLs

If you prefer to use Cloudinary URLs instead of local images, you can update the `backgroundImage` property in `/components/Specializations.tsx` to use Cloudinary URLs like:

```typescript
backgroundImage: 'https://res.cloudinary.com/your-cloud-name/image/upload/...'
```

Make sure the Cloudinary domain is already configured in `next.config.js` (it should be).

