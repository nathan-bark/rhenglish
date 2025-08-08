import React from "react";
import { useState } from "react";

const ContactPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State to track if the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it to the console.
    console.log('Form data submitted:', formData);

    // Set submitted to true to show the thank you message
    setSubmitted(true);
  };

  return (
    <div className="p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8 min-h-[calc(100vh-160px)]">
      <h2 className="text-4xl font-bold text-textPrimary mb-6 text-center">Contact Us</h2>
      <p className="text-lg text-textPrimary mb-4 text-center">
        Have questions? We'd love to hear from you!
      </p>

      {/* Conditional rendering: show the form or the thank you message */}
      {submitted ? (
        <div className="text-center py-24">
          <h3 className="text-3xl font-bold text-success mb-4">Thank you for your message!</h3>
          <p className="text-textPrimary text-lg">
            We have received your submission and will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-textPrimary text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-white text-textPrimary leading-tight focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-textPrimary text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-white text-textPrimary leading-tight focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-textPrimary text-sm font-bold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-white text-textPrimary leading-tight focus:outline-none focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-textOnDark font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
