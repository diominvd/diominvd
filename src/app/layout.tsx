import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const font = localFont({
  src: "../fonts/PixelifySans-Regular.woff2"
})

export const metadata: Metadata = {
  title: 'diominvd',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
