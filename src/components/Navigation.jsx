import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="relative flex justify-between items-center">
      <a href="/">
        <img class="w-[125px] md:w-[171px]" src="./images/logo.svg" alt="sunnyside logo" />
      </a>
      <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row justify-between items-center absolute md:relative gap-8 md:gap-0 p-8 md:p-0 top-1/2 md:top-0 left-1/2 md:left-0 translate-x-[-50%] translate-y-[20%] md:transform-none bg-white md:bg-transparent max-w-[278px] md:max-w-none w-full md:w-auto`}>
        <ul class="flex flex-col md:flex-row gap-[47.8px] md:mr-[46.4px] text-lg">
          <li>
            <a href="/" className="hover:text-white transition-all">About</a>
          </li>
          <li>
            <a href="/" className="hover:text-white transition-all">Services</a>
          </li>
          <li>
            <a href="/" className="hover:text-white transition-all">Projects</a>
          </li>
        </ul>
        <a
          href="/"
          class="py-[16.2px] px-[30px] md:mr-[7.2px] hover:bg-amber-600 md:hover:bg-yellow bg-yellow md:bg-white border rounded-full text-[16.2px]  font-fraunces font-bold uppercase tracking-[-0.7px] transition-all"
        >
          Contact
        </a>
      </div>
      <button
        class="block md:hidden"
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
