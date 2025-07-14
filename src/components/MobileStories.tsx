"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Story {
  id: string;
  name: string;
  image: string;
  isViewed?: boolean;
  isOwn?: boolean;
}

interface MobileStoriesProps {
  stories: Story[];
  onStoryClick: (storyId: string) => void;
}

export default function MobileStories({ stories, onStoryClick }: MobileStoriesProps) {
  const allStories = [
    {
      id: "own",
      name: "Your Story",
      image: "/profile.jpg",
      isOwn: true,
    },
    ...stories,
  ];

  return (
    <div className="px-4 py-3 bg-background border-b">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {allStories.map((story) => (
          <Button
            key={story.id}
            variant="ghost"
            className="flex-shrink-0 flex flex-col items-center gap-2 p-2 h-auto"
            onClick={() => onStoryClick(story.id)}
          >
            <div className="relative">
              <div className={cn(
                "w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr",
                story.isOwn 
                  ? "from-gray-300 to-gray-300" 
                  : story.isViewed 
                    ? "from-gray-300 to-gray-300" 
                    : "from-pink-500 via-red-500 to-yellow-500"
              )}>
                <Avatar className="w-full h-full border-2 border-background">
                  <AvatarImage src={story.image} alt={story.name} />
                  <AvatarFallback>{story.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
              
              {story.isOwn && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                  <Plus className="w-3 h-3 text-primary-foreground" />
                </div>
              )}
            </div>
            
            <span className={cn(
              "text-xs text-center max-w-16 truncate",
              story.isOwn ? "font-medium" : "text-muted-foreground"
            )}>
              {story.name}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
