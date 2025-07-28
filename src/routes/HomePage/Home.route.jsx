import React from 'react';
import { NavLink } from 'react-router'; // Import NavLink for internal navigation

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
        Unlock Your English Potential
      </h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
        Personalized online English lessons designed to help you achieve fluency and confidence.
      </p>
      <div className="flex space-x-4">
        <NavLink
          to="/courses"
          className="bg-primary text-textPrimary py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-300"
        >
          Browse Courses
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-secondary text-textPrimary py-2 px-4 rounded-lg hover:bg-primary transition-colors duration-300"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;