import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6">
        About Our School
      </h2>
      <p className="text-lg text-textPrimary mb-4">
        We are dedicated to providing high-quality online English education with
        experienced teachers and flexible learning options. Our mission is to
        empower students worldwide to achieve their English language goals.
      </p>
      <p className="text-lg text-textPrimary">
        Learn more about our teaching philosophy and our passionate team.
      </p>
    </div>
  );
};

export default AboutPage;
