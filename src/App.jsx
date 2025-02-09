import { useState, useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AvatarPreview from "./components/avatarPreview";
import Why from "./sections/why";
import How from "./sections/How";
import What from "./sections/what";
import Footer from "./sections/Footer";

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
