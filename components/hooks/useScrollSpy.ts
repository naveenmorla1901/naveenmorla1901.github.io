'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section[id]');
          const scrollPosition = window.scrollY + 100;

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
        });
      }
      isScrolling = true;
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeSection]);

  return activeSection;
}