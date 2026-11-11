import React from "react";
import pic from "../assets/pic.png";
import { CiMobile3 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const ADDRESS =
  "Shree Laxmi Motor Car Driving School, Main Market Rd, Pocket B, Sainik Colony, Sector 49, Faridabad, Haryana 121001";

const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`;
const Footer = () => {
  return (
    <div className="min-h-80 w-full bg-[#142B4A] text-[#FFFFFF]">
      <div className="flex">
        <div className="ml-10 flex w-1/3 flex-col mt-4">
          <div className="flex">
            <img src={pic} alt="" className="h-20 w-20" />
            <p className="roboto-slab-uniquifier mt-3 text-xl font-bold">
              SHREE LAXMI MOTOR CAR DRIVING SCHOOL
            </p>
          </div>
          <div className="source-sans-3-uniquifier mt-2 text-lg text-[#FFFFFF]">
            A government-approved driving school committed to creating safe,
            confident and responsible drivers. Certified instructors,
            dual-control cars and complete licence support.
          </div>
          <div className="mt-3 flex gap-3">
            <a
              href="tel:+919211522526"
              className="flex w-10 cursor-pointer items-center justify-center rounded-full border-2 p-2 transition-colors hover:-translate-y-1 hover:border-blue-300 hover:text-gray-300"
            >
              <CiMobile3 className="size-5" />
            </a>
            <a
              href="https://wa.me/919211522526"
              className="flex w-10 cursor-pointer items-center justify-center rounded-full border-2 p-2 transition-colors hover:-translate-y-1 hover:border-blue-300 hover:text-green-500"
            >
              <FaWhatsapp className="size-5" />
            </a>
            <a
              href="mailto:bs3665201@gmail.com"
              className="flex w-10 cursor-pointer items-center justify-center rounded-full border-2 p-2 transition-colors hover:-translate-y-1 hover:border-blue-300 hover:text-gray-300"
            >
              <MdOutlineMail className="size-5" />
            </a>
          </div>
        </div>

        <div className="w-1/3 mt-4">
          <p className="roboto-slab-uniquifier mt-3 text-center text-xl font-bold">
            Quick links
          </p>
          <div className="source-sans-3-uniquifier ml-51 mt-2 flex flex-col gap-2 text-lg font-bold">
            <Link to="/" className="w-fit hover:text-amber-200 hover:underline">
              Home
            </Link>
            <Link
              to="/about"
              className="w-fit hover:text-amber-200 hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="w-fit hover:text-amber-200 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-50% mt-4">
          <p className="roboto-slab-uniquifier mt-3 ml-5 text-xl font-bold">
            Address
          </p>
          {/* compact = small map + directions link, made for the footer */}
          <div className="flex flex-col gap-1 source-sans-3-uniquifier ml-5 mt-2">
            <p>Main Market Rd, Pocket B, </p>
            <p> Sainik Colony, Sector 49, </p>
            <p> Faridabad, Haryana 121001</p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 mt-4"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[85%] border-b border-blue-300 mt-8"></div>
      <p className="text-center text-sm mt-2 source-sans-3-uniquifier">
        ©2026 SHREE LAXMI MOTOR CAR DRIVING SCHOOL. ALL RIGHT RESERVED ॐ
      </p>
    </div>
  );
};

export default Footer;
