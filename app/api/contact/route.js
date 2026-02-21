import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('📨 Contact form submitted');
  
  try {
    // Get form data
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({
        success: false,
        error: 'Name, email, and message are required',
        userMessage: 'Please fill in all required fields: Name, Email, and Message.'
      }, { status: 400 });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email format',
        userMessage: 'Please enter a valid email address.'
      }, { status: 400 });
    }
    
    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Missing Gmail credentials');
      return NextResponse.json({
        success: false,
        error: 'Email service configuration error',
        userMessage: 'Email service is temporarily unavailable. Please contact us directly at strategic@asblogistics.nl'
      }, { status: 500 });
    }
    
    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    
    // Verify connection first
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError);
      return NextResponse.json({
        success: false,
        error: 'Email service connection failed',
        userMessage: 'Unable to connect to email service. Please try again in a few minutes.'
      }, { status: 500 });
    }
    
    // Generate reference number
    const referenceNumber = `ASB-${Date.now().toString().slice(-8)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    
    // ============================================
    // 1. SIMPLE ADMIN EMAIL
    // ============================================
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry - ASB Logistics</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f4f7;
            margin: 0;
            padding: 20px;
            line-height: 1.5;
            color: #1a1a1a;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .header {
            background-color: #2B5F8E;
            padding: 30px 24px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            letter-spacing: -0.5px;
          }
          .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            margin-top: 8px;
          }
          .badge {
            display: inline-block;
            background-color: #F7A233;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            padding: 6px 16px;
            border-radius: 20px;
            margin-top: 12px;
          }
          .content {
            padding: 32px 24px;
          }
          .reference {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
            text-align: center;
          }
          .reference-label {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 4px;
          }
          .reference-number {
            font-size: 20px;
            font-weight: 700;
            color: #2B5F8E;
            font-family: monospace;
            letter-spacing: 1px;
          }
          .section {
            margin-bottom: 28px;
          }
          .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #2B5F8E;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #F7A233;
          }
          .info-row {
            display: flex;
            margin-bottom: 12px;
            flex-wrap: wrap;
          }
          .info-label {
            width: 100px;
            font-weight: 600;
            color: #64748b;
          }
          .info-value {
            flex: 1;
            color: #1a1a1a;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #F7A233;
            padding: 20px;
            border-radius: 8px;
            margin: 16px 0;
          }
          .message-box p {
            margin-bottom: 8px;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #f8fafc;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            color: #64748b;
            font-size: 14px;
            margin: 4px 0;
          }
          .button {
            display: inline-block;
            background-color: #2B5F8E;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-weight: 500;
            margin-top: 16px;
          }
          @media (max-width: 480px) {
            .info-row {
              flex-direction: column;
            }
            .info-label {
              width: 100%;
              margin-bottom: 4px;
            }
            .container {
              border-radius: 8px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Strategic Inquiry</h1>
            <p>ASB Logistics Contact Form</p>
            <span class="badge">HIGH PRIORITY</span>
          </div>
          
          <div class="content">
            <div class="reference">
              <div class="reference-label">Reference Number</div>
              <div class="reference-number">${referenceNumber}</div>
            </div>
            
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">${formData.name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">${formData.email}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Company:</span>
                <span class="info-value">${formData.company || 'Not provided'}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value">${formData.phone || 'Not provided'}</span>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">Inquiry Details</div>
              <div class="info-row">
                <span class="info-label">Subject:</span>
                <span class="info-value">${formData.subject || 'No subject provided'}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Department:</span>
                <span class="info-value">${formData.department || 'Strategic Partnership'}</span>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">Message</div>
              <div class="message-box">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 24px; padding: 16px 0;">
  <p style="color: #4A5568; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">
    ⚡ Submitted: ${new Date().toLocaleString()}
  </p>
  <a href="mailto:${formData.email}?subject=Re: ${formData.subject || 'ASB Logistics Inquiry'}" 
     class="button"
     style="display: inline-block; 
            background: linear-gradient(135deg, #2B5F8E 0%, #1e4a72 100%);
            color: #FFFFFF; 
            text-decoration: none; 
            padding: 14px 32px; 
            border-radius: 8px; 
            font-weight: 600; 
            font-size: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 12px rgba(43, 95, 142, 0.3);
            transition: all 0.3s ease;">
    <span style="margin-right: 8px;">✉️</span>
    Reply to ${formData.name.split(' ')[0]}
    <span style="margin-left: 8px;">→</span>
  </a>
</div>
          </div>
          
          <div class="footer">
            <p>📍 Logistiekweg 12, 2991 LV Barendrecht, Netherlands</p>
            <p>📞 +31 (0) 180 123 456 | ✉️ strategic@asblogistics.nl</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const adminTextContent = `NEW STRATEGIC INQUIRY - ASB Logistics
