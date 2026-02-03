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
    
    // Create beautiful HTML email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            margin: 0;
            padding: 20px;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #2B5F8E 0%, #1a3d5e 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
          }
          .header:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #F7A233, #ffd166);
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header p {
            margin: 10px 0 0;
            opacity: 0.9;
            font-size: 16px;
          }
          .badge {
            display: inline-block;
            background: rgba(247, 162, 51, 0.15);
            color: #F7A233;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-top: 15px;
            border: 1px solid rgba(247, 162, 51, 0.3);
          }
          .content {
            padding: 40px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            color: #2B5F8E;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .section-title:before {
            content: '';
            width: 4px;
            height: 20px;
            background: #F7A233;
            border-radius: 2px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }
          .info-item {
            background: #f8fafc;
            padding: 16px;
            border-radius: 10px;
            border-left: 4px solid #2B5F8E;
          }
          .info-label {
            font-size: 13px;
            color: #666;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .info-value {
            font-size: 16px;
            color: #333;
            font-weight: 500;
          }
          .message-container {
            background: #fff9e6;
            border: 1px solid rgba(247, 162, 51, 0.2);
            border-radius: 12px;
            padding: 24px;
            margin-top: 10px;
            position: relative;
          }
          .message-container:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(to bottom, #F7A233, #ff9a3c);
            border-radius: 2px;
          }
          .message-label {
            color: #F7A233;
            font-weight: 600;
            margin-bottom: 12px;
            font-size: 15px;
          }
          .message-text {
            line-height: 1.6;
            color: #333;
            white-space: pre-wrap;
          }
          .footer {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 30px;
            text-align: center;
            border-top: 1px solid rgba(43, 95, 142, 0.1);
          }
          .footer p {
            margin: 5px 0;
            color: #666;
            font-size: 14px;
          }
          .timestamp {
            background: white;
            padding: 12px 20px;
            border-radius: 8px;
            display: inline-block;
            margin-top: 15px;
            border: 1px solid rgba(43, 95, 142, 0.1);
            font-size: 13px;
            color: #2B5F8E;
          }
          .action-button {
            display: inline-block;
            background: linear-gradient(135deg, #2B5F8E 0%, #1a3d5e 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 20px;
            border: none;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .action-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(43, 95, 142, 0.3);
          }
          .highlight {
            background: linear-gradient(120deg, rgba(247, 162, 51, 0.1) 0%, rgba(247, 162, 51, 0.05) 100%);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border: 1px solid rgba(247, 162, 51, 0.2);
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>🚀 New Strategic Inquiry</h1>
            <p>ABS Logistics Contact Form</p>
            <div class="badge">HIGH PRIORITY</div>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>⚡ Action Required:</strong> New strategic partnership inquiry received. Response timeframe: 2 business hours.
            </div>
            
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Name</div>
                  <div class="info-value">${formData.name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">
                    <a href="mailto:${formData.email}" style="color: #2B5F8E; text-decoration: none;">
                      ${formData.email}
                    </a>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-label">Company</div>
                  <div class="info-value">${formData.company || 'Not provided'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone</div>
                  <div class="info-value">${formData.phone || 'Not provided'}</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">Inquiry Details</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Subject</div>
                  <div class="info-value">${formData.subject || 'No subject provided'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Department</div>
                  <div class="info-value">${formData.department || 'Strategic Partnership'}</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">Strategic Brief</div>
              <div class="message-container">
                <div class="message-label">📝 Message:</div>
                <div class="message-text">${formData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <div class="timestamp">
                📅 Submitted: ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>This inquiry was received through the ABS Logistics strategic contact form</p>
            <p>📍 Logistiekweg 12, 2991 LV Barendrecht, Rotterdam Area, Netherlands</p>
            <p>📞 +31 (0) 180 123 456 | ✉️ strategic@asblogistics.nl</p>
            <button class="action-button" onclick="window.open('mailto:${formData.email}?subject=Re: ${formData.subject || 'ABS Logistics Inquiry'}')">
              Reply to ${formData.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Plain text version for email clients that don't support HTML
    const textContent = `NEW STRATEGIC INQUIRY - ABS Logistics
================================================================

CONTACT INFORMATION:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

INQUIRY DETAILS:
----------------
Subject: ${formData.subject || 'No subject provided'}
Department: ${formData.department || 'Strategic Partnership'}

MESSAGE:
--------
${formData.message}

================================================================
Submitted: ${new Date().toLocaleString()}
Priority: High - Response required within 2 business hours

This inquiry was received through the ABS Logistics strategic contact form.
Logistiekweg 12, 2991 LV Barendrecht, Netherlands
+31 (0) 180 123 456 | strategic@asblogistics.nl
================================================================`;
    
    // Send email
    const info = await transporter.sendMail({
      from: `"ABS Logistics" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: formData.email,
      subject: `🚀 Strategic Inquiry: ${formData.name} - ${formData.subject?.substring(0, 60) || 'ABS Logistics Partnership'}`,
      html: htmlContent,
      text: textContent,
    });
    
    console.log('✅ Email sent successfully! ID:', info.messageId);
    console.log('✅ To:', process.env.ADMIN_EMAIL);
    console.log('✅ Subject:', `Strategic Inquiry: ${formData.name}`);
    
    // SUCCESS RESPONSE with detailed information
    return NextResponse.json({
      success: true,
      message: 'Strategic connection established! Our executive team will contact you within 2 business hours.',
      emailId: info.messageId,
      timestamp: new Date().toISOString(),
      user: formData.name,
      reference: `ABS-${Date.now().toString().slice(-8)}`
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