import React from "react";

const SocialIcon = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-10 h-10 hover: cursor-pointer" />
  );
};

export default SocialIcon;
