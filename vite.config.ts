import { defineConfig, Plugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { Resend } from 'resend';

function resendDevPlugin(resendKey?: string): Plugin {
  return {
    name: 'resend-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const { name, email, subject, message } = parsed;
              if (!name || !email || !message) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Name, email, and message are required.' }));
                return;
              }

              const key = process.env.RESEND_API_KEY || resendKey;
              if (!key) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    error: 'RESEND_API_KEY is not configured in your environment.',
                  })
                );
                return;
              }

              const resend = new Resend(key);
              const data = await resend.emails.send({
                from: 'Flight Test Portfolio <onboarding@resend.dev>',
                to: ['sivamanikandan1000@gmail.com'],
                replyTo: email.trim(),
                subject: subject?.trim()
                  ? `[UAV Flight Test Portfolio] ${subject.trim()} - from ${name.trim()}`
                  : `[UAV Flight Test Portfolio] New Inquiry from ${name.trim()}`,
                text: `New contact inquiry received via portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject / Program: ${subject || 'Not specified'}\n\nMessage:\n${message}\n\n---\nSent from Siva Manikandan S Flight Test Portfolio`,
              });
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, data }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message || 'Failed to send' }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), resendDevPlugin(env.RESEND_API_KEY)],
    server: {
      port: 3000,
      open: false,
    },
  };
});
