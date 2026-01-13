import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abhijeetpachpute.com';

export const metadata: Metadata = {
  title: 'Abhijeet Pachpute | Software • AI • Security',
  description: 'Portfolio of Abhijeet Pachpute — MS CS @ University of Utah. Software engineering, AI/ML, and cybersecurity.',
  keywords: [
    'Abhijeet Pachpute',
    'Software Engineer',
    'AI Engineer',
    'Machine Learning',
    'Cybersecurity',
    'University of Utah',
    'Computer Science',
    'Full Stack Developer',
    'React',
    'Python',
    'Java',
    'AWS',
  ],
  authors: [{ name: 'Abhijeet Pachpute' }],
  creator: 'Abhijeet Pachpute',
  publisher: 'Abhijeet Pachpute',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Abhijeet Pachpute | Software • AI • Security',
    description: 'MS CS @ University of Utah. Building production software, shipping applied AI, and caring obsessively about security and reliability.',
    siteName: 'Abhijeet Pachpute Portfolio',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Abhijeet Pachpute - Building Intelligent & Secure Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijeet Pachpute | Software • AI • Security',
    description: 'MS CS @ University of Utah. Building production software, shipping applied AI, and caring obsessively about security and reliability.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhijeet Pachpute',
    jobTitle: 'Software Engineer | AI Engineer | Security Specialist',
    url: siteUrl,
    sameAs: [
      'https://linkedin.com/in/abhijeet-pachpute/',
      'https://github.com/AbhijeetP21',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Utah',
    },
    email: 'abhijeetsp21@gmail.com',
    knowsAbout: [
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Cybersecurity',
      'Full Stack Development',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%20%20%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2214%22%20fill%3D%22white%22%2F%3E%0A%20%20%3Ctext%20x%3D%2232%22%20y%3D%2245%22%20font-size%3D%2240%22%20text-anchor%3D%22middle%22%3E%F0%9F%8E%AF%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2310b981%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220.55%22%20stop-color%3D%22%236366f1%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230ea5e9%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2256%22%20height%3D%2256%22%20rx%3D%2214%22%20fill%3D%22url%28%23g%29%22/%3E%0A%20%20%3Cpath%20d%3D%22M20%2044V20h8.8c6.4%200%2010.2%203%2010.2%208.2%200%204.8-3.2%207.7-8.6%207.7H26v8.1h-6zM26%2031.4h3.8c2.6%200%204.2-1.1%204.2-3.2%200-2.2-1.6-3.3-4.2-3.3H26v6.5z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.92%22/%3E%0A%20%20%3Cpath%20d%3D%22M40%2044l-4.7-12.6h6.1L46%2044h-6z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.92%22/%3E%0A%3C/svg%3E"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 selection:bg-primary-500 selection:text-white antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
