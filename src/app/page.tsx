"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileHeader from "@/components/MobileHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobileStories from "@/components/MobileStories";
import MobilePost from "@/components/MobilePost";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import CreatePostSection from "@/components/sections/CreatePostSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tensu Qiuwulu",
  jobTitle: "Full Stack Developer",
  url: "https://tensuqiuwulu.com",
  email: "tensuqiuwulu@example.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "Indonesia"
  },
  sameAs: [
    "https://github.com/tensuqiuwulu",
    "https://linkedin.com/in/tensuqiuwulu",
    "https://x.com/tensuqiuwulu"
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "Full Stack Development",
    "Web Development"
  ],
  description: "Full Stack Developer dengan pengalaman 3+ tahun dalam pengembangan web modern. Spesialis dalam React, Next.js, TypeScript, dan Node.js."
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const stories = [
    {
      id: "1",
      name: "JavaScript",
      image: "/next.svg",
      isViewed: false,
    },
    {
      id: "2", 
      name: "React",
      image: "/react.svg",
      isViewed: true,
    },
    {
      id: "3",
      name: "Next.js",
      image: "/next.svg",
      isViewed: false,
    },
    {
      id: "4",
      name: "TypeScript",
      image: "/typescript.svg",
      isViewed: false,
    },
  ];

  const posts = [
    {
      id: "1",
      author: {
        name: "Tensu Qiuwulu",
        username: "tensuqiuwulu",
        avatar: "/avatar.svg",
        verified: true,
      },
      content: "Excited to share my latest project! 🚀 Built with Next.js 15 and TypeScript. Clean, modern, and performant.",
      images: ["/project1.svg", "/project1.svg", "/project1.svg"],
      timestamp: "2 hours ago",
      likes: 42,
      comments: 8,
      location: "Jakarta, Indonesia",
      tags: ["nextjs", "typescript", "webdev"],
    },
    {
      id: "2",
      author: {
        name: "Tensu Qiuwulu",
        username: "tensuqiuwulu",
        avatar: "/avatar.svg",
        verified: true,
      },
      content: "Working on some cool animations with Framer Motion today. The possibilities are endless! ✨",
      timestamp: "5 hours ago",
      likes: 28,
      comments: 3,
      tags: ["framermotion", "animation", "react"],
    },
    {
      id: "3",
      author: {
        name: "Tensu Qiuwulu",
        username: "tensuqiuwulu",
        avatar: "/avatar.svg",
        verified: true,
      },
      content: "Just deployed a new feature using TailwindCSS v4. The new @theme inline syntax is amazing! 🎨",
      images: ["/project1.svg", "/project1.svg"],
      timestamp: "1 day ago",
      likes: 55,
      comments: 12,
      tags: ["tailwindcss", "css", "design"],
    },
  ];

  const handleStoryClick = (storyId: string) => {
    console.log("Story clicked:", storyId);
  };

  const handlePostAction = (postId: string, action: string) => {
    console.log(`${action} on post:`, postId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div 
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            <MobileStories 
              stories={stories} 
              onStoryClick={handleStoryClick} 
            />
            <div className="space-y-0">
              {posts.map((post) => (
                <MobilePost
                  key={post.id}
                  post={post}
                  onLike={(id) => handlePostAction(id, "like")}
                  onComment={(id) => handlePostAction(id, "comment")}
                  onShare={(id) => handlePostAction(id, "share")}
                  onBookmark={(id) => handlePostAction(id, "bookmark")}
                />
              ))}
            </div>
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <AboutSection />
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
          >
            <ProjectsSection />
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
          >
            <ContactSection />
          </motion.div>
        );
      case "post":
        return (
          <motion.div
            key="post"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <CreatePostSection />
          </motion.div>
        );
      default:
        return null;
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
