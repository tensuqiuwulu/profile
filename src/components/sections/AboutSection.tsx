"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Download, Briefcase, Clock, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const skills = [
    "React",
    "Next.js",
    "Golang",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Dinas Komunikasi, Informatika dan Statistik Provinsi Bali",
      period: "2022 - Present",
      location: "Bali, Indonesia",
      type: "Full Time",
    },
    {
      title: "Software Engineer",
      company: "PT. Bimasakti Sanjaya",
      period: "2021 - 2022",
      location: "Bali, Indonesia",
      type: "Full Time",
    },
    {
      title: "Full Stack Developer",
      company: "PT. BPR Kita Centradana",
      period: "2020 - 2021",
      location: "Bali, Indonesia",
      type: "Full Time",
    },
  ];

  const stats = [
    { 
      label: "Projects", 
      value: "10+", 
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    { 
      label: "Experience", 
      value: "4+ Years", 
      icon: Clock,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    { 
      label: "Technologies", 
      value: "15+", 
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    { 
      label: "Clients", 
      value: "10+", 
      icon: Users,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Profile Card */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/profile.jpg" alt="Profile" />
              <AvatarFallback>TQ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Tensu Qiuwulu</h2>
              <p className="text-muted-foreground">Full Stack Developer</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Bali, Indonesia</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Passionate full stack developer with 4+ years of experience building
            modern web applications. Specialized in React, Next.js, and
            TypeScript ecosystem.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button
                asChild
                size="sm"
                className="bg-primary hover:text-blue-600 text-primary-foreground"
              >
                <a
                  href="/cv.pdf"
                  download="Tensu_Qiuwulu_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download My CV
                </a>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Experience</h3>
          <div className="space-y-3">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-l-2 border-primary pl-4"
              >
                <div className="font-medium text-sm">{exp.title}</div>
                <div className="text-sm text-muted-foreground">
                  {exp.company}
                </div>
                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                  <div className="text-xs">
                    <Badge variant="outline" className="text-xs h-5">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
