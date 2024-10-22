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
        <div className="flex justify-center items-center">
          <img
            src={profilePicture}
            alt="profilePicture"
            className="w-[700px] h-[700px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-16 bg-light-gray">
          <h2 className="text-5xl font-semibold text-black mb-12">Kontakt</h2>
          <div className="space-y-8 text-2xl">
            <p className="text-black flex items-center">
              <MdEmail className="mr-4" size={40} />
              <span>Email: can3fix@gmail.com</span>
            </p>
            <p className="text-black flex items-center">
              <MdPhoneIphone className="mr-4" size={40} />
              <span>Mobitel: +387 63 830 930</span>
            </p>
            <p className="text-black flex items-start ml-2">
              <SiGooglemaps className="mr-4" size={55} />
              <span>
                Adresa: Petra Barbarića 6, 88320 Ljubuški, Bosna i Hercegovina
              </span>
            </p>
          </div>
          <div className="mt-32 text-2xl ml-14">
            <p className="text-black flex items-center">
              Instagram:
              <a
                href="https://www.instagram.com/can3fix/?igsh=MXUycnB3MXB3eDNh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mr-8"
              >
                <FaInstagram className="ml-2" />
              </a>
              <p className="text-black flex items-center">
                Facebook:
                <a
                  href="https://www.facebook.com/people/Servis-robota-za-%C4%8Di%C5%A1%C4%87enje-bazena-Zodiac-i-Dolphin/61564826086293/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <FaFacebook className="ml-2" />
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
