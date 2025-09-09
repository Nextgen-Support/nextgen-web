import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendServiceRequestNotification = async (
  to: string,
  request: { name: string; email: string; subject: string; message: string }
) => {
  try {
    const mailOptions = {
      from: `"Service Request System" <${process.env.SMTP_FROM_EMAIL || 'noreply@example.com'}>`,
      to,
      subject: `New Service Request: ${request.subject}`,
      html: `
        <h2>New Service Request Received</h2>
        <p><strong>Name:</strong> ${request.name}</p>
        <p><strong>Email:</strong> ${request.email}</p>
        <p><strong>Subject:</strong> ${request.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${request.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>This is an automated message. Please do not reply directly to this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
