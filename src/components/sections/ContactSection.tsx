"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
  SiInstagram,
} from "react-icons/si";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tensu104qiuwulu98@gmail.com",
      href: "#",
    },
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      value: "+62 877-6221-2544",
      href: "https://wa.me/6287762212544",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bali, Indonesia",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: SiInstagram,
      url: "https://instagram.com/tensuqiuwulu",
      color: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com/tensuqiuwulu",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://linkedin.com/in/tensuqiuwulu",
      color: "hover:text-blue-600",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using EmailJS to send email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Contact Full Stack Developer</h2>
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
              <h3 className="font-semibold">Tensu Qiuwulu - Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer
              </p>
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
                  target={method.label === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    method.label === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <method.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{method.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {method.value}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Connect with Developer</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors ${social.color} text-sm`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-4 h-4" />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Send className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Send Message to Developer</h3>
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

            <Button 
              type="submit" 
              className="w-full" 
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-3 rounded-lg"
              >
                <CheckCircle className="w-4 h-4" />
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg"
              >
                <AlertCircle className="w-4 h-4" />
                Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Developer Availability</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Response Time</span>
              <span className="font-medium">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Timezone</span>
              <span className="font-medium">GMT+8 (Makassar)</span>
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

export default memo(ContactSection);
