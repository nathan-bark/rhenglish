import React from 'react';

const CourseModal = ({ course, onClose }) => {
  if (!course) {
    return null; // Don't render if no course is selected
  }

  return (
    // Backdrop for the modal
    <div className="fixed inset-0 bg-background/75 flex items-center justify-center z-50 p-4">
      {/* Modal content container */}
      <div className="bg-surface p-8 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-textSecondary hover:text-primary transition-colors duration-200"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal header */}
        <h2 className="text-3xl font-bold text-primary mb-2">{course.title}</h2>
        <p className="text-textSecondary italic mb-4">{course.audience}</p>
        
        {/* Modal content details */}
        <p className="text-lg text-textPrimary leading-relaxed whitespace-pre-line mb-6">
          {course.longDescription}
        </p>

        <h3 className="text-xl font-bold text-primary mb-2">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-textPrimary mb-6">
          {course.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>

        <p>{course.price}</p>

      </div>
    </div>
  );
};

export default CourseModal;
