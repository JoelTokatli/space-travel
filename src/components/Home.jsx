import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="w-full" id="home">
      <div className="lg:h-screen pb-36 sm:pt-4 pt-5 px-1 bg-no-repeat bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover">
        <Navbar />
        <div className="lg:flex lg:justify-around sm:items-center sm:pt-60 justify-center items-center w-full text-gray-400">
          <div className="flex-col text-center space-y-10 lg:space-y-2 ">
            <h2 className=" text-2xl tracking-widest">
              So, you want to travel to
            </h2>
            <h1 className=" text-7xl tracking-wider font-thin"> Space</h1>
            <p className=" text-base w-10/12 my-0 mx-auto lg:max-w-xl">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="w-44 h-44 bg-white rounded-[50%] grid justify-center items-center my-0 mx-auto mt-12 shadow-md lg:m-0 lg:w-52 lg:h-52 hover:shadow-md hover:shadow-cyan-900 active:scale-95 cursor-pointer transition-all">
            <a
              href="#destination"
              className="text-4xl tracking-wide text-gray-700 p-20 in"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
