import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    buildId: process.env.BUILD_ID || 'development',
    timestamp: Date.now(),
  }, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}