'use client';  // Mark as a Client Component if you need to use React hooks or Client-side logic

import React from 'react';
import Navbar from '../../components/Header'; // Adjust the import path if necessary
import Footer from '../../components/Footer'; // Import Footer component

const About = () => {
  return (
    <div>
      {/* Navbar included at the top of the page */}
      <Navbar />

      <section 
        className="bg-cover bg-center h-screen flex justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/about.jpg')" }} // Tailwind doesn't support dynamic URLs directly in the class
      >
        <div className="max-w-4xl p-8 bg-black bg-opacity-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">About Us</h2>
          <p className="text-base leading-relaxed">
            Welcome to Watch World! <br />
            Discover the perfect timepiece to match your style and personality. At Watch World, we offer an exclusive collection of luxury, casual, and smartwatches to suit every occasion. Whether you are looking for a timeless classic or the latest tech-savvy design, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Footer included at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default About;


