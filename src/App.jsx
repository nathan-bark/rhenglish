import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header.component.jsx";
import Footer from "./components/Footer/Footer.component.jsx";
import HomePage from "./routes/HomePage/HomePage.component.jsx";
import CoursesPage from "./routes/CoursesPage/CoursesPage.component.jsx";
import AboutPage from "./routes/AboutPage/AboutPage.component.jsx";
import ContactPage from "./routes/ContactPage/ContactPage.component.jsx";
import ResourcesPage from "./routes/ResourcesPage/ResourcesPage.component.jsx";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage.component.jsx";
import BlogPostPage from "./routes/BlogPostPage/BlogPostPage.component.jsx";

import "./App.css";

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<BlogPostPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
