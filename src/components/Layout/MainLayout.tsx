import React, { useState } from "react";
import { Menu, X, GraduationCap as SchoolLogo } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import Navigation from "./Navigation";
import LogoComponent from "../logo";


// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Orchard Grammar School. All rights reserved.</p>
        <p>Contact us: info@ogs.edu.pk.com</p>
      </div>
    </footer>
  );
};


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

    // Extract the page name from the URL (e.g., "/about" → "about.jpeg")
    const pageName = location.pathname.replace("/", "") || "home";

    let imageSrc;
    try {
      imageSrc = new URL(`../../assets/images/${pageName}.jpeg`, import.meta.url).href;
    } catch (error) {
      console.error("Image not found:", error);
    }

    let titleVideo;
    try {
      titleVideo = new URL(`../../assets/video/Kids_ClassRoom.mp4`, import.meta.url).href;
    } catch (error) {
      console.error("Video not found:", error);
    }

  //https://www.pexels.com/search/videos/classroom/

  // bg-white/5 backdrop-blur-sm 

  return (
    <div className="min-h-screen flex flex-col">
      {isHomePage && (
        <div className="fixed inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source
              src={titleVideo}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}

      {!isHomePage ? (
        <div className="w-full h-60 md:h-80 lg:h-62 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Page Banner"
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-red-500">Image not found</p>
          )}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-6 left-6 z-50 flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg"
          >
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <LogoComponent />
              </div>
              <div className={`${isHomePage ? "text-white hidden md:block" : "text-gray-100 hidden md:block"}`}>
                <h2 className="font-bold text-lg leading-tight">
                  Orchard
                </h2>
                <p className="text-xs opacity-80">Grammar School</p>
              </div>
            </Link>
          </motion.div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="fixed top-6 right-6 z-50 text-white bg-blue-300 p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Navigation
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />

          
        </div>
         
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 10, y: 0 }}
            className="fixed top-6 left-6 z-50 flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg"
          >
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <LogoComponent />
              </div>
              <div className={`${isHomePage ? "text-white hidden md:block" : "text-gray-800 hidden md:block"}`}>
                <h2 className="font-bold text-lg leading-tight">
                  Orchard
                </h2>
                <p className="text-xs opacity-80">Grammar School</p>
              </div>
            </Link>
          </motion.div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="fixed top-6 right-6 z-50 text-white bg-blue-300 p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Navigation
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </>
      )}

      <main className={`flex-grow ${isHomePage ? "z-10 mt-40 md:mt-0" : "z-0 pt-0.2"}`}>
        {children}
      </main>

      {/* Conditionally render the footer */}
      {!isHomePage && <Footer />}
    </div>
  );
}
