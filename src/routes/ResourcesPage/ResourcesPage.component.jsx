import React from "react";

const ResourcesPage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6">
        Our Resources & Blog
      </h2>
      <p className="text-lg text-textPrimary mb-4">
        Explore our collection of articles, tips, and free materials to help you
        master English.
      </p>
      <ul className="list-disc list-inside text-textPrimary space-y-2">
        <li>Grammar Guides</li>
        <li>Vocabulary Boosters</li>
        <li>Pronunciation Tips</li>
        <li>Learning Strategies</li>
        <li>Latest Blog Posts</li>
      </ul>
      <p className="text-lg text-textPrimary mt-6">
        Stay tuned for new content!
      </p>
    </div>
  );
};

export default ResourcesPage;
