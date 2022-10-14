import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden justify-between sm:flex w-full fixed">
      <figure className="p-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </figure>
      <ul className=" text-white sm:flex sm:pr-20 lg:pr-40  bg-slate-800 bg-opacity-60 items-center gap-12 pl-8 rounded-sm  tracking-widest right-0">
        <li className="h-[88px] flex place-items-center justify-center text-center">
          <a
            href="#home"
            className="transition-all hover:border-b-2 border-white active:translate-y-1"
          >
            <b>00</b> HOME
          </a>
        </li>
        <li className="h-[88px] flex place-items-center justify-center text-center ">
          <a
            href="#destination"
            className="transition-all hover:border-b-2 border-white active:translate-y-1"
          >
            <b>01</b> DESTINATION
          </a>
        </li>
        <li className="h-[88px] flex place-items-center justify-center text-center">
          <a
            href="#crew"
            className="transition-all hover:border-b-2 border-white active:translate-y-1"
          >
            <b>02</b> CREW
          </a>
        </li>
        <li className="h-[88px] flex place-items-center justify-center text-center">
          <a
            href="#technology"
            className="transition-all hover:border-b-2 border-white active:translate-y-1"
          >
            <b>03</b> TECHNOLOGY
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
