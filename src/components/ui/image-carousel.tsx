"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  onImageClick?: (index: number) => void;
}

export default function ImageCarousel({ images, alt, onImageClick }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [imageHeight, setImageHeight] = useState<number>(400);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    
    setIsDragging(false);
    
    // Consider velocity for more natural swipe detection
    if (info.offset.x > threshold || velocity > 500) {
      // Swipe right - go to previous image
      prevImage();
    } else if (info.offset.x < -threshold || velocity < -500) {
      // Swipe left - go to next image
      nextImage();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleImageClick = () => {
    if (!isDragging) {
      onImageClick?.(currentIndex);
    }
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const containerWidth = containerRef.current?.offsetWidth || 400;
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    const calculatedHeight = Math.min(containerWidth * aspectRatio, 500);
    setImageHeight(calculatedHeight);
  };

  // Update height when current image changes
  useEffect(() => {
    if (images[currentIndex] && containerRef.current) {
      const img = new window.Image();
      img.onload = () => {
        const containerWidth = containerRef.current?.offsetWidth || 400;
        const aspectRatio = img.height / img.width;
        const calculatedHeight = Math.min(containerWidth * aspectRatio, 500);
        setImageHeight(calculatedHeight);
      };
      img.src = images[currentIndex];
    }
  }, [currentIndex, images]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
    }),
  };

  if (images.length === 1) {
    return (
      <div 
        ref={containerRef}
        className="relative w-full cursor-pointer hover:opacity-90 transition-opacity overflow-hidden rounded-lg"
        onClick={() => onImageClick?.(0)}
      >
        <Image
          src={images[0]}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-auto object-cover"
          onLoad={handleImageLoad}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden transition-all duration-300"
      style={{ height: `${imageHeight}px` }}
    >
      {/* Main Image Display */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 40,
              mass: 0.4
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ 
              scale: 0.98,
              rotateY: 0
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing will-change-transform"
            onClick={handleImageClick}
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              width={800}
              height={600}
              className="w-full h-full object-cover pointer-events-none"
              onLoad={handleImageLoad}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
