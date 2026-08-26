'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const TOTAL_FRAMES = 75; // 00 to 74

const getFramePath = (index: number): string => {
  const paddedIndex = String(index).padStart(2, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.067s.png`;
};

export const ScrollyCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);
  const currentFrameRef = useRef<number>(0);
  const zoomScaleRef = useRef<number>(1.18);

  const { scrollYProgress } = useScroll();

  const drawFrame = (frameIndex: number, zoomScale: number = 1.18) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.clearRect(0, 0, width, height);

    // Apply Cinematic Zoom-Out transform from canvas center
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.translate(centerX, centerY);
    ctx.scale(zoomScale, zoomScale);
    ctx.translate(-centerX, -centerY);

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = width / height;

    let renderWidth = width;
    let renderHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    // Edge-to-Edge 100% Cover Math
    if (canvasAspect > imgAspect) {
      renderWidth = width;
      renderHeight = width / imgAspect;
      offsetX = 0;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderHeight = height;
      renderWidth = height * imgAspect;
      offsetX = (width - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.restore();
  };

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        if (!isMounted) return;
        loadedImages[i] = img;
        count++;
        setLoadedCount(count);

        if (count === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setIsPreloaded(true);
          drawFrame(0, 1.18);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
      };

      loadedImages[i] = img;
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => drawFrame(currentFrameRef.current, zoomScaleRef.current));
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latestProgress) => {
    if (!imagesRef.current.length) return;

    const scrollyProgress = Math.min(1, Math.max(0, latestProgress / 0.28));
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(scrollyProgress * (TOTAL_FRAMES - 1))
    );

    // Dynamic Zoom-Out Calculation: smoothly zooms out from 1.18x down to 1.00x as you scroll
    const currentZoom = 1.18 - scrollyProgress * 0.18;
    zoomScaleRef.current = currentZoom;

    if (frameIndex !== currentFrameRef.current || Math.abs(currentZoom - zoomScaleRef.current) > 0.005) {
      currentFrameRef.current = frameIndex;
      requestAnimationFrame(() => drawFrame(frameIndex, currentZoom));
    }
  });

  const progressPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden pointer-events-none">
      {/* Loading Overlay */}
      {!isPreloaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F0] transition-opacity duration-700">
          <div className="relative flex flex-col items-center gap-4">
            <div className="h-14 w-14 rounded-full border-2 border-[#C99A2E]/20 border-t-[#C99A2E] animate-spin" />
            <div className="text-center font-mono">
              <span className="text-xl font-bold text-[#1C1C1C]">{progressPercentage}%</span>
              <p className="mt-1 text-[11px] text-[#6B665D] uppercase tracking-widest">
                Loading Sequence...
              </p>
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-[#F3EEE3]">
              <div
                className="h-full bg-gradient-to-r from-[#C99A2E] to-[#E7C66A] transition-all duration-200"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* HTML5 Canvas Element - Dynamic Zoom-Out Effect */}
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover pointer-events-none transition-opacity duration-700"
        style={{ opacity: isPreloaded ? 1 : 0 }}
      />
    </div>
  );
};
