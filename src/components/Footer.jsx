import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center pt-[65px] md:pt-[73px] pb-[80px] md:pb-[72px] bg-light-cyan">
      <div className="mr-3">
        <img src="./images/logo.svg" alt="sunnyside logo" className="footer-logo w-[171px]"/>
      </div>
      <ul className="flex justify-center items-center gap-[57px] mt-[39px] text-[18px] text-dark-moderate-cyan">
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

      <ul className="socials flex justify-center items-center gap-[28px] mt-[86px] text-white">
        <li>
          <a href="">
            <img src="./images/icon-facebook.svg" alt="" className="w-[20px]"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/icon-instagram.svg" alt="" className="w-[20px]"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/icon-twitter.svg" alt="" className="w-[20px]"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/icon-pinterest.svg" alt="" className="w-[20px]" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
