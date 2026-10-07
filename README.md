# Siva Manikandan S — Professional UAV Flight Test Portfolio

A single-page portfolio website for **Siva Manikandan S**, Prototype Flight Test Pilot specialising in UAV flight test, envelope expansion, system identification, and DGCA Type Certification.

Designed with a calm, corporate, aerospace-engineering aesthetic. Built with **Vite, React 18, TypeScript, Tailwind CSS, and Framer Motion**.

---

## Live Deployment & Repository

- **GitHub Repository**: [https://github.com/benedictrejones31/Siva_portfolio.git](https://github.com/benedictrejones31/Siva_portfolio.git)
- **Deployment Platform**: Vercel

---

## Tech Stack & Architecture

- **Core Framework**: React 18 with TypeScript and Vite
- **Styling**: Tailwind CSS with CSS variables for dynamic design tokens
- **Animations**: Framer Motion (subtle 150–300ms transitions, strictly adhering to `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Email Dispatch**: Resend integration via serverless function (`/api/send`) and Vite development middleware
- **Accessibility**: WCAG AA/AAA contrast ratios, keyboard navigation, full ARIA attributes, semantic HTML
- **SEO & Social**: Rich Open Graph meta tags, Twitter card tags, SVG favicon, and schema.org `Person` JSON-LD structured data

---

## Design System Tokens

### Light Theme
- `--bg`: `#F7F6F2` (warm off-white)
- `--surface`: `#FFFFFF`
- `--text`: `#1F2A33` (deep slate)
- `--muted`: `#5F6B76`
- `--border`: `#E4E2DB`
- `--accent`: `#5B7C8D` (muted steel blue)
- `--accent-soft`: `#E6EEF1`

### Dark Theme
- `--bg`: `#12171B`
- `--surface`: `#1A2127`
- `--text`: `#E8ECEF`
- `--muted`: `#9AA6B0`
- `--border`: `#28313A`
- `--accent`: `#8FB0C0`
- `--accent-soft`: `#1F2C33`

---

## Directory Structure

```text
├── api/
│   └── send.ts                  # Vercel serverless function for Resend email dispatch
├── public/
│   ├── favicon.svg              # Custom "SM" aerospace-styled SVG favicon
│   └── siva-manikandan.jpg      # Official portrait photograph
├── src/
│   ├── components/
│   │   ├── About.tsx            # Flight test philosophy & core pillars
│   │   ├── Capabilities.tsx     # Fixed-Wing / Multirotor segmented toggle + tools stack
│   │   ├── Contact.tsx          # Resend contact form, mailto, copy buttons, phone reveal
│   │   ├── Credentials.tsx      # DGCA license & academic qualification
│   │   ├── Experience.tsx       # Accordion-based operational flight roles
│   │   ├── FlightArtSvg.tsx     # Inline SVG telemetry grid & UAV wireframe silhouettes
│   │   ├── Footer.tsx           # Signature, copyright 2026, back-to-top button
│   │   ├── Hero.tsx             # Hero section with portrait card and CTAs
│   │   ├── Highlights.tsx       # 4 milestone programs with outcomes
│   │   ├── KeyMetrics.tsx       # 4 metric cards with ~900ms count-up
│   │   ├── Navbar.tsx           # Sticky blurred header, active link indicator, theme toggle
│   │   └── SectionWrapper.tsx   # Viewport scroll fade-up (12px) wrapper
│   ├── data/
│   │   └── content.ts           # Centralized portfolio content (cleanly separated for edits)
│   ├── hooks/
│   │   └── useTheme.ts          # Safe localStorage theme persistence & system preference
│   ├── App.tsx                  # Strict 10-step page layout order
│   ├── index.css                # Tailwind base, CSS variables, reduced-motion rules
│   └── main.tsx                 # React DOM mount point
├── CONTENT_TODO.md              # Client checklist for confirming specific test metrics
├── .env.example                 # Environment variables template
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                  # Vercel SPA routing and serverless function rewrite rules
└── vite.config.ts               # Vite configuration with local Resend dev server middleware
```

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20.11.1)
- npm 9+ (tested on npm 10.2.4)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/benedictrejones31/Siva_portfolio.git
cd Siva_portfolio
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your Resend API Key:
```bash
cp .env.example .env.local
```

### 3. Run Local Development Server
Start Vite with the integrated Resend dev middleware:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
Typecheck and bundle into the `dist/` directory:
```bash
npm run build
```

To preview the production bundle locally:
```bash
npm run preview
```

---

## Contact Form & Resend Setup

The contact form is configured to send emails directly to `sivamanikandan1000@gmail.com`.

For production deployment on **Vercel**:
1. Go to your project settings on **Vercel Dashboard**.
2. Navigate to **Settings** > **Environment Variables**.
3. Add a new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API Key
4. Redeploy or trigger a build.

---

## Deploying to Vercel

1. Push all code to the GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete professional flight test pilot portfolio website"
   git push origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project** from GitHub.
3. Choose `benedictrejones31/Siva_portfolio`.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. In **Environment Variables**, add `RESEND_API_KEY`.
8. Click **Deploy**.

The Vercel Serverless Function `/api/send` will automatically route form submissions to Resend.

