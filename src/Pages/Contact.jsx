import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import Location from "../Pages/Location"

const ADDRESS =
  "Shree Laxmi Motor Car Driving School, Main Market Rd, Pocket B, Sainik Colony, Sector 49, Faridabad, Haryana 121001";

const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`;

const Contact = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-40 bg-[#e8c252] text-center py-10 flex flex-col items-center gap-3">
        <p className=" border-1 w-30 rounded-xl font-bold roboto-slab-uniquifier text-[#F5F7FA]">
          Get In Contact
        </p>
        <p className="font-bold roboto-slab-uniquifier text-[#F5F7FA] text-3xl">
          Get in contact with us — we'll take care of the rest.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 text-lg font-bold source-sans-3-uniquifierx ">
        <p>
          Call or WhatsApp us for driving lesson timings, course details, and
          fees.{" "}
        </p>
        <p>
          {" "}
          We're here to answer your questions and guide you every step of the
          way.
        </p>
        <p>
          {" "}
          Get in touch today and start your driving journey with confidence!
        </p>
      </div>
      <div className="mt-10 flex gap-3 items-center justify-center pb-14">
        <button className=" border-1 cursor-pointer p-3 text-xl font-bold bg-[#142B4A] hover:-translate-y-1 rounded-2xl shadow-2xl shadow-[#24446e]">
          <a href="tel:+919211522526" className="flex gap-1 text-white">
            {" "}
            <IoMdCall className="size-6 mt-0.5" /> Call Now: 9211522526
          </a>
        </button>
        <button className=" border-1 cursor-pointer p-3 text-xl font-bold w-60 flex justify-center bg-green-500 hover:-translate-y-1 rounded-2xl shadow-2xl shadow-green-300">
          <a
            href="https://wa.me/919211522526"
            className="flex gap-2 text-white"
          >
            {" "}
            <IoLogoWhatsapp className="size-7" /> Whatsapp
          </a>
        </button>
      </div>
      <div className="mx-auto w-[55%] border-b border-[#ebcd73]"></div>
      <div className="w-full px-4 py-10">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Card 1: Location */}
          <div className="flex flex-col rounded-3xl border border-[#e8c252] bg-gradient-to-r from-[#fcdb78] to-[#f4e1ab] p-7">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest roboto-slab-uniquifier text-[#eaaf00]">
              Our Location
            </h3>

            <address className="not-italic text-lg leading-8 text-white source-sans-3-uniquifier">
              <p>Main Market Rd,</p>
              <p>Pocket B</p>
              <p>Sainik Colony, Sector 49</p>
              <p>Faridabad, Haryana 121001</p>
            </address>

            <p className="mt-4 text-base leading-7 text-white source-sans-3-uniquifier">
              Shree Laxmi Motor Car Driving School, Main Market Rd, Pocket B,
              Sainik Colony, Sector 49, Faridabad, Haryana 121001
            </p>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-xl border hover:-translate-y-1 source-sans-3-uniquifier border-green-100 bg-[#e4c35e] px-4 py-3 font-semibold text-gray-900 transition hover:bg-[#eaaf00]"
            >
              <span>📍</span> Get Directions
            </a>
          </div>
          <div className="flex flex-col rounded-3xl border border-[#e8c252] bg-gradient-to-r from-[#fcdb78] to-[#f4e1ab]  p-7">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest roboto-slab-uniquifier text-[#eaaf00]">
              Opening Hours
            </h3>

            <p className="text-2xl font-extrabold leading-8 text-white source-sans-3-uniquifier">
              5:00 AM – 8:00 PM
            </p>

            <p className="mt-4 text-lg font-semibold text-white source-sans-3-uniquifier">
              Monday – Saturday
            </p>

            <p className="mt-3 text-base leading-7 text-white source-sans-3-uniquifier">
              Open every day including Saturday and public holidays. We know
              weekdays can be tight.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Location />
      </div>
    </div>
  );
};

export default Contact;
