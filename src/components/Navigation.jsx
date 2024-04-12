import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center">
      <a href="/">
        <img className="w-[7.8125rem] md:w-[10.6875rem]" src="./images/logo.svg" alt="sunnyside logo" />
      </a>
      <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row justify-between items-center absolute md:relative gap-8 md:gap-0 p-8 md:p-0 top-1/2 md:top-0 left-1/2 md:left-0 translate-x-[-50%] translate-y-[20%] md:transform-none bg-white md:bg-transparent max-w-[17.375rem] md:max-w-none w-full md:w-auto`}>
        <ul className="flex flex-col md:flex-row gap-[2.9875rem] md:mr-[2.9rem] text-lg text-white">
          <li>
            <a href="/" className="hover:text-dark-grayish-blue transition-all">About</a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-grayish-blue transition-all">Services</a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-grayish-blue transition-all">Projects</a>
          </li>
        </ul>
        <a
          href="/"
          className="py-[1.0125rem] px-[1.875rem] md:mr-[.45rem] hover:bg-amber-600 md:hover:bg-yellow bg-yellow md:bg-white border rounded-full text-[1.0125rem]  font-fraunces font-bold uppercase tracking-[-0.0437rem] transition-all"
        >
          Contact
        </a>
      </div>
      <button
        className="block md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src="./images/icon-hamburger.svg" alt="hamburger button" />
      </button>
    </nav>
  );
};

export default Navigation;
