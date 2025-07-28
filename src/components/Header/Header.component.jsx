import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-primary to-secondary text-textPrimary p-4 shadow-lg rounded-b-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <NavLink
            to="/"
            className="text-3xl font-extrabold tracking-tight hover:text-surface transition-colors duration-300"
          >
            Robin Hood English
          </NavLink>
          <ul className="flex space-x-6">
        <li><NavLink to="/" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Home</NavLink></li>
        <li><NavLink to="/courses" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Courses</NavLink></li>
        <li><NavLink to="/about" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">About Us</NavLink></li>
        <li><NavLink to="/resources" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Resources</NavLink></li>
        <li><NavLink to="/contact" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Contact</NavLink></li>
      </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
