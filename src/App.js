import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Events from "./pages/Event";
import Aboutsus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import "@fontsource/roboto-serif";
import BookEventButton from "./BookEventButton";
import Login from "./components/Login";

const App = () => {
  return (
    // Only one <Router> for the entire app

    <Routes>
      <Route path="/" index element={<Main />} />
      <Route path="/works" element={<Works />} />
      <Route path="/services" element={<Services />} />
      <Route path="/event" element={<Events />} />
      <Route path="/aboutus" element={<Aboutsus />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/book-event" element={<BookEventButton />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
