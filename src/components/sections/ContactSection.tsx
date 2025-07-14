"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock
} from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tensuqiuwulu@example.com",
      href: "mailto:tensuqiuwulu@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 123 456 7890",
      href: "tel:+621234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: SiGithub,
      label: "GitHub",
      url: "https://github.com/tensuqiuwulu",
      color: "hover:text-gray-900"
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/tensuqiuwulu",
      color: "hover:text-blue-600"
    },
    {
      icon: SiX,
      label: "X (Twitter)",
      url: "https://x.com/tensuqiuwulu",
      color: "hover:text-gray-900"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Get in Touch</h2>
        <Badge variant="secondary" className="text-xs">
          Available for work
        </Badge>
      </div>

      {/* Profile Contact Card */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/profile.jpg" alt="Profile" />
              <AvatarFallback>TQ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">Tensu Qiuwulu</h3>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={method.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <method.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{method.label}</div>
                    <div className="text-xs text-muted-foreground">{method.value}</div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Send className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Send a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-sm"
                required
              />
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-sm"
                required
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="text-sm min-h-[100px]"
                required
              />
            </div>

            <Button type="submit" className="w-full" size="sm">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Connect with Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors ${social.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Availability</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Response Time</span>
              <span className="font-medium">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Timezone</span>
              <span className="font-medium">GMT+7 (Jakarta)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-600">Available</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
