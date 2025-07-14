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
  Camera, 
  Image as ImageIcon, 
  MapPin, 
  Smile, 
  AtSign,
  Hash,
  Send
} from "lucide-react";

export default function CreatePostSection() {
  const [postContent, setPostContent] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New post:", { content: postContent, location });
    // Handle post creation
    setPostContent("");
    setLocation("");
  };

  const quickActions = [
    { icon: Camera, label: "Photo", color: "text-blue-500" },
    { icon: ImageIcon, label: "Gallery", color: "text-green-500" },
    { icon: MapPin, label: "Location", color: "text-red-500" },
    { icon: Smile, label: "Feeling", color: "text-yellow-500" },
    { icon: AtSign, label: "Tag", color: "text-purple-500" },
    { icon: Hash, label: "Topic", color: "text-indigo-500" }
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold">Create New Post</h2>
        <Badge variant="secondary" className="text-xs">
          Share your work
        </Badge>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/avatar.svg" alt="Profile" />
              <AvatarFallback>TQ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">Tensu Qiuwulu</h3>
              <p className="text-sm text-muted-foreground">Share with your network</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Textarea
                placeholder="What's on your mind, Tensu?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="text-sm min-h-[120px] border-0 resize-none focus-visible:ring-0 p-0"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Add location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-sm border-0 focus-visible:ring-0 px-0"
              />
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      type="button"
                      className={`p-2 rounded-full hover:bg-muted/50 transition-colors ${action.color}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <action.icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>

                <Button 
                  type="submit" 
                  size="sm" 
                  disabled={!postContent.trim()}
                  className="px-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "Posted", item: "E-Commerce Platform", time: "2 hours ago" },
              { action: "Liked", item: "React Best Practices", time: "4 hours ago" },
              { action: "Commented", item: "TypeScript Tips", time: "1 day ago" }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
