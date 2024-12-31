'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('');
  // Use useRef to keep track of the timeout ID
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isScrolling = false;
    
    const handleScroll = () => {
      // If a scroll event is already being processed, skip this one
      if (isScrolling) return;
      
      isScrolling = true;

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Use requestAnimationFrame for smooth performance
      window.requestAnimationFrame(() => {
        // Set a new timeout for debounced scroll handling
        timeoutRef.current = setTimeout(() => {
          const sections = document.querySelectorAll('section[id]');
          const scrollPosition = window.scrollY + 100; // Offset for header

          let newActiveSection = '';
          sections.forEach(section => {
            const element = section as HTMLElement;
            const sectionTop = element.offsetTop;
            const sectionHeight = element.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              newActiveSection = section.getAttribute('id') || '';
            }
          });

          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }

          isScrolling = false;
        }, 100); // Debounce time of 100ms
      });
    };

    // Handle initial scroll position
    handleScroll();

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeSection]); // Include activeSection in dependencies

  return activeSection;
}