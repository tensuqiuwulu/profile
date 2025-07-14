"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import MobileHeader from "@/components/MobileHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components that are not immediately visible
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Loading component
const LoadingSection = () => (
  <div className="p-4 space-y-4">
    <Skeleton className="h-8 w-48" />
    <Skeleton className="h-32 w-full" />
    <Skeleton className="h-24 w-full" />
    <Skeleton className="h-24 w-full" />
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tensu Qiuwulu",
  jobTitle: "Full Stack Developer",
  url: "https://tensuqiuwulu.com",
  email: "tensuqiuwulu@example.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bali",
    addressRegion: "Bali",
    addressCountry: "Indonesia"
  },
  sameAs: [
    "https://github.com/tensuqiuwulu",
    "https://linkedin.com/in/tensuqiuwulu",
    "https://x.com/tensuqiuwulu"
  ],
  knowsAbout: [
    "React Development",
    "Next.js Framework",
    "TypeScript Programming",
    "Node.js Backend",
    "Python Development",
    "PostgreSQL Database",
    "MongoDB Database",
    "TailwindCSS Styling",
    "Full Stack Development",
    "Modern Web Development",
    "JavaScript Programming",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Responsive Design"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bali",
        addressCountry: "Indonesia"
      }
    }
  },
  description: "Professional Full Stack Developer with 4+ years experience in modern web development. Specialized in React, Next.js, TypeScript, Node.js, and Python. Expert in building scalable web applications and available for freelance projects.",
  alumniOf: "Software Engineering",
  workExample: [
    {
      "@type": "WebSite",
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js and TypeScript",
      url: "https://tensuqiuwulu.com"
    }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="animate-optimized"
          >
            <div className="sr-only">
              <h1>Tensu Qiuwulu - Full Stack Developer | React Next.js TypeScript Expert</h1>
            </div>
            <Suspense fallback={<LoadingSection />}>
              <AboutSection />
            </Suspense>
          </motion.div>
        );
      case "projects":
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="animate-optimized"
          >
            <Suspense fallback={<LoadingSection />}>
              <ProjectsSection />
            </Suspense>
          </motion.div>
        );
      case "contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="animate-optimized"
          >
            <Suspense fallback={<LoadingSection />}>
              <ContactSection />
            </Suspense>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="animate-optimized"
          >
            <div className="sr-only">
              <h1>Tensu Qiuwulu - Full Stack Developer | React Next.js TypeScript Expert</h1>
            </div>
            <Suspense fallback={<LoadingSection />}>
              <AboutSection />
            </Suspense>
          </motion.div>
        );
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <MobileHeader showSearch={false} />
        
        <main className="pt-16 pb-20">
          {renderContent()}
        </main>
        
        <MobileBottomNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </div>
    </>
  );
}
