import { createTransport } from 'nodemailer'

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: EmailData) {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    subject: `Portfolio Contact Form: Message from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <h4>Message:</h4>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `
  }

  await transporter.sendMail(mailOptions)
}
