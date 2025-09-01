import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/RHE_Logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary text-textOnDark p-4 border-textOnDark shadow-lg rounded-b-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-tight hover:text-surface transition-colors duration-300"
        >
          <img src={logo} alt="logo" width={100} height={100} />
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105"
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg font-medium hover:text-surface transition-colors duration-300 transform hover:scale-105"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
