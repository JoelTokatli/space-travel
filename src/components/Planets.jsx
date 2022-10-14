import React, { useState } from "react";
import data from "./data";

const Planets = () => {
  const [index, setIndex] = useState(0);
  const { name, description, distance, travel, images, id } = data[0][index];
  const { png } = images;
  const [opacity, setOpacity] = useState(true);
  const handleClick = (id) => {
    if (id === index) {
      return;
    } else {
      setOpacity(false);
      setTimeout(() => {
        setIndex(id);
        setOpacity(true);
      }, 700);
    }
  };
  return (
    <article className="pt-8 ">
      <div className=" flex flex-col items-center lg:flex-row sm:justify-evenly gap-4 sm:gap-0">
        <img
          className={`${opacity ? "" : "-translate-x-full"} ${
            opacity ? "" : "opacity-0"
          } lg:w-72 lg:h-72 mt-6 sm:w-60 sm:h-60 w-40 h-40 transition-all duration-700`}
          src={png}
          alt="Planet"
        />
        <div className={`flex flex-col space-y-10 items-center pt-12 lg:pt-0`}>
          <ul className="flex  gap-8">
            {data[0].map((planet) => {
              const { id } = planet;
              return (
                <li
                  className="text-xl cursor-pointer border-collapse border-b-2 border-transparent hover:border-b-slate-500 transition-all text-sky-100 active:scale-105"
                  key={id}
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  {planet.name}
                </li>
              );
            })}
          </ul>
          <div
            className={` flex flex-col items-center max-w-lg min-w-min px-3 text-center`}
          >
            <h1 className="text-5xl tracking-wider sm:text-7xl uppercase font-thin">
              {name}
            </h1>
            <p className="tracking-wider pt-4">{description}</p>
          </div>
          <footer className="sm:border-t-2 border-white w-full flex flex-row justify-around pt-3  transpare">
            <div>
              <h3>AVERAGE DISTANCE:</h3>
              <p>{distance}</p>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <p>{travel}</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Planets;
