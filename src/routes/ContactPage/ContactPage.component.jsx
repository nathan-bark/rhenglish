import React, { useState } from "react";

import facebook from "../../assets/317727_facebook_social media_social_icon.png";
import instagram from "../../assets/1298747_instagram_brand_logo_social media_icon.png";
import xLogo from "../../assets/icons8-x-100.png";

import SocialIcon from "../../components/SocialIcon/SocialIcon.component.jsx";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    console.log(formData.name, formData.email, formData.message);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const sheetsURL =
      "https://script.google.com/macros/s/AKfycby-Ah3ZmKLxFgnKtz98BdGvupOqfWO3pOIMk3efxlkTHocmgEi28HJW5EmgY42giMRj/exec"; // Replace with your Google Sheets URL

    try {
      await fetch(sheetsURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("There was an error sending your message.");
    }
  };

  // Define social media links and SVG icons
  const socialMediaLinks = [
    { name: "Facebook", url: "#", icon: facebook },
    { name: "Twitter", url: "#", icon: xLogo },
    { name: "Instagram", url: "#", icon: instagram },
  ];

  return (
    <div className="container mx-auto p-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
        Get in Touch
      </h1>

      <div className="bg-surface p-8 rounded-lg shadow-md">
        <p className="text-lg text-center mb-6 text-textPrimary">
          Have a question or want to book a lesson? Please send us a message
          using the form and we will contact you within 24 hours.
        </p>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-textPrimary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:outline-accent focus:border-accent focus:ring-accent sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-textPrimary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md  bg-white border-gray-300 shadow-sm focus:outline-accent focus:border-accent focus:ring-accent sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-textPrimary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:outline-accent focus:border-accent focus:ring-accent sm:text-sm p-2"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-textOnDark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        {status && (
          <div
            className={`mt-4 text-center ${
              status.includes("successfully") ? "text-success" : "text-error"
            }`}
          >
            {status}
          </div>
        )}

        {/* Direct contact info section */}
        <div className="mt-8 text-center">
          {/* Social Media Links Section */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-textPrimary mb-2">
              Or connect with us on social media:
            </h4>
            <div className="flex justify-center space-x-4">
              {socialMediaLinks.map((link) => (
                <SocialIcon url={link.url} src={link.icon} alt={link.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
