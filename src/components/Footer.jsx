import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center pt-[65px] md:pt-[73px] pb-[80px] md:pb-[72px] bg-red-500">
      <div className="mr-3">
        <img src="./images/logo.svg" alt="sunnyside logo" className="w-[171px]"/>
      </div>
      <ul className="flex justify-center items-center gap-[57px] mt-[39px] text-[18px]">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>

      <ul className="flex justify-center items-center gap-[28px] mt-[86px]">
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
