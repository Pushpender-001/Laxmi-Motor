import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../assets/pic.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-2  border-b-3 transition-colors ${
      isActive ? "border-white" : "border-transparent hover:border-white/60"
    }`;

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="h-14 flex justify-center gap-2 bg-[#142B4A]">
        <img src={pic} alt="" />
        <p className="mt-3 text-[#FFFFFF] roboto-slab-uniquifier font-bold text-4xl">
          SHREE LAXMI MOTOR CAR DRIVING SCHOOL
        </p>
        <img src={pic} alt="" />
      </div>

      <div className="text-[#FFFFFF] flex justify-center bg-[#142B4A] gap-10 font-bold roboto-slab-uniquifier text-2xl">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About Us</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;