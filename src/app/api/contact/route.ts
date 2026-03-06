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
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Lead Request</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e4e4e7; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background-color: #18181b; color: #ffffff; padding: 30px; text-align: center; border-bottom: 4px solid #fbbf24;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">New Quote Request</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <p style="margin-top: 0; margin-bottom: 25px; font-size: 16px; color: #3f3f46;">
        Hello Team, you have a new quote request from <strong style="color: #18181b;">${firstName} ${lastName}</strong>.
      </p>

      <!-- Contact Info Section -->
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 14px; text-transform: uppercase; color: #71717a; font-weight: 600; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #e4e4e7; padding-bottom: 8px;">Contact Information</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Name:</td>
            <td style="padding: 8px 0; color: #3f3f46;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Email:</td>
            <td style="padding: 8px 0; color: #3f3f46;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Phone:</td>
            <td style="padding: 8px 0; color: #3f3f46;">${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : '<span style="color: #a1a1aa; font-style: italic;">Not provided</span>'}</td>
          </tr>
        </table>
      </div>

      <!-- Move Details Section -->
      <div style="margin-bottom: 10px;">
        <h2 style="font-size: 14px; text-transform: uppercase; color: #71717a; font-weight: 600; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #e4e4e7; padding-bottom: 8px;">Move Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">From Zip:</td>
            <td style="padding: 8px 0; color: #3f3f46;"><span style="background-color: #fef3c7; padding: 4px 8px; border-radius: 4px; color: #b45309; font-weight: 600; font-size: 14px;">${fromZip || 'N/A'}</span></td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">To Zip:</td>
            <td style="padding: 8px 0; color: #3f3f46;"><span style="background-color: #fef3c7; padding: 4px 8px; border-radius: 4px; color: #b45309; font-weight: 600; font-size: 14px;">${toZip || 'N/A'}</span></td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Move Size:</td>
            <td style="padding: 8px 0; color: #3f3f46;">${moveSize || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Target Date:</td>
            <td style="padding: 8px 0; color: #18181b; font-weight: 600;">${moveDate ? new Date(moveDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '<span style="color: #a1a1aa; font-weight: normal; font-style: italic;">Not provided</span>'}</td>
          </tr>
        </table>
      </div>
      
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px; text-align: center; color: #71717a; font-size: 12px; border-top: 1px solid #e4e4e7;">
      This email was automatically generated from the Rent-A-Hand Windsor contact form.<br>
      &copy; ${new Date().getFullYear()} Rent-A-Hand Windsor.
    </div>
    
  </div>
</body>
</html>
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
