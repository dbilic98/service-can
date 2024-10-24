import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-50 flex justify-between items-center py-4 px-6 md:px-20 shadow-md">
      <div className="text-2xl font-bold text-dark-gray font-mono">CAN3FIX</div>
      <nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-turquoise">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-0 md:space-x-14 mt-4 md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="block md:inline-block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform"
            >
              Početna
            </Link>
          </li>
          <li>
            <Link
              to="/roboti"
              className="block md:inline-block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform"
            >
              Roboti
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="block md:inline-block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              PlayStation
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className="block md:inline-block text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform"
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
