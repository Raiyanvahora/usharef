import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.phone || !data.pinCode) {
      return NextResponse.json(
        { error: 'Name, phone, and pin code are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Quote Request from Website

Product Details:
- Brand: ${data.brand}
- Category: ${data.category}
- Model: ${data.model}
- Capacity: ${data.liters}L

Customer Details:
- Name: ${data.name}
- Phone: ${data.phone}
- City: ${data.city}
- Pin Code: ${data.pinCode}
- Quantity: ${data.quantity}
- Notes: ${data.notes || 'None'}

Page URL: ${data.pageUrl}

Please contact the customer for quote and delivery details.

---
Generated from Usha Refrigeration Website
`;

    // Configure nodemailer (you'll need to set up SMTP credentials)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'sales@usharefrigeration.com',
        pass: process.env.SMTP_PASSWORD || 'your-app-password'
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'noreply@usharefrigeration.com',
      to: 'sales@usharefrigeration.com',
      subject: `Quote Request - ${data.model} from ${data.name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    });

    // Optional: Log to Google Sheets (if you set up the integration)
    if (process.env.GOOGLE_SHEETS_ENABLED === 'true') {
      // TODO: Add Google Sheets integration here
      console.log('Google Sheets integration not yet implemented');
    }

    return NextResponse.json(
      { message: 'Quote request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}