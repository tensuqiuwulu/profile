"use client";

import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/animated";
import { Mail, Heart, MapPin, Clock } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <FadeInUp>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">TQ</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <div>
                  <div className="font-semibold text-lg">Tensu Qiuwulu</div>
                  <div className="text-xs text-muted-foreground">@tensuqiuwulu</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Full Stack Developer passionate about creating innovative digital solutions and user-friendly experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">tensuqiuwulu@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Available for work</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Follow Me</h4>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary/10 hover:border-primary/20 transition-all"
                  asChild
                >
                  <a href="https://github.com/tensuqiuwulu" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-500 transition-all"
                  asChild
                >
                  <a href="https://linkedin.com/in/tensuqiuwulu" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-gray-500/10 hover:border-gray-500/20 hover:text-gray-500 transition-all"
                  asChild
                >
                  <a href="https://x.com/tensuqiuwulu" target="_blank" rel="noopener noreferrer">
                    <SiX className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="text-xs text-muted-foreground">
                Let&apos;s connect and build something amazing together!
              </div>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Tensu Qiuwulu. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & TailwindCSS</span>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-xs text-muted-foreground">Status:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">Available for work</span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}