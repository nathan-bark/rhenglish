import React from "react";
import { NavLink } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-background rounded-lg shadow-md max-w-2xl mx-auto my-12 min-h-[calc(100vh-200px)]">
      <h2 className="text-9xl font-extrabold text-primary">404</h2>
      <p className="text-2xl font-semibold text-textPrimary mb-4">
        Page Not Found
      </p>
      <p className="text-lg text-textPrimary mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <NavLink
        to="/"
        className="bg-accent hover:bg-secondary text-textOnDark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Go to Homepage
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
