"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MobilePostProps {
  post: {
    id: string;
    author: {
      name: string;
      username: string;
      avatar: string;
      verified?: boolean;
    };
    content: string;
    image?: string;
    timestamp: string;
    likes: number;
    comments: number;
    location?: string;
    tags?: string[];
  };
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
  onBookmark: (postId: string) => void;
}

export default function MobilePost({ 
  post, 
  onLike, 
  onComment, 
  onShare, 
  onBookmark 
}: MobilePostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(post.id);
  };

  return (
    <Card className="border-0 border-b rounded-none shadow-none">
      <CardContent className="p-0">
        {/* Post Header */}
        <div className="flex items-center justify-between p-4 pb-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm">{post.author.username}</span>
                {post.author.verified && (
                  <Badge className="h-4 w-4 p-0 bg-blue-500 rounded-full">
                    ✓
                  </Badge>
                )}
              </div>
              {post.location && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{post.location}</span>
                </div>
              )}
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="p-2">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Post Image */}
        {post.image && (
          <div className="relative w-full aspect-square">
            <Image
              src={post.image}
              alt="Post image"
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Post Actions */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto"
              onClick={handleLike}
            >
              <Heart 
                className={cn(
                  "h-6 w-6 transition-all duration-200",
                  isLiked ? "fill-red-500 text-red-500" : "text-foreground"
                )} 
              />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto"
              onClick={() => onComment(post.id)}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto"
              onClick={() => onShare(post.id)}
            >
              <Send className="h-6 w-6" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto"
            onClick={handleBookmark}
          >
            <Bookmark 
              className={cn(
                "h-6 w-6 transition-all duration-200",
                isBookmarked ? "fill-current" : ""
              )} 
            />
          </Button>
        </div>

        {/* Post Content */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 text-sm font-semibold mb-1">
            <span>{post.likes.toLocaleString()} likes</span>
          </div>
          
          <div className="text-sm">
            <span className="font-semibold">{post.author.username}</span>
            <span className="ml-2">{post.content}</span>
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {post.comments > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto text-muted-foreground text-sm mt-1"
              onClick={() => onComment(post.id)}
            >
              View all {post.comments} comments
            </Button>
          )}
          
          <div className="text-xs text-muted-foreground mt-1">
            {post.timestamp}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
