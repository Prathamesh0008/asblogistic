export const ContactEmailTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #2B5F8E; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; background: #f9f9f9; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #2B5F8E; display: inline-block; width: 120px; }
        .message-box { background: white; padding: 20px; border-left: 4px solid #F7A233; margin: 20px 0; }
        .footer { background: #eee; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #666; }
        .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 New Strategic Inquiry</h1>
        <p>ABS Logistics Contact Form</p>
    </div>
    
    <div class="content">
        <div class="field">
            <span class="label">Name:</span> ${formData.name}
        </div>
        <div class="field">
            <span class="label">Company:</span> ${formData.company || 'Not provided'}
        </div>
        <div class="field">
            <span class="label">Email:</span> ${formData.email}
        </div>
        <div class="field">
            <span class="label">Phone:</span> ${formData.phone || 'Not provided'}
        </div>
        <div class="field">
            <span class="label">Department:</span> ${formData.department}
        </div>
        <div class="field">
            <span class="label">Subject:</span> ${formData.subject}
        </div>
        
        <div class="message-box">
            <strong>Message:</strong><br><br>
            ${formData.message.replace(/\n/g, '<br>')}
        </div>
        
        <div class="urgent">
            ⚡ <strong>Action Required:</strong> Please respond within 2 hours
        </div>
    </div>
    
    <div class="footer">
        <p>📧 This email was sent from your ABS Logistics contact form</p>
        <p>🕒 Received: ${new Date().toLocaleString()}</p>
        <p>🔗 <a href="https://abslogistics.com/admin">View in Dashboard</a></p>
    </div>
</body>
</html>
`;

export const ConfirmationEmailTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #2B5F8E; color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 40px; background: white; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }
        .highlight { color: #F7A233; font-weight: bold; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; color: #666; }
        .cta { background: #2B5F8E; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>✅ Thank You for Contacting ABS Logistics</h1>
    </div>
    
    <div class="content">
        <p>Dear <span class="highlight">${formData.name}</span>,</p>
        
        <p>Thank you for reaching out to <strong>ABS Logistics</strong>. We have received your inquiry regarding:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <strong>${formData.subject}</strong>
        </div>
        
        <p>Our strategic team is reviewing your request and will contact you within <span class="highlight">2 business hours</span>.</p>
        
        <p><strong>Reference Number:</strong> ABS-${Date.now().toString().slice(-6)}</p>
        
        <p>For immediate assistance, please contact our 24/7 support:</p>
        <p>📞 <strong>+31 (0) 180 123 456</strong></p>
        
        <a href="https://abslogistics.com/support" class="cta">Visit Our Support Portal</a>
    </div>
    
    <div class="footer">
        <p>ABS Logistics | Logistiekweg 12, 2991 LV Barendrecht, Netherlands</p>
        <p>📞 +31 (0) 180 123 456 | ✉️ strategic@asblogistics.nl</p>
        <p>© ${new Date().getFullYear()} ABS Logistics. All rights reserved.</p>
    </div>
</body>
</html>
`;