import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

// Optimized font loading via next/font (self-hosted, no external requests)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Favicon - real files for Google indexing */}
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 selection:bg-primary-500 selection:text-white antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
