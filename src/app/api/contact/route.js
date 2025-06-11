import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { username, email, phone, vehicle_type, service, package: selectedPackage, location, note } = body;

  try {
    const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Use your own verified domain later
        to: [`nativeaccess11@gmail.com`], // Replace this with the Resend test email address for now
        subject: 'New Contact Form Submission',
        html: `
          <p><strong>Name:</strong> ${username}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Vehicle Type:</strong> ${vehicle_type}</p>
          <p><strong>Lesson Type:</strong> ${service}</p>
          <p><strong>Package:</strong> ${selectedPackage}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Message:</strong> ${note}</p>
        `,
      });
      

    if (error) {
      console.error('Email sending error:', error);  // Log detailed error information
      return new Response(
        JSON.stringify({ success: false, error: error.message || 'Unknown error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Server error:', err);  // Log detailed error information
    return new Response(
      JSON.stringify({ success: false, error: err.message || 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
