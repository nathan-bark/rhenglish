import React from "react";

import { NavLink } from "react-router";

const ResourcesPage = () => {
  return (
     <div className="p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6 text-center">Our Resources & Blog</h2>
      <p className="text-lg text-textPrimary mb-12 text-center">
        Explore our collection of articles, tips, and free materials to help you master English.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Post Card 1 */}
        <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">5 Tips for Better Pronunciation</h3>
          <p className="text-textPrimary text-sm mb-4">
            A quick guide to improving your English pronunciation with simple, effective exercises.
          </p>
          <NavLink to="#" className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold">
            Read More &rarr;
          </NavLink>
        </div>

        {/* Blog Post Card 2 */}
        <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">Mastering English Grammar Tenses</h3>
          <p className="text-textPrimary text-sm mb-4">
            An in-depth look at all the verb tenses and how to use them correctly.
          </p>
          <NavLink to="#" className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold">
            Read More &rarr;
          </NavLink>
        </div>

        {/* Blog Post Card 3 */}
        <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">How to Expand Your Vocabulary Daily</h3>
          <p className="text-textPrimary text-sm mb-4">
            Discover new words and make them stick with these simple daily habits.
          </p>
          <NavLink to="#" className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold">
            Read More &rarr;
          </NavLink>
        </div>

        {/* Blog Post Card 4 */}
        <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">Preparing for Your First IELTS Exam</h3>
          <p className="text-textPrimary text-sm mb-4">
            Key strategies and practice tips for a successful IELTS test score.
          </p>
          <NavLink to="#" className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold">
            Read More &rarr;
          </NavLink>
        </div>

        {/* Blog Post Card 5 */}
        <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">Top 10 English Learning Apps</h3>
          <p className="text-textPrimary text-sm mb-4">
            Our curated list of the best mobile apps to supplement your online lessons.
          </p>
          <NavLink to="#" className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold">
            Read More &rarr;
          </NavLink>
        </div>

        {/* Blog Post Card 6 */}
        <div className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">The Importance of Reading in English</h3>
          <p className="text-textPrimary text-sm mb-4">
            Why reading is a crucial skill and how to make it a part of your daily routine.
          </p>
          <NavLink to="#" className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold">
            Read More &rarr;
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
