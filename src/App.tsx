import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Početna from "./pages/Home";
import Roboti from "./pages/Robots";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Početna />} />
        <Route path="roboti" element={<Roboti />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
