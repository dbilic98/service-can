import works1 from "../images/pictureOfWorks1.jpeg";
import works2 from "../images/pictureOfWorks2.jpeg";
import works3 from "../images/pictureOfWorks3.jpeg";
import gallery1 from "../images/galleryPicture1.jpeg";
import gallery2 from "../images/galleryPicture2.jpeg";
import gallery3 from "../images/galleryPicture3.jpeg";
import gallery4 from "../images/galleryPicture4.jpeg";
import gallery5 from "../images/galleryPicture5.jpeg";
import gallery6 from "../images/galleryPicture6.jpeg";
import gallery7 from "../images/galleryPicture7.jpeg";
import Footer from "../components/Footer";

const Roboti = () => {
  return (
    <div className="bg-light-gray min-h-screen">
      <h2 className="text-center text-4xl font-bold font-mono text-forest-green pt-6">
        RADOVI
      </h2>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="bg-blue-100  p-12 m-4 mx-auto rounded-lg shadow-md">
          <img
            src={works1}
            alt="pictureOfWorks1"
            className="mx-auto w-80 h-80 mb-8"
          />
          <h3 className="text-center font-bold text-2xl text-forest-green ">
            Upravljačka ploča
          </h3>
        </div>
        <div className="bg-blue-100  p-12 m-4 mx-auto rounded-lg shadow-md">
          <img
            src={works2}
            alt="pictureOfWorks2"
            className="mx-auto w-80 h-80 mb-8"
          />
          <h3 className="text-center font-bold text-2xl text-forest-green">
            Plutajući kabel
          </h3>
        </div>
        <div className="bg-blue-100 p-12 m-4 mx-auto rounded-lg shadow-md">
          <img
            src={works3}
            alt="pictureOfWorks3"
            className="mx-auto w-80 h-80 mb-8"
          />
          <h3 className="text-center font-bold text-2xl text-forest-green">
            Blok motora
          </h3>
        </div>
      </section>

      <div className="flex flex-col items-center justify-start p-8 bg-gray-50">
        <h2 className="text-3xl font-sans font-bold text-black ml-10 mb-4">
          Servis za održavanje i popravak čistača bazena Dolphin i Zodiac.
        </h2>
        <p className="text-base font-medium text-gray-700 mb-2">
          Nudimo Vam svoje usluge dijagnostike i rješavanja problema koje
          obavljamo brzo s originalnim dijelovima, bez mijenjanja kompletnih
          blokova.
        </p>
        <p className="max-w-6xl text-justify bg-white p-6 leading-relaxed shadow-lg rounded-md">
          Ovo su dva popularna brenda koji se bave proizvodnjom čistača bazena
          raznih modela koji su pogodni za različite tipove bazena, a ističu se
          svojom učinkovitošću i jednostavnošću korištenja. Njihovi uređaji
          često dolaze s naprednim značajkama poput pametne navigacije,
          prilagodljivih programa čišćenja i efikasnog filtriranja. Mnogi modeli
          dolaze s funkcijama poput daljinskog upravljanja, programabilnog
          čišćenja i snažnog usisavanja, što omogućuje temeljito čišćenje dna,
          zidova i površine bazena. Oba brenda nude pouzdane i kvalitetne
          proizvode koji olakšavaju održavanje bazena i pomažu u očuvanju čiste
          i zdrave vode.
        </p>
      </div>

      <section>
        <h2 className="text-center text-4xl font-bold text-turquoise mt-10 mb-10">
          G A L E R I J A
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto mb-10">
          <img
            src={gallery1}
            alt="galleryPicture1"
            className="mx-auto w-96 h-96"
          />
          <img
            src={gallery2}
            alt="galleryPicture2"
            className="mx-auto w-96 h-96"
          />
          <img
            src={gallery3}
            alt="galleryPicture3"
            className="mx-auto w-96 h-96"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mx-auto mt-20 mb-20">
          <img
            src={gallery4}
            alt="galleryPicture4"
            className="mx-auto w-96 h-96"
          />
          <img
            src={gallery5}
            alt="galleryPicture5"
            className="mx-auto w-96 h-96"
          />
          <img
            src={gallery6}
            alt="galleryPicture6"
            className="mx-auto w-96 h-96"
          />
          <img
            src={gallery7}
            alt="galleryPicture7"
            className="mx-auto w-96 h-96"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roboti;
