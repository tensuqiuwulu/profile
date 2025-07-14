"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    
    // Consider velocity for more natural swipe detection
    if (info.offset.x > threshold || velocity > 500) {
      // Swipe right - go to previous image
      prevImage();
    } else if (info.offset.x < -threshold || velocity < -500) {
      // Swipe left - go to next image
      nextImage();
    }
  };

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
      <div className="relative aspect-video">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-black overflow-hidden">
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
            onDragEnd={handleDragEnd}
            whileDrag={{ 
              scale: 0.98,
              rotateY: 0
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing will-change-transform"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              fill
              className="object-cover pointer-events-none"
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
