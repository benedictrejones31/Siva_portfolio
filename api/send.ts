import { Resend } from 'resend';

// Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not defined in environment variables.');
      return res.status(500).json({
        error: 'Email service configuration missing. Please reach out directly via sivamanikandan1000@gmail.com.',
      });
    }

    const resend = new Resend(apiKey);

    const emailSubject = subject?.trim()
      ? `[UAV Flight Test Portfolio] ${subject.trim()} - from ${name.trim()}`
      : `[UAV Flight Test Portfolio] New Inquiry from ${name.trim()}`;

    const data = await resend.emails.send({
      from: 'Flight Test Portfolio <onboarding@resend.dev>',
      to: ['sivamanikandan1000@gmail.com'],
      replyTo: email.trim(),
      subject: emailSubject,
      text: `New contact inquiry received via portfolio website:

Name: ${name}
Email: ${email}
Subject / Program: ${subject || 'Not specified'}

Message:
${message}

---
Sent from Siva Manikandan S Flight Test Portfolio`,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error while sending email.' });
  }
}

