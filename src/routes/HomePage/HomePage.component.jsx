import React from "react";
import { NavLink } from "react-router"; // Import NavLink for internal navigation

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h1 className="text-5xl font-extrabold text-textPrimary mb-6 text-center leading-tight">
        Unlock Your English Potential
      </h1>
      <p className="text-xl text-textPrimary mb-8 text-center max-w-2xl">
        Personalized online English lessons designed to help you achieve fluency
        and confidence.
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

      <section className="w-full text-center py-12 bg-background rounded-lg shadow-inner mt-10">
        {" "}
        {/* Using bg-background for contrast */}
        <h2 className="text-4xl font-bold text-textPrimary mb-8">
          Why Choose Robin Hood English?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* USP 1 */}
          <div className="bg-surface p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Expert Tutors
            </h3>
            <p className="text-textPrimary">
              Learn from certified and experienced native-speaking teachers
              passionate about helping you succeed.
            </p>
          </div>
          {/* USP 2 */}
          <div className="bg-surface p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Flexible Scheduling
            </h3>
            <p className="text-textPrimary">
              Book lessons at your convenience, fitting perfectly into your busy
              lifestyle, anywhere in the world.
            </p>
          </div>
          {/* USP 3 */}
          <div className="bg-surface p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Personalized Learning
            </h3>
            <p className="text-textPrimary">
              Customized lesson plans and materials tailored to your specific
              goals and learning pace.
            </p>
          </div>
        </div>
      </section>

      {/* New: Our Popular Courses Section */}
      <section className="w-full text-center py-12 bg-surface rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-textPrimary mb-8">
          Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Course Card 1: General English */}
          <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              General English
            </h3>
            <p className="text-textPrimary mb-4">
              Improve your everyday communication skills, grammar, and
              vocabulary for all levels.
            </p>
            <NavLink
              to="/courses"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Learn More
            </NavLink>
          </div>
          {/* Course Card 2: Business English */}
          <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Business English
            </h3>
            <p className="text-textPrimary mb-4">
              Master professional communication for meetings, presentations, and
              international business.
            </p>
            <NavLink
              to="/courses"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Learn More
            </NavLink>
          </div>
          {/* Course Card 3: Exam Preparation (IELTS/TOEFL) */}
          <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Exam Preparation
            </h3>
            <p className="text-textPrimary mb-4">
              Get ready for IELTS or TOEFL with targeted strategies and practice
              tests.
            </p>
            <NavLink
              to="/courses"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Learn More
            </NavLink>
          </div>
        </div>
        <div className="mt-12">
          <NavLink
            to="/courses"
            className="bg-primary hover:bg-secondary text-textOnDark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Courses
          </NavLink>
        </div>
      </section>

      {/* New: Call-to-Action Section */}
      <section className="w-full text-center py-16 px-8 bg-primary text-textOnDark rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Book a free, no-obligation trial lesson with one of our expert tutors
          to experience our teaching style firsthand.
        </p>
        <NavLink
          to="/contact"
          className="bg-accent hover:bg-secondary text-textOnDark font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Book Your Free Trial Today!
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
