import React, { useState, useEffect, useRef } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const footerRef = useRef(null);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Shows the button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll animated
    });
  };

  useEffect(() => {
    const footer = document.querySelector("footer");
    footerRef.current = footer;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);
  

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  const buttonClasses = !isOverFooter ? "bg-primary text-textOnDark p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 focus:outline-none" :
  "bg-secondary text-textOnDark p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 focus:outline-none"

  return (
    <div className="fixed bottom-4 right-4 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={buttonClasses}
          aria-label="Scroll to top"
        >
          {/* An SVG arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
