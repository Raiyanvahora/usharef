import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the payload for now - will be replaced with actual email provider integration
    console.log('Email subscription request:', {
      source: body.source,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Integrate with email provider (Mailchimp/Klaviyo/etc.)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Subscription request received' 
    });
  } catch (error) {
    console.error('Subscription API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}