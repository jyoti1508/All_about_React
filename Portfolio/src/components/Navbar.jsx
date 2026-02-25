import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/jyotilogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-6">
      {/* logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={80} height={43} />
        </a>
      </div>

      {/* desktop menu */}
      <div className="hidden md:flex flex items-center justify-center gap-5 text-xl">
        <a href="#hero">Home</a>
        <a href="#skills" aria-label="Skills">
          Skills
        </a>
        <a href="#project" aria-label="projects">
          Projects
        </a>
        <a href="#contact" aria-label="Contact">
          Contact
        </a>
      </div>

      {/* mobile icon */}
      <div className="md:hidden text-2xl cursor-pointer">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#hero" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#project" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
