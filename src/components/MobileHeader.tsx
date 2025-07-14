"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Bell,
  MessageCircle
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface MobileHeaderProps {
  showSearch?: boolean;
}

export default function MobileHeader({ showSearch = false }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-lg border-b shadow-sm z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/profile.jpg" alt="Profile" />
              <AvatarFallback>TQ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-bold">tensuqiuwulu</h1>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 relative"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500 border-0">
              3
            </Badge>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-2 relative"
          >
            <MessageCircle className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500 border-0">
              5
            </Badge>
          </Button>
        </div>
      </div>
      
      {showSearch && (
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>
      )}
    </header>
  );
}
