import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tensu Qiuwulu - Full Stack Developer",
    template: "%s | Tensu Qiuwulu"
  },
  description: "Portfolio website of Tensu Qiuwulu, a passionate Full Stack Developer specializing in modern web development with React, Next.js, TypeScript, and Node.js. Available for freelance projects and collaborations.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript", "Node.js", "Web Developer", "Frontend Developer", "Backend Developer", "JavaScript", "Portfolio"],
  authors: [{ name: "Tensu Qiuwulu", url: "https://tensuqiuwulu.com" }],
  creator: "Tensu Qiuwulu",
  publisher: "Tensu Qiuwulu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tensuqiuwulu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tensu Qiuwulu - Full Stack Developer",
    description: "Portfolio website of Tensu Qiuwulu, a passionate Full Stack Developer specializing in modern web development with React, Next.js, TypeScript, and Node.js.",
    url: "https://tensuqiuwulu.com",
    siteName: "Tensu Qiuwulu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tensu Qiuwulu - Full Stack Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tensu Qiuwulu - Full Stack Developer",
    description: "Portfolio website of Tensu Qiuwulu, a passionate Full Stack Developer specializing in modern web development.",
    creator: "@tensuqiuwulu",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="apple-touch-icon" href="/icon-192x192.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TQ Portfolio" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <div className="mobile-container mx-auto max-w-md min-h-screen bg-background relative">
          {children}
        </div>
      </body>
    </html>
  );
}
