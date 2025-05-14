
import { useEffect, useState } from 'react';

export const useParallaxEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once on mount
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate transform based on scroll position
  const calculateTransform = (factor: number = 0.1, offset: number = 0) => {
    return `translateY(${scrollY * factor + offset}px)`;
  };

  // Calculate opacity based on scroll position and threshold
  const calculateOpacity = (startPos: number, endPos: number) => {
    if (scrollY <= startPos) return 1;
    if (scrollY >= endPos) return 0;
    return 1 - (scrollY - startPos) / (endPos - startPos);
  };

  return {
    scrollY,
    calculateTransform,
    calculateOpacity
  };
};

export default useParallaxEffect;
