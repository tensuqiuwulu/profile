"use client";

import { Button } from "@/components/ui/button";
import { 
  Home,
  User,
  Briefcase,
  Mail,
  PlusCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "Profile" },
    { id: "post", icon: PlusCircle, label: "Post", isAction: true },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "contact", icon: Mail, label: "Messages" },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-lg border-t shadow-lg z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-2 px-3 transition-all duration-200",
                item.isAction 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-12 h-12 p-0" 
                  : isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <IconComponent className={cn(
                "transition-all duration-200",
                item.isAction ? "h-6 w-6" : "h-5 w-5",
                isActive && !item.isAction && "scale-110"
              )} />
              {!item.isAction && (
                <span className={cn(
                  "text-xs transition-all duration-200",
                  isActive && "font-medium"
                )}>
                  {item.label}
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
