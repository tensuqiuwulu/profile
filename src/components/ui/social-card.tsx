"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialCardProps {
  className?: string;
  author?: {
    name: string;
    avatar?: string;
    handle?: string;
    verified?: boolean;
  };
  timestamp?: string;
  content?: React.ReactNode;
  image?: string;
  tags?: string[];
  likes?: number;
  comments?: number;
  shares?: number;
  showActions?: boolean;
  children?: React.ReactNode;
}

export const SocialCard = React.forwardRef<HTMLDivElement, SocialCardProps>(
  ({
    className,
    author = { name: "Tensu Qiuwulu", handle: "@tensuqiuwulu" },
    timestamp = "2h",
    content,
    image,
    tags = [],
    likes = 0,
    comments = 0,
    shares = 0,
    showActions = true,
    children,
    ...props
  }, ref) => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    return (
      <Card
        ref={ref}
        className={cn(
          "w-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-sm">{author.name}</span>
                  {author.verified && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span>{author.handle}</span>
                  <span>•</span>
                  <span>{timestamp}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {content && (
            <div className="text-sm leading-relaxed">
              {content}
            </div>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs hover:bg-primary/20 cursor-pointer">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {children}

          {image && (
            <div className="rounded-lg overflow-hidden">
              <Image 
                src={image} 
                alt="Post content" 
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {showActions && (
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex items-center gap-1 text-muted-foreground hover:text-red-500",
                    isLiked && "text-red-500"
                  )}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
                  <span className="text-xs">{likes + (isLiked ? 1 : 0)}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-blue-500">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">{comments}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-green-500">
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs">{shares}</span>
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-muted-foreground hover:text-yellow-500",
                  isBookmarked && "text-yellow-500"
                )}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

SocialCard.displayName = "SocialCard";
