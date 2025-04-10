import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// For a user/organization site (username.github.io), content should be served from the root
export function middleware(request: NextRequest) {
  // Simply pass through all requests without redirection
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!_next|api).*)',
  ],
}