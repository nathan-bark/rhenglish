import React from "react";
import { useParams, NavLink } from "react-router";
import { blogPosts } from "../../data/blogPosts";

const BlogPostPage = () => {
  // Get the 'slug' from the URL parameters
  const { slug } = useParams();

  // Find the blog post that matches the slug
  const post = blogPosts.find((p) => p.slug === slug);

  // If the post is not found, display a not-found message
  if (!post) {
    return (
      <div className="p-8 bg-background rounded-lg shadow-md max-w-2xl mx-auto my-12 text-center">
        <h2 className="text-4xl font-bold text-textPrimary mb-4">
          Post Not Found
        </h2>
        <p className="text-lg text-textPrimary mb-8">
          The blog post you are looking for does not exist.
        </p>
        <NavLink
          to="/resources"
          className="bg-accent hover:bg-secondary text-textOnDark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Go to Blog
        </NavLink>
      </div>
    );
  }

  return (
    <div className="p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-2">{post.title}</h2>
      <p className="text-sm text-textPrimary mb-6">
        By {post.author} on {post.date}
      </p>

      {/* Render the HTML content from the blogPosts.js file */}
      <div
        className="prose max-w-none text-textPrimary"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <NavLink
        to="/resources"
        className="inline-block mt-8 text-primary hover:text-secondary font-bold transition-colors duration-300"
      >
        &larr; Back to all resources
      </NavLink>
    </div>
  );
};

export default BlogPostPage;
