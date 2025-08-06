import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const isTikTok = ua.toLowerCase().includes('tiktok');
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  if (isTikTok && isIOS) {
    return NextResponse.rewrite(new URL('/index.html', request.url));
  }

  return NextResponse.rewrite(new URL('/go.html', request.url));
}