================================
Reference: ${referenceNumber}

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

INQUIRY DETAILS:
Subject: ${formData.subject || 'No subject provided'}
Department: ${formData.department || 'Strategic Partnership'}

MESSAGE:
${formData.message}

Submitted: ${new Date().toLocaleString()}

ASB Logistics
Logistiekweg 12, 2991 LV Barendrecht, Netherlands
+31 (0) 180 123 456 | strategic@asblogistics.nl`;
    
    // ============================================
    // 2. SIMPLE USER CONFIRMATION EMAIL
    // ============================================
    const userHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - ASB Logistics</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f4f7;
            margin: 0;
            padding: 20px;
            line-height: 1.5;
            color: #1a1a1a;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .header {
            background-color: #2B5F8E;
            padding: 40px 24px;
            text-align: center;
          }
          .checkmark {
            width: 60px;
            height: 60px;
            background-color: #F7A233;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            margin: 0 auto 20px;
          }
          .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 600;
            margin: 0;
          }
          .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            margin-top: 8px;
          }
          .content {
            padding: 40px 24px;
          }
          .greeting {
            font-size: 20px;
            color: #2B5F8E;
            font-weight: 600;
            margin-bottom: 16px;
          }
          .reference-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 24px 0;
            text-align: center;
          }
          .reference-label {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 8px;
          }
          .reference-number {
            font-size: 24px;
            font-weight: 700;
            color: #2B5F8E;
            font-family: monospace;
            letter-spacing: 2px;
          }
          .summary-box {
            background-color: #f8fafc;
            border-left: 4px solid #F7A233;
            padding: 20px;
            border-radius: 8px;
            margin: 24px 0;
          }
          .summary-title {
            font-weight: 600;
            color: #2B5F8E;
            margin-bottom: 12px;
          }
          .timeline {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin: 24px 0;
          }
          .timeline-item {
            flex: 1 1 calc(50% - 8px);
            background-color: #f8fafc;
            padding: 16px;
            border-radius: 8px;
            text-align: center;
          }
          .timeline-icon {
            font-size: 24px;
            margin-bottom: 8px;
          }
          .timeline-title {
            font-weight: 600;
            color: #2B5F8E;
            margin-bottom: 4px;
          }
          .timeline-desc {
            font-size: 13px;
            color: #64748b;
          }
          .contact-card {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 24px 0;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 12px 0;
          }
          .contact-icon {
            width: 32px;
            text-align: center;
            font-size: 18px;
          }
          .contact-text {
            color: #1a1a1a;
          }
          .contact-text strong {
            color: #2B5F8E;
          }
          .footer {
            background-color: #f8fafc;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            color: #64748b;
            font-size: 14px;
            margin: 4px 0;
          }
          .button {
            display: inline-block;
            background-color: #F7A233;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 6px;
            font-weight: 500;
            margin: 20px 0;
          }
          @media (max-width: 480px) {
            .timeline-item {
              flex: 1 1 100%;
            }
            .header h1 {
              font-size: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="checkmark">✓</div>
            <h1>Thank You!</h1>
            <p>Your inquiry has been received</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Dear ${formData.name.split(' ')[0]},
            </div>
            
            <p style="margin-bottom: 16px;">
              Thank you for contacting <strong>ASB Logistics</strong>. We have received your inquiry and our team will respond within 2 business hours.
            </p>
            
            <div class="reference-box">
              <div class="reference-label">Your Reference Number</div>
              <div class="reference-number">${referenceNumber}</div>
              <p style="font-size: 13px; color: #64748b; margin-top: 8px;">
                Please quote this number in any future correspondence
              </p>
            </div>
            
            <div class="summary-box">
              <div class="summary-title">📋 Your Inquiry Summary</div>
              <p><strong>Subject:</strong> ${formData.subject || 'Strategic Inquiry'}</p>
              <p style="margin-top: 8px;"><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
            
            <h3 style="color: #2B5F8E; margin: 24px 0 16px;">⏱️ What Happens Next?</h3>
            
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-icon">📞</div>
                <div class="timeline-title">2 Hours</div>
                <div class="timeline-desc">Executive review</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">🤝</div>
                <div class="timeline-title">4-6 Hours</div>
                <div class="timeline-desc">Strategic contact</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">📊</div>
                <div class="timeline-title">24 Hours</div>
                <div class="timeline-desc">Initial proposal</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">🌍</div>
                <div class="timeline-title">48 Hours</div>
                <div class="timeline-desc">Global alignment</div>
              </div>
            </div>
            
            <h3 style="color: #2B5F8E; margin: 24px 0 16px;">📞 Need Immediate Assistance?</h3>
            
            <div class="contact-card">
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <span class="contact-text"><strong>24/7 Emergency:</strong> +31 (0) 180 123 456</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span class="contact-text"><strong>Strategic:</strong> strategic@asblogistics.nl</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">🌐</span>
                <span class="contact-text"><strong>India:</strong> india@asblogistics.in</span>
              </div>
            </div>
            
            <div style="text-align: center;">
              <a href="https://asblogistics.nl/track?ref=${referenceNumber}" class="button">
                Track Your Inquiry
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>ASB Logistics</strong></p>
            <p>Logistiekweg 12, 2991 LV Barendrecht, Netherlands</p>
            <p>📞 +31 (0) 180 123 456 | ✉️ strategic@asblogistics.nl</p>
            <p style="margin-top: 16px; font-size: 12px;">
              This is an automated confirmation, please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const userTextContent = `Thank You for Contacting ASB Logistics
