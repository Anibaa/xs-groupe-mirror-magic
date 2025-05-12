
import { useEffect } from 'react';

export const useRevealAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // Get delay from data-delay attribute or use 0
        const delay = element.getAttribute('data-delay') || 0;
        
        if (elementTop < windowHeight - elementHeight / 4) {
          setTimeout(() => {
            element.classList.add('active');
          }, delay);
        }
      });
    };

    // Run once when component mounts
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useRevealAnimation;
