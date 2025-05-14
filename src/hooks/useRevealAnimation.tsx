
import { useEffect, useState } from 'react';

export const useRevealAnimation = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Wait a small amount of time to ensure DOM is fully loaded
    const initialTimeout = setTimeout(() => {
      setIsInitialized(true);
      handleScroll();
    }, 100);

    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Get delay from data-delay attribute or use 0
        const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
        // Get custom threshold from data-threshold attribute or use 0.25
        const threshold = parseFloat(element.getAttribute('data-threshold') || '0.25');
        
        // Element is considered in view when it's top is less than a percentage of window height
        if (elementTop < windowHeight - (elementTop * threshold)) {
          setTimeout(() => {
            element.classList.add('active');
          }, delay);
        }
      });
    };

    // Add scroll event listener with throttling for performance
    let throttleTimer: number;
    const throttledScroll = () => {
      if (throttleTimer) return;
      
      throttleTimer = window.setTimeout(() => {
        handleScroll();
        throttleTimer = 0;
      }, 100);
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledScroll, { passive: true });
    
    // Initial check after a brief delay to ensure elements are rendered
    if (isInitialized) {
      handleScroll();
    }
    
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(throttleTimer);
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledScroll);
    };
  }, [isInitialized]);
};

export default useRevealAnimation;
