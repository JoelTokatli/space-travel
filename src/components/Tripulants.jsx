import React, { useState } from "react";
import data from "./data";

const Tripulants = () => {
  const [index, setIndex] = useState(0);
  const { name, role, bio, images, id } = data[1][index];
  const [opacity, setOpacity] = useState(true);
  const { png } = images;
  const handleClick = (id) => {
    if (id === index) {
      return;
    } else {
      setOpacity(false);
      setTimeout(() => {
        setIndex(id);
        setOpacity(true);
      }, 1000);
    }
  };
  return (
    <article className="transition-all  text-white">
      <div
        className={`flex flex-col-reverse items-center sm:flex-col
            lg:flex-row sm:justify-evenly gap-4 sm:gap-0 lg:pt-14 sm:space-y-8`}
      >
        <div className="flex-col ">
          <div
            className={`sm:max-w-2xl max-w-lg flex flex-col justify-center items-center tracking-wider space-y-6 lg:text-start lg:max-w-xl ${
              opacity ? "" : "opacity-0"
            } ${
              opacity ? "" : "-translate-x-full"
            } transition-all duration-1000 `}
          >
            <h1 className="sm:text-xl text-lg text-gray-300 sm:pt-5">{role}</h1>
            <h2 className="text-white lg:text-6xl text-2xl sm:text-4xl font-thin">
              {name}
            </h2>
            <p className="text-center text-slate-400 px-1">{bio}</p>
            <ul className="flex text-white gap-7 sm:pt-5 sm:gap-10">
              {data[1].map((tripulant) => {
                const { id } = tripulant;
                return (
                  <li
                    className="text-lg cursor-pointer"
                    key={id}
                    onClick={() => {
                      handleClick(id);
                    }}
                  >
                    <div
                      className={` m-auto border-2 rounded-full border-t-2 border-t-gray-600 border-red-50 w-10 h-10  grid items-center justify-center animate-spin-slow`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-colors my-0 mx-0"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          className={`${opacity ? "" : "opacity-0"} ${
            opacity ? "" : "translate-x-full"
          } sm:max-w-xs h-96 sm:max-h-64 lg:max-h-80 mt-6 rounded-md transition-all duration-1000`}
          src={png}
          alt="crew-member"
        />
      </div>
    </article>
  );
};

export default Tripulants;
