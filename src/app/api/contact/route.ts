import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// It will gracefully fall back or error if not provided in Vercel
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, phone, email, fromZip, toZip, moveSize, moveDate } = data;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First Name, Last Name, and Email are required.' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <h2>New Moving Lead: ${firstName} ${lastName}</h2>
      <p><strong>Contact Info:</strong></p>
      <ul>
        <li>Email: ${email}</li>
        <li>Phone: ${phone || 'Not provided'}</li>
      </ul>
      <p><strong>Move Details:</strong></p>
      <ul>
        <li>From Zip: ${fromZip || 'Not provided'}</li>
        <li>To Zip: ${toZip || 'Not provided'}</li>
        <li>Move Size: ${moveSize}</li>
        <li>Target Date: ${moveDate || 'Not provided'}</li>
      </ul>
    `;

    // Send email using Resend
    // We send it to rentahandwindsor@gmail.com 
    const { data: resendData, error } = await resend.emails.send({
      from: 'Rent-A-Hand Quotes <onboarding@resend.dev>', // You'll need to verify a domain in Resend for a custom 'from' address, using onboarding for now.
      to: ['rentahandwindsor@gmail.com'],
      subject: `New Quote Request from ${firstName} ${lastName}`,
      replyTo: email,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully', data: resendData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error handling contact submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
