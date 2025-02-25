import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {

  // Options
  const options = [
    { label: "HOME", to: "home" },
    { label: "ABOUT", to: "about" },
    { label: "SERVICES", to: "service" },
    { label: "CONTACT", to: "contact" },
  ];

  // Function click to section
  const handleClickToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed flex z-[999] w-full justify-center px-[0.4rem] mobile-vert:px-[2rem] top-[2rem]">
      <motion.div
        className="bg-navbg py-[1rem] p-[1.2rem] mobile-vert:px-[3rem] rounded-[20px] flex justify-center mobile-hozi:justify-between w-full"
        transition={{ duration: 0.5 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >

        {/* Logo */}
        <div className="text-white text-[1.6rem]">
          <div className="hidden mobile-hozi:block">Portfolio</div>
        </div>

        {/* Navbar Content */}
        <ul className="flex gap-[1rem] mobile-vert:gap-[3rem] text-white items-center text-[1rem] mobile-hozi:text-[1.2rem]">
          {options.map((option, index) => (
            <motion.li
              key={index}
              onClick={() => handleClickToSection(option.to)}
              className="cursor-pointer"
            >
              {option.label}
            </motion.li>
          ))}
        </ul>

      </motion.div>
    </div>
  );
}

export default Navbar;