import React from "react";
import { NavLink } from "react-router";

import SocialIcon from "../SocialIcon/SocialIcon.component";
import facebook from "../../assets/317727_facebook_social media_social_icon.png";
import instagram from "../../assets/1298747_instagram_brand_logo_social media_icon.png";
import xLogo from "../../assets/icons8-x-100.png";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: facebook,
    },
    {
      name: "Twitter",
      url: "#",
      icon: xLogo,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/robinhoodenglish/?hl=en",
      icon: instagram,
    },
  ];

  return (
    <footer className="bg-primary text-textOnDark py-12 px-4 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-4">Robin Hood English</h3>
          <p className="text-sm max-w-sm">
            Providing high-quality, personalized English lessons to help you
            achieve fluency and confidence. Our mission is to make learning
            English an engaging and rewarding experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className="hover:text-surface transition-colors duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className="hover:text-surface transition-colors duration-300"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className="hover:text-surface transition-colors duration-300"
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-surface transition-colors duration-300"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-surface transition-colors duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialMediaLinks.map((link) => (
             <SocialIcon src={link.icon} alt={link.name} url={link.url} />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-8 pt-4 border-t border-secondary">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Robin Hood English. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
