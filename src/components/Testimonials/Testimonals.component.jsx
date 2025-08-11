import React, { useState, useEffect } from "react";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Reset expanded state when the testimonial changes
    setExpanded(false);
    // Set up a timer to auto-advance the carousel every 5 seconds
    const timer = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Clear the timer when the component unmounts or the testimonial changes
    return () => clearTimeout(timer);
  }, [currentTestimonial]); // Re-run the effect whenever the current testimonial changes

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return { truncated: text, isTruncated: false };
    }
    return { truncated: text.slice(0, maxLength), isTruncated: true };
  };

  const testimonial = testimonials[currentTestimonial];
  const { truncated, isTruncated } = truncateText(testimonial.quote, 250);

  return (
    <section className="w-full text-center py-12 bg-background rounded-lg shadow-inner mb-16">
      <h2 className="text-4xl font-bold text-textPrimary mb-8">
        What Our Students Say
      </h2>
      <div className="relative w-full px-4 min-h-[300px]">
        {/* Only render the current testimonial to prevent click blocking */}
        <div key={testimonial.id} className="w-full p-8 transition-opacity duration-700 ease-in-out">
          <div className="bg-surface p-8 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-textPrimary text-lg italic mb-4">
              "{expanded ? testimonial.quote : truncated}"
              {isTruncated && !expanded && <span>...</span>}
            </p>
            {isTruncated && (
              <button onClick={toggleExpanded} className="text-primary font-semibold hover:underline mt-2">
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            )}
            <div className="mt-4 pt-4 border-t border-secondary-light w-full">
              <p className="font-semibold text-primary text-xl">
                {testimonial.name}
              </p>
              <p className="text-textPrimary text-sm">{testimonial.course}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-accent text-textOnDark p-2 rounded-full shadow-lg z-10 hover:bg-secondary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-accent text-textOnDark p-2 rounded-full shadow-lg z-10 hover:bg-secondary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
