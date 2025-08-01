import nodemailer from 'nodemailer';
import type { Contact } from '@shared/schema';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
});

export async function sendEmailNotification(contact: Contact): Promise<void> {
  const mailOptions = {
    from: process.env.SMTP_USER || 'your-email@gmail.com',
    to: 'bharathb451@gmail.com',
    subject: `New Contact Form Submission: ${contact.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b35;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          <p><strong>Subject:</strong> ${contact.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${contact.message}</p>
          <p><strong>Submitted:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
        </div>
        <p style="color: #666; font-size: 12px;">This email was sent from your portfolio website contact form.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
}
