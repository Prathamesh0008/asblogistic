import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate, ConfirmationEmailTemplate } from '@/app/emails/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Get form data
    const formData = await request.json();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // 1. Send to ADMIN (YOU)
    const adminEmail = await resend.emails.send({
      from: 'ABS Logistics <contact@abslogistics.com>', // Use your verified domain or Resend test domain
      to: [process.env.ADMIN_EMAIL], // Your email address
      reply_to: formData.email, // So you can reply directly
      subject: `New Contact: ${formData.subject || 'Inquiry from Website'}`,
      html: ContactEmailTemplate(formData),
    });
    
    console.log('✅ Email sent to admin:', adminEmail.data?.id);
    
    // 2. Send confirmation to USER (optional but recommended)
    try {
      const userEmail = await resend.emails.send({
        from: 'ABS Logistics <contact@abslogistics.com>',
        to: [formData.email],
        subject: 'Thank You for Contacting ABS Logistics',
        html: ConfirmationEmailTemplate(formData),
      });
      console.log('✅ Confirmation sent to user:', userEmail.data?.id);
    } catch (userError) {
      console.warn('⚠️ Could not send confirmation email:', userError.message);
      // Continue even if confirmation fails
    }
    
    // Success response
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      emailId: adminEmail.data?.id
    });
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to send email. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}