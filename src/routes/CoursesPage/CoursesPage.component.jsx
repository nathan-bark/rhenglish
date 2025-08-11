import React, { useState } from 'react';
import { courses } from '../../data/coursesData';
import { NavLink } from 'react-router';
import CourseModal from '../../components/CourseModal/CourseModal.component';

const CoursesPage = () => {
  // State to manage the modal's visibility and data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="container mx-auto p-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-4">
        Our English Courses
      </h1>
      <p className="text-xl text-center text-textPrimary mb-12">
        Find the perfect course to help you achieve your goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-surface p-8 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-300 hover:scale-105">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">{course.title}</h2>
              <p className="text-textSecondary mb-4 italic">{course.audience}</p>
              <p className="text-lg text-textPrimary font-semibold mb-4">{course.outcomes}</p>
              
              <ul className="list-disc list-inside space-y-2 text-textPrimary mb-6">
                {course.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left flex space-x-4">
              {/* "Learn More" button now opens the modal */}
              <button
                onClick={() => openModal(course)}
                className="inline-block bg-secondary text-textPrimary py-3 px-6 rounded-lg font-semibold text-lg hover:bg-secondary hover:text-primary transition-colors duration-300"
              >
                Learn More
              </button>

              {/* New "Book Lesson" button links to the contact page */}
              <NavLink
                to={course.bookLink}
                className="inline-block bg-primary text-textOnDark py-3 px-6 rounded-lg font-semibold text-lg hover:bg-primary hover:text-textOnDark transition-colors duration-300"
              >
                Book a Lesson
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* The modal is rendered here, but only when isModalOpen is true */}
      {isModalOpen && <CourseModal course={selectedCourse} onClose={closeModal} />}
    </div>
  );
};

export default CoursesPage;
