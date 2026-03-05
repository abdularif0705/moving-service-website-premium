import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, fromZip, toZip, moveSize } = body;

    // Validate request
    if (!firstName || !lastName || !fromZip || !toZip || !moveSize) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here is where you will integrate your chosen email API.
    // E.g., using Resend:
    /*
      import { Resend } from 'resend';
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: 'Quotes <onboarding@resend.dev>',
        to: 'your_email@example.com',
        subject: `New Moving Quote Request from ${firstName} ${lastName}`,
        html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
               <p><strong>From Zip:</strong> ${fromZip}</p>
               <p><strong>To Zip:</strong> ${toZip}</p>
               <p><strong>Move Size:</strong> ${moveSize}</p>`
      });
    */

    // For now, simulate a network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Return a success response
    return NextResponse.json(
      { message: 'Quote request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { message: 'Failed to submit request. Please try again later.' },
      { status: 500 }
    );
  }
}
