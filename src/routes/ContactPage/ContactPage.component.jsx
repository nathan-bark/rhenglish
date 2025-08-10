import React from "react";

import facebook from "../../assets/317727_facebook_social media_social_icon.png";
import instagram from "../../assets/1298747_instagram_brand_logo_social media_icon.png";
import xLogo from "../../assets/icons8-x-100.png";

import SocialIcon from "../../components/SocialIcon/SocialIcon.component.jsx";

const ContactPage = () => {
  // Define social media links and SVG icons
  const socialMediaLinks = [
    { name: 'Facebook', url: '#', icon: facebook },
    { name: 'Twitter', url: '#', icon: xLogo },
    { name: 'Instagram', url: '#', icon: instagram },
  ];

  return (
    <div className="container mx-auto p-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
        Get in Touch
      </h1>

      <div className="bg-surface p-8 rounded-lg shadow-md">
        <p className="text-lg text-center mb-6 text-textPrimary">
          Have a question or want to book a lesson? Please get in touch using one of the methods below. A contact form will be added here soon!
        </p>
        
        {/* Direct contact info section */}
        <div className="mt-8 text-center">
          <p className="text-textPrimary">
            You can reach us directly at:
          </p>
          <a href="mailto:rhenglishuk@gmail.com" className="text-primary font-semibold hover:underline">
            rhenglishuk@gmail.com
          </a>
          
          {/* Social Media Links Section */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-textPrimary mb-2">Connect with me on social media:</h4>
            <div className="flex justify-center space-x-4">
              {socialMediaLinks.map(link => (
                <SocialIcon  url={link.url} src={link.icon} alt={link.name}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
