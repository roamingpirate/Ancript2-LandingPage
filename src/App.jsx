import { useState, useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AvatarPreview from "./components/avatarPreview";
import Why from "./sections/why";
import How from "./sections/How";
import What from "./sections/what";
import Footer from "./sections/Footer";

window.STATIC_FILES_URL = 'https://d26140tf93f9gz.cloudfront.net';

const App = () => {
  return (
    <>
    <div className="bg-white">
      <Header />
      <Hero />
      <section id="why">
        <Why />
      </section>
      <section id="how">
        <How />
      </section>
      <section id="what">
        <What />
      </section>
      <Footer />
    </div>
    </>
  );
};

export default App;
