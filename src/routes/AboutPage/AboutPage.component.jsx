import React from "react";

import { tutor } from "../../data/tutors";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
        About Robin Hood English
      </h1>

      <div className="bg-surface p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Tutor Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={tutor.image}
            alt={`Profile photo of ${tutor.name}`}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-secondary"
          />
        </div>

        {/* Tutor Bio and Details */}
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-3xl font-bold text-textPrimary">{tutor.name}</h2>
          <h3 className="text-xl font-semibold text-primary mb-4">
            {tutor.title}
          </h3>

          <p className="text-textPrimary leading-relaxed whitespace-pre-line">
            {tutor.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
