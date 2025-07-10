import React from "react";
// React Router
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Privacy from "./Pages/Privacy";
// Component
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// CSS File
import "./App.css";
import Faq from "./Pages/Faq";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/rooms/" Component={Rooms} />
        <Route path="/rooms/:slug" Component={SingleRoom} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/faq" Component={Faq} />
        <Route path="/privacy" Component={Privacy} />
        <Route path="/*" Component={Error} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
