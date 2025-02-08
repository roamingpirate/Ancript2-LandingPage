import { useState, useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AvatarPreview from "./components/avatarPreview";
import Why from "./sections/why";
import How from "./sections/How";
import What from "./sections/what";

const App = () => {
    return (
      <>
      <div className="bg-white mb-[300px]">
        <Header/>
        <Hero/>
        <Why/>
        <How/>
        <What/>
      </div>
      <p>j</p>
      </>
    )
}

export default App;