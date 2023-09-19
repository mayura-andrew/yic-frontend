import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Blog", href: "#features", ariaLabel: "Features" },
  { label: "News", href: "#pricing", ariaLabel: "Pricing" },
  { label: "Contact Us", href: "#feedback", ariaLabel: "Feedback" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl ">

      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >

          <div class="flex w-full lg:w-auto justify-start items-start">
            <a href="/" class="text-lg">
              <span class="font-bold text-orange-500">YIC</span>
              <span class="text-black-500 font-bold">OUSL</span>
            </a>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div>
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link button-link text-black font-bold px-8 py-2 hover:bg-orange-500 hover:text-white rounded-xl "
                href={href}
                aria-label={ariaLabel}
                key={label}
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
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-black-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-black-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-black-500 "></div>
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
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
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
  );
};