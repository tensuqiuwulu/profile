"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface FeedLayoutProps {
  children: React.ReactNode;
  className?: string;
  showSidebar?: boolean;
}

export const FeedLayout = React.forwardRef<HTMLDivElement, FeedLayoutProps>(
  ({ children, className, showSidebar = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen bg-gradient-to-br from-background via-background to-muted/20",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 py-8">
          <div className={cn(
            "grid gap-8",
            showSidebar ? "lg:grid-cols-[300px_1fr_300px]" : "max-w-2xl mx-auto"
          )}>
            {/* Left Sidebar */}
            {showSidebar && (
              <div className="hidden lg:block">
                <div className="sticky top-8 space-y-4">
                  <ProfileCard />
                  <StatsCard />
                </div>
              </div>
            )}
            
            {/* Main Feed */}
            <div className="space-y-6">
              {children}
            </div>
            
            {/* Right Sidebar */}
            {showSidebar && (
              <div className="hidden lg:block">
                <div className="sticky top-8 space-y-4">
                  <TrendingCard />
                  <SuggestionsCard />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

FeedLayout.displayName = "FeedLayout";

// Profile Card Component
const ProfileCard = () => {
  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatar.jpg" alt="Tensu Qiuwulu" />
            <AvatarFallback>TQ</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">Tensu Qiuwulu</h3>
            <p className="text-xs text-muted-foreground">@tensuqiuwulu</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground mb-3">
          Full Stack Developer • React & Next.js Enthusiast
        </p>
        <div className="flex justify-between text-xs">
          <span><strong>150</strong> Following</span>
          <span><strong>1.2k</strong> Followers</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Stats Card Component
const StatsCard = () => {
  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-sm">Your Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-xs">
          <span>Profile Views</span>
          <span className="font-semibold">2.5k</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>Post Impressions</span>
          <span className="font-semibold">12.3k</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>Connections</span>
          <span className="font-semibold">350</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Trending Card Component
const TrendingCard = () => {
  const trends = [
    { tag: "NextJS", posts: "1.2k posts" },
    { tag: "React", posts: "2.8k posts" },
    { tag: "TypeScript", posts: "950 posts" },
    { tag: "WebDev", posts: "3.1k posts" },
  ];

  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-sm">Trending for you</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trends.map((trend, index) => (
          <div key={index} className="flex justify-between items-center hover:bg-muted/50 p-2 rounded cursor-pointer">
            <div>
              <p className="font-medium text-xs">#{trend.tag}</p>
              <p className="text-xs text-muted-foreground">{trend.posts}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Suggestions Card Component
const SuggestionsCard = () => {
  const suggestions = [
    { name: "Dan Abramov", handle: "@dan_abramov", verified: true },
    { name: "Kent C. Dodds", handle: "@kentcdodds", verified: true },
    { name: "Theo Browne", handle: "@t3dotgg", verified: true },
  ];

  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-sm">Who to follow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {suggestions.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-xs">{user.name}</span>
                  {user.verified && (
                    <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{user.handle}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-xs h-7">
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
