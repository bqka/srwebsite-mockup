"use client";
import React, { useState } from "react";

import { logo } from "@/public/assets/";
import Image from "next/image";
import { navLinks } from "@/public/constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="srlogo" className="size-[72px]" />

      <ul className="sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-pixel font-medium cursor-pointer text-[24px] text-white ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="size-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div> */}

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px] sidebar`}
      >
        <ul className="flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index == navLinks.length - 1 ? "mb-0" : "mb-4"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;