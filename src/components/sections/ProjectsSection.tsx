"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageCarousel from "@/components/ui/image-carousel";
import Image from "next/image";
import {
  Heart,
  Share,
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [zoomedImage, setZoomedImage] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
  } | null>(null);

  const toggleExpanded = (projectId: number) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const openImageZoom = (images: string[], index: number, title: string) => {
    setZoomedImage({ images, currentIndex: index, title });
  };

  const closeImageZoom = () => {
    setZoomedImage(null);
  };

  const nextZoomImage = () => {
    if (zoomedImage) {
      setZoomedImage({
        ...zoomedImage,
        currentIndex: (zoomedImage.currentIndex + 1) % zoomedImage.images.length,
      });
    }
  };

  const prevZoomImage = () => {
    if (zoomedImage) {
      setZoomedImage({
        ...zoomedImage,
        currentIndex: (zoomedImage.currentIndex - 1 + zoomedImage.images.length) % zoomedImage.images.length,
      });
    }
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const projects = [
    {
      id: 1,
      title: "BUPDA Bali",
      description:
        "A comprehensive online marketplace application designed specifically for villages in Bali Province. BUPDA Bali connects rural communities with affordable products and services, featuring competitive pricing and flexible payment options. The app's standout features include pay-later functionality, budget-friendly pricing, local vendor integration, and community-focused shopping experience. Built to support village economies and provide accessible e-commerce solutions for rural areas across Bali.",
      images: ["/bupda1.webp", "/bupda2.webp"],
      tags: ["Golang", "Flutter", "MySQL"],
      stats: { stars: 18, forks: 5, likes: 92 },
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.bubda.bali.bupda_bali&pcampaignid=web_share",
      githubUrl: "#",
      timestamp: "1 week ago",
    },
    {
      id: 2,
      title: "Teman Bunda Belanja",
      description:
        "A comprehensive online grocery shopping application designed to make daily shopping convenient and accessible for families. Teman Bunda Belanja connects customers with fresh groceries, household essentials, and daily necessities through a user-friendly mobile platform. Features include real-time inventory updates, flexible delivery options, secure payment methods, product quality guarantee, and personalized shopping recommendations. Built to support busy families and provide reliable grocery delivery services with competitive pricing and excellent customer service.",
      images: ["/bunda.webp"],
      tags: ["Golang", "Flutter", "MySQL"],
      stats: { stars: 18, forks: 5, likes: 92 },
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.sembako_teman_bunda&pcampaignid=web_share",
      githubUrl: "#",
      timestamp: "1 week ago",
    },
    {
      id: 3,
      title: "TJSL Provinsi Bali",
      description:
        "A comprehensive Corporate Social Responsibility (CSR) management platform for Bali Province. The system enables companies to register, plan, execute, and report their CSR activities in accordance with Indonesian regulations. Features include project proposal submission, budget management, progress tracking, impact measurement, and collaborative coordination between corporations and government agencies to maximize social impact across Bali.",
      images: ["/tjsl1.webp", "/tjsl2.webp", "/tjsl3.webp"],
      tags: ["AdonisJS", "NextJS", "MySQL"],
      stats: { stars: 18, forks: 5, likes: 92 },
      demoUrl: "https://tjsl.baliprov.go.id",
      githubUrl: "#",
      timestamp: "1 week ago",
    },
    {
      id: 4,
      title: "PRESTISE",
      description:
        "A comprehensive digital permit application system for Bali Province government. PRESTISE streamlines the permit and licensing process for businesses and individuals. Features include online application submission, document management, approval workflow, real-time status tracking, digital signatures, and integrated payment system. The platform enhances government service delivery by reducing bureaucracy and processing time while ensuring transparency and accountability.",
      images: ["/prestise1.webp", "/prestise2.webp", "/prestise3.webp"],
      tags: ["Laravel", "VueJS"],
      stats: { stars: 31, forks: 12, likes: 203 },
      demoUrl: "https://prestise.baliprov.go.id/",
      githubUrl: "#",
      timestamp: "2 weeks ago",
    },
  ];

  const handleLike = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      console.log(`Liked project: ${project.title}`);
      // Here you could update the likes count in state if needed
      // For now, just log the action
    }
  };

  const handleShare = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && navigator.share) {
      navigator
        .share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        })
        .catch(console.error);
    } else if (project) {
      // Fallback: copy to clipboard
      const shareText = `Check out ${project.title}: ${project.description}`;
      navigator.clipboard
        .writeText(shareText)
        .then(() => {
          console.log("Project details copied to clipboard");
        })
        .catch(() => {
          console.log("Could not copy to clipboard");
        });
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">My Projects</h2>
        <Button size="sm" variant="outline" asChild>
          <a
            href="https://github.com/tensuqiuwulu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All
          </a>
        </Button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="flex items-center gap-3 p-4 pb-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/profile.jpg" alt="Profile" />
                    <AvatarFallback>TQ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        tensuqiuwulu
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        Project
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {project.timestamp}
                    </p>
                  </div>
                </div>

                {/* Project Images */}
                <div className="mb-3">
                  <ImageCarousel 
                    images={project.images} 
                    alt={project.title}
                    onImageClick={(index: number) => openImageZoom(project.images, index, project.title)}
                  />
                </div>

                {/* Project Content */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                  </div>

                  <div className="mb-3">
                    {expandedProjects.includes(project.id) ? (
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                        <button
                          onClick={() => toggleExpanded(project.id)}
                          className="ml-2 text-primary hover:underline font-medium"
                        >
                          Read less
                        </button>
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {truncateText(project.description)}
                        {project.description.length > 120 && (
                          <button
                            onClick={() => toggleExpanded(project.id)}
                            className="ml-2 text-primary hover:underline font-medium"
                          >
                            Read more
                          </button>
                        )}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-muted-foreground hover:text-red-500"
                        onClick={() => handleLike(project.id)}
                      >
                        <Heart className="w-5 h-5 mr-1" />
                        <span className="text-sm">{project.stats.likes}</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-muted-foreground hover:text-primary"
                        onClick={() => handleShare(project.id)}
                      >
                        <Share className="w-5 h-5 mr-1" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>

                    <div className="flex gap-2 w-full">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Link Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeImageZoom}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageZoom}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Navigation */}
              {zoomedImage.images.length > 1 && (
                <>
                  <button
                    onClick={prevZoomImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextZoomImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={zoomedImage.images[zoomedImage.currentIndex]}
                  alt={`${zoomedImage.title} ${zoomedImage.currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={85}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {zoomedImage.title} ({zoomedImage.currentIndex + 1}/{zoomedImage.images.length})
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
