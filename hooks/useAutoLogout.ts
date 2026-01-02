'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { removeAuthToken } from '@/lib/auth'

export function useAutoLogout() {
  const pathname = usePathname()
  const router = useRouter()
  const prevPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    // Check if we're currently on an admin page
    const isAdminPage = pathname?.startsWith('/admin') && pathname !== '/admin/login'
    const wasAdminPage = prevPathnameRef.current?.startsWith('/admin') && prevPathnameRef.current !== '/admin/login'

    // If user navigated away from admin section, logout
    if (wasAdminPage && !isAdminPage) {
      removeAuthToken()
      // Redirect to login if not already there
      if (pathname !== '/admin/login') {
        router.replace('/admin/login')
      }
    }

    // Update previous pathname
    prevPathnameRef.current = pathname

    // Only set up listeners if we're on an admin page
    if (!isAdminPage) {
      return
    }

    // Logout when window/tab is closed or refreshed
    const handleBeforeUnload = () => {
      removeAuthToken()
    }

    // Listen for page unload (close, refresh, navigate away)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pathname, router])
}

