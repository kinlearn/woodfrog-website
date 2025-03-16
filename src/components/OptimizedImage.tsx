import React, { forwardRef, useRef, useEffect, useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  animate?: boolean;
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, className, width, height, loading = 'lazy', animate = true }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    
    // Combine the forwarded ref with our local ref
    const setRefs = (element: HTMLImageElement | null) => {
      // Set the local ref
      imageRef.current = element;
      
      // Set the forwarded ref if it exists
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };
    
    // Handle image load event
    const handleImageLoad = () => {
      setIsLoaded(true);
    };
    
    // Custom visibility tracking with Intersection Observer API
    useEffect(() => {
      // Skip if browser doesn't support IntersectionObserver
      if (!('IntersectionObserver' in window)) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && imageRef.current) {
              // If using native lazy loading, this just ensures we track visibility
              if (imageRef.current.complete) {
                setIsLoaded(true);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
      
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
        observer.disconnect();
      };
    }, []);
    
    return (
      <div className={`optimized-image-container ${animate ? 'animate' : ''} ${isLoaded ? 'loaded' : 'loading'}`}>
        {/* Optional loading placeholder/skeleton */}
        {!isLoaded && <div className="image-placeholder"></div>}
        
        <img
          ref={setRefs}
          src={src}
          alt={alt}
          className={`${className || ''} ${isLoaded ? 'loaded' : 'loading'}`}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleImageLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: animate ? 'opacity 0.5s ease' : 'none'
          }}
        />
      </div>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;