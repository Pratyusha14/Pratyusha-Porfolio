import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ theme, toggleTheme }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prevToggle) => !prevToggle);

  return (
    <header className={`flex justify-between items-center px-5 py-4 fixed w-full z-10 ${theme}`}>
      {/* Logo */}
      <a href="/Portfolio" className="logo text-2xl font-bold hover:text-teal-500">
        Pratyusha Mallampeta
      </a>

      {/* Desktop Navigation */}
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/Portfolio/#about" className="hover:text-teal-500">
            About
          </a>
          <a href="/Portfolio/#experience" className="hover:text-teal-500">
            Experience
          </a>
          <a href="/Portfolio/#project" className="hover:text-teal-500">
            Projects
          </a>
          <a href="/Portfolio/#contact" className="hover:text-teal-500">
            Contact
          </a>
          <a
            href=" "
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-500"
          >
            Resume
          </a>
        </nav>

        {/* Creative Toggle Switch */}
        <div className="relative flex items-center cursor-pointer">
          <div
            className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
              theme === 'light' ? 'bg-yellow-400' : 'bg-gray-600'
            }`}
            onClick={toggleTheme}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
                theme === 'light' ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {theme === 'light' ? (
                <FaSun className="text-yellow-500 text-sm" />
              ) : (
                <FaMoon className="text-gray-700 text-sm" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav fixed top-0 left-0 w-full transform transition-transform duration-300 ease-in-out ${theme} ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!toggle}
      >
        <ul className="flex flex-col items-center space-y-6 py-20">
          <li>
            <a href="/Portfolio/#about" className="hover:text-teal-500" onClick={handleToggle}>
              About
            </a>
          </li>
          <li>
            <a href="/Portfolio/#experience" className="hover:text-teal-500" onClick={handleToggle}>
              Experience
            </a>
          </li>
          <li>
            <a href="/Portfolio/#project" className="hover:text-teal-500" onClick={handleToggle}>
              Projects
            </a>
          </li>
          <li>
            <a href="/Portfolio/#contact" className="hover:text-teal-500" onClick={handleToggle}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1GuwHkrzUhsO9IczKczqiRx6UUGeAY_3H/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-500"
              onClick={handleToggle}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={handleToggle}
        className="block md:hidden text-white focus:outline-none"
        aria-label={toggle ? 'Close menu' : 'Open menu'}
      >
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;