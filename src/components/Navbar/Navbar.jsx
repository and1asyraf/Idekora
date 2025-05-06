import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#hero",
  },
  {
    id: 2,
    title: "Services",
    link: "#services",
  },
  {
    id: 3,
    title: "Community",
    link: "#newsletter",
  },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        >
          <div className="container py-6 flex justify-between items-center">
            {/* Logo section */}
            <div className="flex items-center gap-3 ml-4 -mt-70">
              <img src={Logo} alt="logo" className="w-36" />
            </div>
            {/* Link section */}
            <div className="hidden md:block !space-x-12">
              {NavLinks.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={link.link}
                    className="inline-block mx-4 text-lg font-semibold"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
            {/* Button section */}
            <div>
              <button className="primary-btn">Explore Our Portfolio</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
