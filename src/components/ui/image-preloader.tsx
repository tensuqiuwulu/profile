import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export function ImagePreloader({ images, priority = false }: ImagePreloaderProps) {
  useEffect(() => {
    if (priority) {
      // Preload critical images
      images.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, [images, priority]);

  return null;
}

// Hook for lazy loading images
export function useImagePreloader(src: string, priority = false) {
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
    }
  }, [src, priority]);
}
