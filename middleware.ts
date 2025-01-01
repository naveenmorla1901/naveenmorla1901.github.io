import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the current environment
  const isProduction = process.env.NODE_ENV === 'production'
  
  if (isProduction) {
    // Get the current pathname
    const pathname = request.nextUrl.pathname
    
    // Add base path in production
    if (!pathname.startsWith('/portfolio-new')) {
      return NextResponse.redirect(new URL(`/portfolio-new${pathname}`, request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!_next|api).*)',
  ],
}