================================
Reference: ${referenceNumber}

Dear ${formData.name},

Thank you for contacting ASB Logistics. We have received your inquiry and our team will respond within 2 business hours.

YOUR INQUIRY SUMMARY:
Subject: ${formData.subject || 'Strategic Inquiry'}

Message:
${formData.message}

WHAT HAPPENS NEXT:
• 2 Hours: Executive review
• 4-6 Hours: Strategic contact
• 24 Hours: Initial proposal
• 48 Hours: Global alignment

IMMEDIATE ASSISTANCE:
24/7 Emergency: +31 (0) 180 123 456
Strategic: strategic@asblogistics.nl
India: india@asblogistics.in

Track your inquiry: https://asblogistics.nl/track?ref=${referenceNumber}

---
ASB Logistics
Logistiekweg 12, 2991 LV Barendrecht, Netherlands
+31 (0) 180 123 456 | strategic@asblogistics.nl

This is an automated confirmation, please do not reply to this email.`;
    
    // ============================================
    // SEND BOTH EMAILS
    // ============================================
    
    // Send email to admin
    const adminInfo = await transporter.sendMail({
      from: `"ASB Logistics" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: formData.email,
      subject: `🚀 New Inquiry: ${formData.name} - ${formData.subject?.substring(0, 50) || 'Strategic Partnership'}`,
      html: adminHtmlContent,
      text: adminTextContent,
    });
    
    console.log('✅ Admin email sent! ID:', adminInfo.messageId);
    
    // Send confirmation email to user
    const userInfo = await transporter.sendMail({
      from: `"ASB Logistics" <${process.env.GMAIL_USER}>`,
      to: formData.email,
      subject: `✅ Thank You for Contacting ASB Logistics (Ref: ${referenceNumber})`,
      html: userHtmlContent,
      text: userTextContent,
    });
    
    console.log('✅ User confirmation email sent! ID:', userInfo.messageId);
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 2 business hours.',
      reference: referenceNumber
    });
    
  } catch (error) {
    console.error('❌ Email error:', error);
    
    // User-friendly error messages
    let userMessage = 'Unable to send message. Please try again or contact us directly at strategic@asblogistics.nl';
    let errorType = 'Unknown error';
    
    if (error.code === 'EAUTH') {
      userMessage = 'Email authentication failed. Please ensure 2-Step Verification is enabled and correct app password is used.';
      errorType = 'Authentication Error';
    } else if (error.code === 'ECONNECTION') {
      userMessage = 'Unable to connect to email service. Please check your internet connection.';
      errorType = 'Connection Error';
    } else if (error.code === 'EENVELOPE') {
      userMessage = 'Invalid email address format. Please check the email addresses.';
      errorType = 'Address Error';
    } else if (error.message.includes('rate limit') || error.message.includes('quota')) {
      userMessage = 'Email sending limit reached. Please try again in a few minutes.';
      errorType = 'Rate Limit';
    }
    
    return NextResponse.json({
      success: false,
      error: errorType,
      userMessage: userMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}