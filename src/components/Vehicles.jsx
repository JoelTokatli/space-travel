import React, { useState } from "react";
import data from "./data";

const Vehicles = () => {
  const [index, setIndex] = useState(0);
  const { name, images, description } = data[2][index];
  const { portrait } = images;
  const [opacity, setOpacity] = useState(true);
  const handleClick = (id) => {
    if (id === index) {
      return;
    } else {
      setOpacity(false);
      setTimeout(() => {
        setIndex(id);
        setOpacity(true);
      }, 1200);
    }
  };
  return (
    <article className="transition-all pt-5 text-white">
      <div className="flex lg:flex-row flex-col justify-evenly items-center w-full sm:flex-col-reverse">
        <div
          className={` ${opacity ? "" : "opacity-0"} ${
            opacity ? "" : "-translate-x-full"
          } flex lg:flex-row max-w-2xl flex-col justify-center items-center lg:pt-20 pt-20 lg:justify-evenly transition-all duration-1000`}
        >
          <ul className={` flex lg:flex-col text-white flex-row gap-16`}>
            {data[2].map((vehicle) => {
              const { id } = vehicle;
              let i = 1;
              return (
                <li
                  className="text-lg cursor-pointer"
                  key={id}
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  <div className="w-14 h-14 rounded-full border hover:bg-white hover:bg-opacity-30 transition-colors grid justify-center items-center">
                    <p className="text-xl">{id + 1}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="lg:w-10/12 w-11/12 flex flex-col gap-3 tracking-wide text-center pt-6 lg:space-y-5 lg:w">
            <p className="text-slate-400  drop-shadow-md shadow-white tracking-wider text-xl">
              THE TERMINOLOGY...
            </p>
            <h2 className="text-white font-thin lg:text-6xl tracking-wider uppercase text-4xl">
              {name}
            </h2>
            <p className="text-slate-400 lg:text-base">{description}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className={`${opacity ? "" : "opacity-0"} ${
              opacity ? "" : "translate-x-full"
            }  lg:w-96 lg:h-80 mt-6 w-96 h-96 rounded-md flex flex-shrink transition-all duration-1000`}
            src={`${portrait}`}
            alt=""
          />
        </div>
      </div>
    </article>
  );
};

export default Vehicles;
