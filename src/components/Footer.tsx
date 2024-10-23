import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-100 mt-0 py-1">
      <p className="mt-2 text-center text-black max-w-xl mx-auto text-4xl ">
        <a
          href="https://www.instagram.com/can3fix/?igsh=MXUycnB3MXB3eDNh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 mr-4"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/people/Servis-robota-za-%C4%8Di%C5%A1%C4%87enje-bazena-Zodiac-i-Dolphin/61564826086293/?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 mr-4"
        >
          <FaFacebook />
        </a>
        <a
          href="mailto: ca​n3fix@gmail.com"
          className="inline-flex items-center space-x-2"
        >
          <MdEmail />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
