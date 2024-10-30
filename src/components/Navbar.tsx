import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link clicks in mobile view
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-blue-50 flex justify-between items-center py-4 px-6 md:px-20 shadow-md relative">
      <div className="text-2xl font-bold text-dark-gray font-mono">CAN3FIX</div>
      <nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-turquoise">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:hidden shadow-lg transition-all duration-200`}
        >
          <li>
            <Link
              to="/"
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg transition-transform py-2"
              onClick={handleLinkClick} // Close menu on link click
            >
              Početna
            </Link>
          </li>
          <li>
            <Link
              to="/roboti"
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg transition-transform py-2"
              onClick={handleLinkClick} // Close menu on link click
            >
              Roboti
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg cursor-not-allowed py-2"
              onClick={(e) => e.preventDefault()}
            >
              PlayStation
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg transition-transform py-2"
              onClick={handleLinkClick} // Close menu on link click
            >
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-0 md:space-x-14 mt-4 md:mt-0">
          <li>
            <Link
              to="/"
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-110 transition-transform"
            >
              Početna
            </Link>
          </li>
          <li>
            <Link
              to="/roboti"
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-110 transition-transform"
            >
              Roboti
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              PlayStation
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className="block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-110 transition-transform"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
