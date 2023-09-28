import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navbarLinks = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
  { label: "News", href: "/news", ariaLabel: "News" },
  { label: "Contact Us", href: "/contact", ariaLabel: "Feedback" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-gray-100 lg:bg-gray-100 z-40 lg:backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-0 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center lg:items-start">
              <a href="/" className="flex items-center space-x-2 text-lg">
                <div><span className="text-orange-500 font-semibold">YIC</span><span className="text-black font-semibold">OUSL</span></div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex items-center space-x-4 ml-auto justify-end"> {/* Moved to the right */}
              {navbarLinks.map(({ href, label, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  className="navbar-link text-slate-700 font-semibold px-4 py-2 lg:px-6 lg:py-2 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            {/* Your source code link */}
          </motion.div>
          <div
            className="lg:hidden flex flex-col px-1 py-1 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
            <div className="w-5 h-0.5 bg-black-500 mb-1"></div>
            <div className="w-5 h-0.5 bg-black-500 mb-1"></div>
            <div className="w-5 h-0.5 bg-black-500"></div>
            
          </div>
        </div>
        {/* Mobile navbar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="flex flex-col mt-20 lg:hidden absolute top-0 right-0 bg-customDarkBg1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10 backdrop-blur  "
              >
                {navbarLinks.map(({ label, href, ariaLabel }) => (
                  <a
                    key={href}
                    className="navbar-link text-slate-800 font-bold py-2 px-4 lg:px-2 lg:py-1 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-m border-1"
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
