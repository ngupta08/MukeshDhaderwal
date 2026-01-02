import { neon } from '@neondatabase/serverless'

// Create sql instance - will work even if DATABASE_URL is not set (for build time)
export const sql = process.env.DATABASE_URL 
  ? neon(process.env.DATABASE_URL)
  : null as any

