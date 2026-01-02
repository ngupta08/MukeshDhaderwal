'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/lib/auth'
import BlogDashboard from '@/components/admin/BlogDashboard'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if authenticated, if not redirect to login
    const auth = getAuthToken()
    if (!auth) {
      router.push('/admin/login')
    }
  }, [router])

  return <BlogDashboard />
}

