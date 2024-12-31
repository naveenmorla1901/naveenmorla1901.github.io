'use client';

export function useScrollTo() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('nav');
      const headerHeight = header ? header.offsetHeight : 0;
      const sectionTop = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return scrollToSection;
}