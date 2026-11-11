import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import ShopStatus from "../Pages/ShopStatus";
import { CgProfile } from "react-icons/cg";
import { MdHealthAndSafety } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import StatsStripHom from "./StatsStripHom";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-135 bg-[#e3c468] text-[#F5F7FA] flex flex-col mb-60">
        <p className="border-2 w-62 rounded-2xl flex gap-1 p-1 mt-15 ml-90 roboto-slab-uniquifier bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
          <MdOutlineVerified className="size-5 mt-0.5" /> Govt. Approved Driving
          School
        </p>
        <p className="px-90 text-4xl roboto-slab-uniquifier mt-5">
          Learn Safe Driving with SHREE LAXMI MOTOR CAR DRIVING SCHOOL
        </p>
        <p className="text-xl px-90 mt-5 source-sans-3-uniquifier">
          Looking for a driving school in Faridabad? Whether you want car
          driving classes near Main Market Rd, Pocket B Sainik Colony, Sector 49
          Faridabad, Haryana 121001, or a driving school near Sainik Colony —
          we've been the go-to choice for 5000+ of students since 2004. Our
          instructors get you confident behind the wheel and ready for your RTO
          license on Faridabad's real roads.
        </p>
        <div className="mt-10 flex gap-3 items-center justify-center pb-10">
          <button className=" border-1 border-[#e3c468] cursor-pointer p-3 text-xl font-bold bg-[#142B4A] hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-[#24446e]">
            <a href="tel:+919211522526" className="flex gap-1 text-white">
              {" "}
              <IoMdCall className="size-6 mt-0.5" /> Call Now: 9211522526
            </a>
          </button>
          <button className=" border-1 border-[#e3c468] cursor-pointer p-3 text-xl font-bold w-60 flex justify-center bg-green-500 hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-green-300">
            <a
              href="https://wa.me/919211522526"
              className="flex gap-2 text-white"
            >
              {" "}
              <IoLogoWhatsapp className="size-7" /> Whatsapp
            </a>
          </button>
        </div>
        <div>
          <ShopStatus />
        </div>
        <div className="flex mt-2">
          <div>
            <div className="h-50 w-90 border-1 border-[#FFC928] text-center flex flex-col rounded-2xl ml-25 hover:-translate-y-1 bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
              {" "}
              <p className="flex justify-center mb-3 mt-4 text-orange-400">
                <CgProfile className="size-10" />
              </p>
              <p className="roboto-slab-uniquifier text-3xl mb-3 ">
                Certified Instructors
              </p>
              <p className="source-sans-3-uniquifier text-md px-2">
                Patient, RTO-certified trainers with 15+ years of teaching
                experience.
              </p>
            </div>
          </div>
          <div>
            <div className="h-50 w-90 border-1 border-[#FFC928] text-center flex flex-col rounded-2xl ml-30 hover:-translate-y-1 bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
              {" "}
              <p className="flex justify-center mb-3 mt-4 text-orange-400">
                <MdHealthAndSafety className="size-10" />
              </p>
              <p className="roboto-slab-uniquifier text-3xl mb-3 ">
                Dual-Control Cars
              </p>
              <p className="source-sans-3-uniquifier text-md px-2">
                Learn safely in well-maintained manual cars with instructor
                brakes.
              </p>
            </div>
          </div>
          <div>
            <div className="h-50 w-90 border-1 border-[#FFC928] text-center flex flex-col rounded-2xl ml-30 hover:-translate-y-1 bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
              {" "}
              <p className="flex justify-center mb-3 mt-4 text-orange-400">
                <FaClockRotateLeft className="size-10" />
              </p>
              <p className="roboto-slab-uniquifier text-3xl mb-3 ">
                Flexible Timings
              </p>
              <p className="source-sans-3-uniquifier text-md px-2">
                Morning to evening slots, 6 Working days a week - lessons that
                fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-50 justify-center mb-8">
        <div className="text-center">
          <p className="text-4xl roboto-slab-uniquifier text-[#FFC928]">
            20 <span className="text-orange-400"> + </span>{" "}
          </p>
          <p className="text-lg source-sans-3-uniquifier text-gray-500">
            Years of Experience
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl roboto-slab-uniquifier text-[#FFC928]">
            5000 <span className="text-orange-400"> + </span>{" "}
          </p>
          <p className="text-lg source-sans-3-uniquifier text-gray-500">
            Students Trained
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl roboto-slab-uniquifier text-[#FFC928]">
            4.8 <span className="text-orange-400"> ★ </span>
          </p>
          <p className="text-lg source-sans-3-uniquifier text-gray-500">
            Rating on Google
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl roboto-slab-uniquifier text-[#FFC928]">6</p>
          <p className="text-lg source-sans-3-uniquifier text-gray-500">
            Working Days a Week
          </p>
        </div>
      </div>
      <div className="mx-auto w-[95%] border-b mb-9 border-[#FFC928]"></div>
      <div>
        <div className="flex flex-col gap-3 items-center">
          <p className="w-40 text-center roboto-slab-uniquifier border-2 text-lg rounded-2xl text-[#F5F7FA] border-[#FFC928] bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
            What We Teach
          </p>
          <p className="text-4xl font-bold roboto-slab-uniquifier">
            Choose The Course That You Want
          </p>
          <p className="text-lg text-gray-500 source-sans-3-uniquifier">
            Tap any course to enquire on WhatsApp — or call us directly for
            instant answers.
          </p>
        </div>
        <div className="mb-10 flex">
          <a href="tel:+919211522526">
            <p className="flex flex-col w-90 border-2 h-64 ml-30 rounded-2xl hover:-translate-y-1 cursor-pointer border-[#FFC928] mt-10 p-3 bg-gradient-to-r from-[#ecc759] to-[#f5dc9a]">
              <p className="mt-2 text-orange-500">
                <FaCarAlt className="size-7" />
              </p>
              <p className="roboto-slab-uniquifier text-2xl text-[#F5F7FA] ">
                Car Driving (Manual)
              </p>
              <p className="source-sans-3-uniquifier text-[#F5F7FA] mb-3">
                From the quiet lanes of 2 No. H-Block, Lakhani, to the busy
                roads around Mula Hotel, Raja Chowk and Kalyan Chowk — gain
                real-world driving experience with expert guidance and hands-on
                training.
              </p>
              <div className="mx-auto w-[100%]  border-b border-[#F5F7FA]"></div>
              <p className="flex gap-50">
                <p className="mt-3 text-[#F5F7FA] ">Call For Pricing</p>
                <p className="text-3xl mt-1 text-[#F5F7FA]">→</p>
              </p>
            </p>
          </a>
          <a href="tel:+919211522526">
            <p className="flex flex-col w-90 border-2 h-64 ml-30 rounded-2xl hover:-translate-y-1 cursor-pointer border-[#FFC928] mt-10 p-3 bg-gradient-to-r from-[#ecc759] to-[#f5dc9a]">
              <p className="mt-2 text-orange-500">
                <FaCarAlt className="size-7" />
              </p>
              <p className="roboto-slab-uniquifier text-2xl mb-3 text-[#F5F7FA] ">
                Training On Personal Car
              </p>
              <p className="source-sans-3-uniquifier text-[#F5F7FA] mb-6">
                Prefer learning in your own car? We offer personalized driving
                lessons using your vehicle, helping you build confidence and
                feel comfortable behind the wheel every day.
              </p>
              <div className="mx-auto w-[100%]  border-b border-[#F5F7FA]"></div>
              <p className="flex gap-50">
                <p className="mt-3 text-[#F5F7FA] ">Call For Pricing</p>
                <p className="text-3xl mt-1 text-[#F5F7FA]">→</p>
              </p>
            </p>
          </a>{" "}
          <a href="tel:+919211522526">
            <p className="flex flex-col w-90 border-2 h-64 ml-30 rounded-2xl hover:-translate-y-1 cursor-pointer border-[#FFC928] mt-10 p-3 bg-gradient-to-r from-[#ecc759] to-[#f5dc9a]">
              <p className="mt-2 flex gap-2 text-orange-500">
                <FaCarAlt className="size-7" />
                <CgGirl className="size-7" />
              </p>
              <p className="roboto-slab-uniquifier text-2xl text-[#F5F7FA] ">
                Ladies Special Batches
              </p>
              <p className="source-sans-3-uniquifier text-[#F5F7FA] mb-3">
                Dedicated driving batches for women, offering flexible timings,
                a safe and comfortable learning environment, and patient,
                supportive instruction. Proudly serving learners from 2 No. H
                Block, Lakhani to Kalyan Chowk.
              </p>
              <div className="mx-auto w-[100%]  border-b border-[#F5F7FA]"></div>
              <p className="flex gap-50">
                <p className="mt-3 text-[#F5F7FA] ">Call For Pricing</p>
                <p className="text-3xl mt-1 text-[#F5F7FA]">→</p>
              </p>
            </p>
          </a>
        </div>
        <div className="px-15">
          <div className="px-4 h-30 mb-10 border-1 bg-gradient-to-r from-[#f6ca45] to-[#f6e3b1] flex border-[#FFC928] rounded-2xl">
            <div className="flex flex-col gap-1 mt-4">
              <p className="mt-3 font-bold text-xl roboto-slab-uniquifier">
                Not sure which one is right for you?
              </p>
              <p className="text-gray-700 source-sans-3-uniquifier">
                Call us — we'll help you pick in under 2 minutes.
              </p>
            </div>
            <div className="flex gap-3 mt-8 ml-120">
              <button className=" border-1 cursor-pointer p-3 h-15 text-xl font-bold bg-[#142B4A] hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-[#24446e]">
                <a href="tel:+919211522526" className="flex gap-1 text-white">
                  {" "}
                  <IoMdCall className="size-6 mt-0.5" /> Call Now: 9211522526
                </a>
              </button>
              <button className=" border-1 cursor-pointer p-3 text-xl h-15 font-bold w-60 flex justify-center bg-green-500 hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-green-300">
                <a
                  href="https://wa.me/919211522526"
                  className="flex gap-2 text-white"
                >
                  {" "}
                  <IoLogoWhatsapp className="size-7" /> Whatsapp
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <StatsStripHom />
        </div>
        <div className="w-full">
          <div className="h-30  border-1 bg-gradient-to-r from-[#f6ca45] to-[#f6e3b1] flex border-[#FFC928] ">
            <div className="flex flex-col gap-1 mt-4 ml-30">
              <p className="mt-3 font-bold text-3xl roboto-slab-uniquifier">
                Ready to start your driving journey?
              </p>
              <p className="text-gray-700 source-sans-3-uniquifier text-xl">
                Call us — we'll help you in Learning Car driving.
              </p>
            </div>
            <div className="flex gap-3 mt-8 ml-120">
              <button className=" border-1 cursor-pointer p-3 h-15 text-xl font-bold bg-[#142B4A] hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-[#24446e]">
                <a href="tel:+919211522526" className="flex gap-1 text-white">
                  {" "}
                  <IoMdCall className="size-6 mt-0.5" /> Call Now: 9211522526
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
