import React from "react";
import Tripulants from "./Tripulants";

const Crew = () => {
  return (
    <section className="w-full" id="crew">
      <div className="lg:h-screen pb-32 bg-no-repeat bg-cover bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')]">
        <h2 className="text-center sm:text-start sm:pt-12 lg:pt-36 text-2xl sm:ml-20 lg:text-3xl text-slate-400 tracking-wider pt-12">
          <b className="text-slate-200">02</b> MEET YOUR CREW
        </h2>
        <Tripulants />
      </div>
    </section>
  );
};

export default Crew;
