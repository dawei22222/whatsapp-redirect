import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const url = request.nextUrl.clone();

  // 如果是 TikTok 内置浏览器，停留 index.html
  if (userAgent.includes('TikTok')) {
    url.pathname = '/index.html';
    return NextResponse.rewrite(url);
  }

  // 其他浏览器自动跳转 go.html
  url.pathname = '/go.html';
  return NextResponse.rewrite(url);
}
