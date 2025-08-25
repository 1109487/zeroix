import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import BlogSinglePage from "./pages/BlogSinglePage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 This makes all route changes scroll to top */}

      <Header />

      <main className="pt-[80px]"> {/* Adjust for fixed header */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogSinglePage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
