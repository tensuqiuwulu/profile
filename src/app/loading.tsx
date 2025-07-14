import { memo } from "react";

const Loading = memo(() => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto animate-pulse">
          <span className="text-primary-foreground font-bold text-xl">TQ</span>
        </div>
        <h2 className="text-lg font-semibold">Loading Portfolio...</h2>
        <div className="w-32 h-2 bg-muted rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
});

Loading.displayName = "Loading";

export default Loading;
