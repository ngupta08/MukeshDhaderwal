'use client'

import { usePathname } from 'next/navigation'
import AdminGuard from '@/components/admin/AdminGuard'
import { useAutoLogout } from '@/hooks/useAutoLogout'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  // Enable auto-logout for admin pages
  useAutoLogout()

  // Don't apply guard to login page
  if (isLoginPage) {
    return <>{children}</>
  }

  // Apply guard to all other admin routes
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </AdminGuard>
  )
}
