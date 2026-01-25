import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas públicas
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/'
  ) {
    return NextResponse.next()
  }

  // Protege tudo que é dashboard / loja / admin
  if (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/loja-ia') ||
    pathname.startsWith('/admin')
  ) {
    // MVP sem auth real → só deixa passar
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!favicon.ico).*)'],
}
