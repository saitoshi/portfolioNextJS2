import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { NavBar } from './_components/NavBar/NavBar';
import './globals.css';
import { Footer } from './_components/Common/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Shin Saito - Portfolio',
  description: 'Portfolio Site For Shin Saito',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Script
        strategy='afterInteractive'
        src={'https://www.googletagmanager.com/gtag/js?id=G-YD9L68RKBM'}
      />
      <Script id='gtag-config' strategy='afterInteractive'>
        {`
                 window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-YD9L68RKBM');
            `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
