import React from "react";
import { NavLink } from "react-router";

const CoursesPage = () => {
  return (
    <div className="p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6 text-center">
        Our Comprehensive English Courses
      </h2>
      <p className="text-lg text-textPrimary mb-12 text-center">
        Choose the perfect path to fluency with our expertly designed online
        programs.
      </p>

      <div className="grid grid-cols-1 gap-10">
        {/* Course Block 1: General English */}
        <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            {/* Placeholder for an icon or small image */}
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-textOnDark text-4xl font-bold">
              A1-C2
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary mb-3">
              General English
            </h3>
            <p className="text-textPrimary text-lg mb-4">
              Improve all aspects of your English, from everyday conversations
              to advanced grammar. Our flexible curriculum adapts to all
              proficiency levels, from beginner (A1) to advanced (C2).
            </p>
            <ul className="list-disc list-inside text-textPrimary text-md mb-4">
              <li>Comprehensive grammar and vocabulary</li>
              <li>Focus on speaking, listening, reading, and writing</li>
              <li>Real-world communication practice</li>
            </ul>
            <NavLink
              to="/contact"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Enroll Now
            </NavLink>
          </div>
        </div>

        {/* Course Block 2: Business English */}
        <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            {/* Placeholder for an icon or small image */}
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-textOnDark text-4xl font-bold">
              💼
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary mb-3">
              Business English
            </h3>
            <p className="text-textPrimary text-lg mb-4">
              Develop the language skills essential for success in the global
              workplace. Perfect for professionals looking to enhance their
              career prospects.
            </p>
            <ul className="list-disc list-inside text-textPrimary text-md mb-4">
              <li>Effective meeting and presentation skills</li>
              <li>Professional email and report writing</li>
              <li>Negotiation and cross-cultural communication</li>
            </ul>
            <NavLink
              to="/contact"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Enroll Now
            </NavLink>
          </div>
        </div>

        {/* Course Block 3: Exam Preparation (IELTS/TOEFL) */}
        <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            {/* Placeholder for an icon or small image */}
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-textOnDark text-4xl font-bold">
              📝
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary mb-3">
              Exam Preparation (IELTS/TOEFL)
            </h3>
            <p className="text-textPrimary text-lg mb-4">
              Achieve your target score with our specialized courses for IELTS
              and TOEFL. Learn test strategies, practice with mock exams, and
              get personalized feedback.
            </p>
            <ul className="list-disc list-inside text-textPrimary text-md mb-4">
              <li>Targeted skill development for all exam sections</li>
              <li>Mock tests and performance analysis</li>
              <li>Expert tips and strategies for high scores</li>
            </ul>
            <NavLink
              to="/contact"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Enroll Now
            </NavLink>
          </div>
        </div>

        {/* Course Block 4: Conversational English */}
        <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            {/* Placeholder for an icon or small image */}
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-textOnDark text-4xl font-bold">
              🗣️
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary mb-3">
              Conversational English
            </h3>
            <p className="text-textPrimary text-lg mb-4">
              Gain confidence and fluency in everyday conversations. Focus on
              natural speech, idioms, and cultural nuances in a relaxed
              environment.
            </p>
            <ul className="list-disc list-inside text-textPrimary text-md mb-4">
              <li>Interactive discussions and role-playing</li>
              <li>Pronunciation and accent reduction</li>
              <li>Building confidence in spoken English</li>
            </ul>
            <NavLink
              to="/contact"
              className="inline-block bg-accent hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Enroll Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
