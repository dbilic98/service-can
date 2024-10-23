import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-50 flex justify-between items-center py-4 px-20 shadow-md">
      <div className="text-2xl font-bold text-dark-gray font-mono">CAN3FIX</div>
      <nav>
        <ul className="flex space-x-14">
          <li>
            <Link
              to="/"
              className="text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform"
            >
              Početna
            </Link>
          </li>
          <li>
            <Link
              to="/roboti"
              className="text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform"
            >
              Roboti
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              PlayStation
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className="text-turquoise font-semibold hover:text-darkTurquoise hover:shadow-lg hover:scale-150 transition-transform"
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
