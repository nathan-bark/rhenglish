import React from "react";

const SocialIcon = ({ src, alt, url }) => {
  return (
     <a
                key={alt}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-surface transition-colors duration-300"
                aria-label={`Follow us on ${alt}`}
              >
                <img src={src} className="w-6 h-6" alt={alt} />
              </a>
  );
};

export default SocialIcon;
