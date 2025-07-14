import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Tensu Qiuwulu - Full Stack Developer | React Next.js TypeScript Expert",
    template: "%s | Tensu Qiuwulu - Full Stack Developer"
  },
  description: "Tensu Qiuwulu - Professional Full Stack Developer with 4+ years experience in React, Next.js, TypeScript, Node.js, Python, and modern web development. Specialized in building scalable web applications and available for freelance projects.",
  keywords: ["Tensu Qiuwulu", "Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Node.js Developer", "Python Developer", "Web Developer", "Frontend Developer", "Backend Developer", "JavaScript Expert", "Portfolio Website", "Freelance Developer", "Bali Developer", "Indonesia Developer", "Modern Web Development", "Scalable Applications"],
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
    title: "Tensu Qiuwulu - Full Stack Developer | React Next.js TypeScript Expert",
    description: "Professional Full Stack Developer with 4+ years experience in React, Next.js, TypeScript, Node.js, Python, and modern web development. Specialized in building scalable web applications.",
    url: "https://tensuqiuwulu.com",
    siteName: "Tensu Qiuwulu - Full Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tensu Qiuwulu - Full Stack Developer | React Next.js TypeScript Expert",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tensu Qiuwulu - Full Stack Developer | React Next.js TypeScript Expert",
    description: "Professional Full Stack Developer with 3+ years experience in modern web development. Specialized in React, Next.js, TypeScript, Node.js, and Python.",
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
        {/* Critical resources */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        
        {/* Icons with proper sizes */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.svg" sizes="192x192" />
        
        {/* Apple-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TQ Portfolio" />
        
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main-app.js" as="script" />
        
        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/_next/static/chunks/pages/_app.js" />
        <link rel="prefetch" href="/_next/static/chunks/webpack.js" />
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
