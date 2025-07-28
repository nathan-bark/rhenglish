import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header.component.jsx";
import Footer from "./components/Footer/Footer.component.jsx";
import HomePage from "./routes/HomePage/Home.route.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Resource" element={<RescourcesPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
