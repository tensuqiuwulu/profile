"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SocialCard } from "@/components/ui/social-card";
import { FadeInUp, SlideInRight } from "@/components/ui/animated";
import { Mail, Download, MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background via-background to-primary/5 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          {/* Profile Header Card */}
          <FadeInUp>
            <SocialCard
              author={{
                name: "Tensu Qiuwulu",
                handle: "@tensuqiuwulu",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                verified: true
              }}
              timestamp="Active now"
              showActions={false}
              className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20"
            >
              <div className="space-y-4">
                {/* Cover Photo */}
                <div className="relative h-32 -mx-6 -mt-6 mb-4 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-secondary/30" />
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=200&fit=crop')] bg-cover bg-center opacity-30" />
                </div>

                {/* Profile Info */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-20 h-20 border-4 border-background shadow-lg -mt-10">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                      alt="Tensu Qiuwulu - Full Stack Developer"
                    />
                    <AvatarFallback>TQ</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold">Tensu Qiuwulu</h1>
                      <Badge variant="default" className="bg-primary/20 text-primary">
                        Available for work
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground">
                      Full Stack Developer • React & Next.js Enthusiast • Building amazing web experiences
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Jakarta, Indonesia</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined January 2021</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LinkIcon className="h-4 w-4" />
                        <span className="text-primary">tensuqiuwulu.com</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span><strong>150</strong> Following</span>
                      <span><strong>1.2k</strong> Followers</span>
                      <span><strong>350</strong> Connections</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <Button className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>
                  <Button variant="outline" size="icon">
                    <SiGithub className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <SiLinkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SocialCard>
          </FadeInUp>

          {/* Status Update Card */}
          <SlideInRight delay={0.2}>
            <SocialCard
              author={{
                name: "Tensu Qiuwulu",
                handle: "@tensuqiuwulu",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                verified: true
              }}
              timestamp="2h"
              content={
                <div>
                  <p className="mb-2">
                    🚀 Just shipped a new portfolio website with <strong>Next.js 15</strong> and <strong>TailwindCSS</strong>! 
                    The performance improvements are incredible. What do you think of the new design?
                  </p>
                </div>
              }
              tags={["NextJS", "TailwindCSS", "WebDev", "Portfolio"]}
              likes={42}
              comments={8}
              shares={3}
            />
          </SlideInRight>

          {/* Skills Showcase Card */}
          <SlideInRight delay={0.4}>
            <SocialCard
              author={{
                name: "Tensu Qiuwulu",
                handle: "@tensuqiuwulu",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                verified: true
              }}
              timestamp="1d"
              content={
                <div>
                  <p className="mb-3">My current tech stack 2024 🔥</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                      <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300">Frontend</h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400">React, Next.js, TypeScript</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <h4 className="font-semibold text-sm text-green-700 dark:text-green-300">Backend</h4>
                      <p className="text-xs text-green-600 dark:text-green-400">Node.js, Python, PostgreSQL</p>
                    </div>
                  </div>
                </div>
              }
              tags={["TechStack", "Frontend", "Backend", "React"]}
              likes={28}
              comments={5}
              shares={12}
            />
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
