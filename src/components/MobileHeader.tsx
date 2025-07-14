"use client";

import { Input } from "@/components/ui/input";
import { 
  Search
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MobileHeaderProps {
  showSearch?: boolean;
}

export default function MobileHeader({ showSearch = false }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md rounded-b-lg bg-white border-b shadow-sm z-40">
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
