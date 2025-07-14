"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  MessageCircle, 
  Share, 
  ExternalLink, 
  Github,
  Star,
  GitFork
} from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js and TypeScript. Features include user authentication, payment integration, and admin dashboard.",
      image: "/project1.svg",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      stats: { stars: 24, forks: 8, likes: 156 },
      demoUrl: "#",
      githubUrl: "#",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/project1.svg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      stats: { stars: 18, forks: 5, likes: 92 },
      demoUrl: "#",
      githubUrl: "#",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive charts, and responsive design.",
      image: "/project1.svg",
      tags: ["Vue.js", "Chart.js", "OpenWeather API"],
      stats: { stars: 31, forks: 12, likes: 203 },
      demoUrl: "#",
      githubUrl: "#",
      timestamp: "2 weeks ago"
    }
  ];

  const handleLike = (projectId: number) => {
    console.log("Liked project:", projectId);
  };

  const handleShare = (projectId: number) => {
    console.log("Shared project:", projectId);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">My Projects</h2>
        <Button size="sm" variant="outline">
          <Github className="w-4 h-4 mr-2" />
          View All
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
                    <AvatarImage src="/avatar.svg" alt="Profile" />
                    <AvatarFallback>TQ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">tensuqiuwulu</span>
                      <Badge variant="secondary" className="text-xs">
                        Project
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{project.timestamp}</p>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative aspect-video mb-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.stats.forks}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>

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
                        className="p-0 h-auto"
                        onClick={() => handleLike(project.id)}
                      >
                        <Heart className="w-5 h-5 mr-1" />
                        <span className="text-sm">{project.stats.likes}</span>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto"
                      >
                        <MessageCircle className="w-5 h-5 mr-1" />
                        <span className="text-sm">Comment</span>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto"
                        onClick={() => handleShare(project.id)}
                      >
                        <Share className="w-5 h-5 mr-1" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>

                    <div className="flex gap-2 w-full">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
