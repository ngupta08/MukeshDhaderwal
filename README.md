# Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with TypeScript and the App Router.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   └── ui/               # UI components
├── lib/                   # Utility functions
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## YouTube Integration

The website automatically fetches videos from the YouTube channel `@Daderwalmukesh`. To enable this feature:

1. Get a YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the YouTube Data API v3 for your project
3. Add the API key to your `.env.local` file:

```env
YOUTUBE_API_KEY=your_youtube_api_key_here
```

**Note:** If the API key is not configured, the website will use static video data as a fallback. The component will still function normally.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

