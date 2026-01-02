// Simple authentication utility
// In production, use a proper authentication solution like NextAuth.js

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123' // Change this in production

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}

export function setAuthToken() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_auth', 'authenticated')
  }
}

export function getAuthToken(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_auth') === 'authenticated'
  }
  return false
}

export function removeAuthToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_auth')
  }
}

