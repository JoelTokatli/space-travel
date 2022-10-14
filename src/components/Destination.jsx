import React from "react";
import Planets from "./Planets";

const Destination = () => {
  return (
    <section className=" w-full text-gray-400" id="destination">
      <div className="pb-36 lg:h-screen pt-8 bg-no-repeat bg-cover bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop ">
        <h2 className="text-center sm:text-start pt-12 sm:pt-20 text-2xl sm:ml-20 lg:text-3xl">
          <b className="text-slate-200">01</b> PICK YOUR DESTINATION
        </h2>
        <Planets />
      </div>
    </section>
  );
};

export default Destination;
