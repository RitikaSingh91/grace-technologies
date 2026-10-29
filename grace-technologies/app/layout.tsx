import type { Metadata, Viewport } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import EnquiryProvider from '@/components/EnquiryProvider/EnquiryProvider';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import JsonLd from '@/components/JsonLd/JsonLd';
import SkipLink from '@/components/SkipLink/SkipLink';
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL, TWITTER_HANDLE } from '@/data/site';
import { cx } from '@/lib/cx';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-outfit', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-space-grotesk', display: 'swap' });

const OG_IMAGE = '/assets/images/og-image.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME}: software, AI and digital growth` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [{ url: '/assets/images/favicon.png', type: 'image/png' }],
    apple: [{ url: '/assets/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={cx(outfit.variable, spaceGrotesk.variable)}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <EnquiryProvider>
          <SkipLink />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
