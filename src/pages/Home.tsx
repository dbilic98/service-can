import profilePicture from "../images/profilePicture.jpeg";
import zodiacPicture from "../images/Zodiac.jpeg";
import dolphinPicture from "../images/Dolphin.jpeg";
import robot1 from "../images/robotPicture1.jpeg";
import robot2 from "../images/robotPicture2.jpeg";
import robot3 from "../images/robotPicture3.jpeg";
import robot4 from "../images/robotPicture4.jpeg";
import playStation1 from "../images/playStationPicture1.jpeg";
import playStation2 from "../images/playStationPicture2.jpeg";
import playStation3 from "../images/playStationPicture3.jpeg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans">
      <section className="bg-light-gray flex flex-col md:flex-row justify-start items-start text-start md:text-left px-4 md:px-12 pt-6 md:pt-12 pb-6 md:pb-12">
        <div className="md:block">
          <img
            src={profilePicture}
            alt="profilePicture"
            className="w-32 md:w-56 object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-2/3 md:pl-12 mt-8 md:mt-10">
          <h1 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
            Dobrodošli!
          </h1>
          <p className="text-sm md:text-xl text-gray-600 max-w-xl">
            Ja sam tehničar s 20 godina radnog iskustva u energetici i
            elektronici, ​koji voli svoj posao, kojeg vesele popravci uređaja
            kojima produljujem ​radni vijek.
          </p>
          <div className="font-bold text-sm md:text-md pt-4">©2004 — 2024</div>
        </div>
      </section>

      <section className="bg-white py-8 px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-center text-forest-green">
          Servisi robota za čišćenje bazena
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src={zodiacPicture} alt="Zodiac" className="mx-auto h-64" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-700 text-xl leading-relaxed font-serif text-justify mt-4">
            Specijaliziran sam za popravku i ​održavanje čistača bazena. Moja
            stručnost ​obuhvaća dijagnostiku kvarova, zamjenu ​komponenti i
            optimizaciju performansi uređaja. ​Moj cilj je osigurati da roboti
            rade učinkovito i ​pouzdano, čime doprinose održavanju čistih i
            ​sigurnih bazena za Vaše zdravlje.
            <p className="my-4" />
            Više o tome na linku:
            <a
              href="/roboti"
              className="text-turquoise hover:underline font-semibold ml-2"
            >
              Roboti
            </a>
          </p>
          <div className="text-center">
            <img src={dolphinPicture} alt="Dolphin" className="mx-auto h-56" />
          </div>
        </div>
      </section>
      <hr />

      <section className="bg-white py-8 px-4 md:px-6">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <img
            src={robot1}
            alt="robotPicture1"
            className="mx-auto w-72 h-80 object-cover"
          />
          <img
            src={robot2}
            alt="robotPicture2"
            className="mx-auto w-72 h-80 object-cover"
          />
          <img
            src={robot3}
            alt="robotPicture3"
            className="mx-auto w-72 h-80 object-cover"
          />
          <img
            src={robot4}
            alt="robotPicture4"
            className="mx-auto w-72 h-80 object-cover"
          />
        </div>
      </section>

      <section className="bg-light-gray py-8 px-4 md:px-6 mb-0">
        <h2 className="text-xl md:text-2xl font-bold text-center text-forest-green">
          Servis PlayStation®5
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={playStation1}
            alt="PlayStation 5 front view"
            className="mx-auto h-80"
          />
          <img
            src={playStation2}
            alt="PlayStation 5 side view"
            className="mx-auto h-80"
          />
          <img
            src={playStation3}
            alt="PlayStation 5 controller"
            className="mx-auto h-80"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
