import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6">Contact Us</h2>
      <p className="text-lg text-textPrimary mb-4">
        Have questions? We'd love to hear from you!
      </p>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-textPrimary text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-textPrimary bg-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-textPrimary text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-textPrimary leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-textPrimary text-sm font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-textPrimary leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-textOnDark font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
