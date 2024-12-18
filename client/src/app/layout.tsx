import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import MainNavbar from '@/components/navbar/main-navbar';
import Provider from '@/components/provider/provider';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Movies Flix',
  description: ' Movie Recommendation ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <MainNavbar />
          <ThemeToggle />
          {children}
        </Provider>
      </body>
    </html>
  );
}
