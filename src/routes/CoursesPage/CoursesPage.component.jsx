import React from "react";

const CoursesPage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Courses</h2>
      <p className="text-lg text-gray-700 mb-4">
        Discover a wide range of English courses tailored to your needs.
      </p>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>General English (Beginner to Advanced)</li>
        <li>Business English</li>
        <li>IELTS/TOEFL Exam Preparation</li>
        <li>Conversational English</li>
        <li>English for Kids</li>
      </ul>
      <p className="text-lg text-gray-700 mt-6">
        More details on each course coming soon!
      </p>
    </div>
  );
};

export default CoursesPage;
