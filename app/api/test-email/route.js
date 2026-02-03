import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    console.log('🔧 Testing Resend configuration...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key starts with:', process.env.RESEND_API_KEY?.substring(0, 10));
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Try to send a test email
    const { data, error } = await resend.emails.send({
      from: 'ABS Logistics <onboarding@resend.dev>', // Use Resend's test domain
      to: ['your-personal-email@gmail.com'], // CHANGE THIS TO YOUR EMAIL
      subject: '✅ Resend Test - ABS Logistics',
      html: '<h2>Resend Test Successful!</h2><p>Your email configuration is working correctly.</p>',
    });
    
    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json({
        success: false,
        error: error.message,
        details: error
      }, { status: 500 });
    }
    
    console.log('✅ Test email sent:', data);
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      emailId: data.id
    });
    
  } catch (error) {
    console.error('❌ Server error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}