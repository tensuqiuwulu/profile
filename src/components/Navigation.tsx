"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  MessageCircle, 
  Home,
  User,
  Briefcase,
  Mail,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "About", href: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-lg border-b shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & User Info */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-bold">TQ</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">Tensu Qiuwulu</span>
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                  ✓ Verified
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">@tensuqiuwulu</p>
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 rounded-full border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 transition-all relative group"
                asChild
              >
                <a href={item.href}>
                  {item.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.name}
                  </span>
                </a>
              </Button>
            ))}
            
            <div className="w-px h-6 bg-border mx-2"></div>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 transition-all relative group"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Notifications
              </span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 transition-all relative group"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Messages
              </span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 transition-all relative group"
            >
              <Settings className="h-4 w-4" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Settings
              </span>
            </Button>
            
            <Button size="sm" className="ml-2 hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary">
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2">
            {/* Mobile Search */}
            <div className="px-3 pb-4">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 rounded-full border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 text-sm font-medium hover:text-primary transition-colors hover:bg-primary/10 rounded-lg mx-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              
              <div className="border-t my-2 mx-3"></div>
              
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all relative"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all relative"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button size="sm" className="hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
