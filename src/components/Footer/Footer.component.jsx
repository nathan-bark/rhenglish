import React from "react";

import SocialIcon from "../SocialIcon/SocialIcon.component";
import facebook from "../../assets/317727_facebook_social media_social_icon.png";
import instagram from "../../assets/1298747_instagram_brand_logo_social media_icon.png";
import xLogo from "../../assets/icons8-x-100.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 shadow-inner rounded-t-lg">
      <div className="container mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Robin Hood English. All rights
          reserved.
        </p>
        <div className="mt-2 flex justify-center gap-2 ">
          <SocialIcon src={facebook} alt={"Facebook Logo"}/>
          <SocialIcon src={instagram} alt={"Instagram Logo"}/>
          <SocialIcon src={xLogo} alt={"X Logo"}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
