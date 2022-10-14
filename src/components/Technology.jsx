import React from "react";
import Vehicles from "./Vehicles";

const Technology = () => {
  return (
    <section className="w-full" id="technology">
      <div className="lg:h-screen pb-32 sm:pt-14 pt-5 px-1  bg-no-repeat bg-cover bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')]">
        <h2 className=" text-center sm:text-start pt-12 sm:pt-20 text-2xl sm:ml-20 lg:text-3xl text-slate-400 tracking-wider">
          <b className="text-white">02</b> SPACE LAUNCH
        </h2>
        <Vehicles />
      </div>
    </section>
  );
};

export default Technology;
