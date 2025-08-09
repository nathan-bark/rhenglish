import React from "react";
import { NavLink } from "react-router";
import { blogPosts } from "../../data/blogPosts";

const ResourcesPage = () => {
  return (
     <div className="p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6 text-center">Our Resources & Blog</h2>
      <p className="text-lg text-textPrimary mb-12 text-center">
        Explore our collection of articles, tips, and free materials to help you master English.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 👈 New: Map over the blogPosts array to create a card for each post */}
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-background p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
            <p className="text-textPrimary text-sm mb-4">
              {post.summary}
            </p>
            <NavLink 
              to={`/resources/${post.slug}`} // 👈 New: Use the post's slug for the link
              className="text-sm text-accent hover:text-secondary transition-colors duration-300 font-semibold"
            >
              Read More &rarr;
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
