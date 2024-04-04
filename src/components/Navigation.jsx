import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="relative flex justify-between items-center border">
      <a href="/">
        <img class="w-[171px]" src="./images/logo.svg" alt="sunnyside logo" />
      </a>
      <div class="absolute md:relative menu-section shown flex flex-col md:flex-row items-center gap-8 md:gap-[3.15rem] p-8 md:p-0 max-w-[278px] w-full md:w-auto top-1/2 md:top-0 left-1/2 md:left-0 translate-x-[-50%] md:transform-none translate-y-[20%] bg-white md:bg-transparent">
        <ul class="flex flex-col md:flex-row gap-[46.8px]">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        </ul>
        <a
          href="/"
          class="py-[16.2px] px-[27px] md:mr-[7.2px] bg-yellow md:bg-white border rounded-full font-fraunces font-bold uppercase"
        >
          Contact
        </a>
      </div>
      <button class="block md:hidden" onClick={() => {
        alert("clicked");
      }}>
        <img src="./images/icon-hamburger.svg" alt="hamburger button" />
      </button>
    </nav>
  );
};

export default Navigation;
