import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-primary to-secondary text-textPrimary p-4 shadow-lg rounded-b-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight hover:text-surface transition-colors duration-300"
          >
            Robin Hood English
          </Link>
          <ul className="flex space-x-6">
        <li><Link to="/" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Home</Link></li>
        <li><Link to="/courses" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Courses</Link></li>
        <li><Link to="/about" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">About Us</Link></li>
        <li><Link to="/resources" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Resources</Link></li>
        <li><Link to="/contact" className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105">Contact</Link></li>
      </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
