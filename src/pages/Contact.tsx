import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import profilePicture from "../images/profilePicture.jpeg";

const Contact = () => {
  return (
    <div className="h-auto bg-white flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden max-w-6xl mt-20">
        <div className="justify-center items-center hidden md:block">
          <img
            src={profilePicture}
            alt="profilePicture"
            className="w-full h-full object-cover sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-16 bg-light-gray sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-8 sm:mb-10 md:mb-12">
            Kontakt
          </h2>
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl">
            <p className="text-black flex items-center">
              <MdEmail className="mr-4" size={40} />
              <span>Email: can3fix@gmail.com</span>
            </p>
            <p className="text-black flex items-center">
              <MdPhoneIphone className="mr-4" size={40} />
              <span>Mobitel: +387 63 830 930</span>
            </p>
            <p className="text-black flex items-start">
              <SiGooglemaps className="mr-4" size={40} />
              <span>
                Adresa: Petra Barbarića 6, 88320 Ljubuški <br />
                Bosna i Hercegovina
              </span>
            </p>
          </div>
          <div className="mt-16 sm:mt-24 text-lg sm:text-xl md:text-2xl ml-8 sm:ml-10 md:ml-14">
            <div className="text-black flex flex-wrap items-center">
              <p>Instagram:</p>
              <a
                href="https://www.instagram.com/can3fix/?igsh=MXUycnB3MXB3eDNh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mr-8"
              >
                <FaInstagram className="ml-2" />
              </a>
              <p>Facebook:</p>
              <a
                href="https://www.facebook.com/people/Servis-robota-za-%C4%8Di%C5%A1%C4%87enje-bazena-Zodiac-i-Dolphin/61564826086293/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <FaFacebook className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
