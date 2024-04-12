import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center pt-[4.0625rem] md:pt-[4.5625rem] pb-[5rem] md:pb-[4.5rem] bg-light-cyan">
      <div className="mr-3">
        <img src="./images/logo.svg" alt="sunnyside logo" className="footer-logo w-[10.6875rem]"/>
      </div>
      <ul className="flex justify-center items-center gap-[3.5625rem] mt-[2.4375rem] text-[1.125rem] text-dark-moderate-cyan">
        <li>
          <a href="" className="hover:text-white transition-all">About</a>
        </li>
        <li>
          <a href=""className="hover:text-white transition-all">Services</a>
        </li>
        <li>
          <a href="" className="hover:text-white transition-all">Projects</a>
        </li>
      </ul>

      <ul className="socials flex justify-center items-center gap-[1.75rem] mt-[5.375rem] text-white">
        <li>
          <a href="">
            <img src="./images/icon-facebook.svg" alt="" className="w-[1.25rem]"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/icon-instagram.svg" alt="" className="w-[1.25rem]"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/icon-twitter.svg" alt="" className="w-[1.25rem]"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/icon-pinterest.svg" alt="" className="w-[1.25rem]" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
