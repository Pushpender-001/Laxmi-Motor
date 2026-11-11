import React from "react";
import car from "../assets/car1.jpeg";
import { LuTarget } from "react-icons/lu";
import StatsStrip from "../Pages/StatsStrip";
import { LuEye, LuHeart, LuShieldCheck, LuUsers } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

const cards = [
  {
    icon: LuTarget,
    title: "Our Mission",
    text: "To create safe and skilled drivers through patient, practical and personalised training.",
  },
  {
    icon: LuEye,
    title: "Our Vision",
    text: "To be the most trusted name in driving education, known for safety and student success.",
  },
  {
    icon: LuHeart,
    title: "Our Values",
    text: "Safety first, honesty always, and respect for every learner's pace and comfort.",
  },
  {
    icon: LuShieldCheck,
    title: "Our Safety",
    text: "Dual-control cars and certified instructors keep every lesson safe.",
  },
  {
    icon: LuUsers,
    title: "Our Team",
    text: "Experienced, patient instructors who guide every learner step by step.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen ">
      <div className="font-bold text-5xl roboto-slab-uniquifier text-center p-10 bg-[#FFC928] text-[#F5F7FA]">
        About Us
      </div>
      <div className="w-full flex pb-10">
        <div className="w-1/2 source-sans-3-uniquifier mt-10 ml-20">
          <p className="text-3xl font-bold text-[#FFC928]">
            Your Trusted Driving School
          </p>
          <div className="flex flex-col gap-5 ml-1 mt-4">
            <p>
              Established in 2004, Shree Laxmi Motor Car Driving School has been
              committed to delivering professional driving education with a
              focus on safety, confidence, and responsibility. What began with a
              single training vehicle has grown into a trusted driving academy,
              equipped with 20+ training cars and a team of experienced,
              certified instructors.
            </p>
            <p>
              At Shree Laxmi Motor Car Driving School, we believe that learning
              to drive is more than just mastering a skill — it's about
              developing lifelong road safety habits. Through personalised
              guidance, patient instruction, and practical training on city
              roads and highways, we ensure every learner receives a
              comfortable, structured, and rewarding learning experience.{" "}
            </p>
            <p>
              Our mission is simple: to shape confident drivers and contribute
              to safer roads for everyone.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={car}
            alt=""
            className="h-90 w-130 mt-8 ml-30 rounded-2xl border-2 border-[#FFC928] "
          />
        </div>
      </div>
      <div className="mx-auto w-[85%] border-b mb-10 border-[#FFC928]"></div>
      <div className="text-center text-4xl roboto-slab-uniquifier text-[#fabc01] mb-1 ">
        The Way We Teach Driving
      </div>
      <div className="w-full bg-[#f4e1ab] mb-1 px-10 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex w-full flex-col gap-2 rounded-2xl border-2 border-[#FFC928] bg-gradient-to-r from-[#FFC928] to-[#f4e1ab] p-5 transition hover:-translate-y-1 hover:border-[#f9bc07] md:w-[calc(33.333%-14px)]"
            >
              <Icon className="size-10 text-orange-400" />
              <p className="text-xl roboto-slab-uniquifier text-white">
                {title}
              </p>
              <p className="text-md source-sans-3-uniquifier text-white">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <StatsStrip />
      <div className="flex flex-col items-center mt-1 p-4 bg-gradient-to-r from-[#FFC928] to-[#f4e1ab]">
        <div className="text-3xl roboto-slab-uniquifier text-[#142B4A]">Want to join the school?</div>
        <div className="text-lg source-sans-3-uniquifier text-white">
          Call or WhatsApp us to check batch timings and fees. We'll answer
         </div><div className="source-sans-3-uniquifier text-white"> everything on the spot — no long forms, no waiting.
        </div>

        <div className=" mt-5 flex gap-3 items-center justify-center mb-10">
          <button className=" border-1 cursor-pointer p-3 text-xl font-bold bg-[#142B4A] hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-[#24446e]">
            <a href="tel:+919211522526" className="flex gap-1 text-white">
              {" "}
              <IoMdCall className="size-6 mt-0.5" /> Call Now: 9211522526
            </a>
          </button>
          <button className=" border-1 cursor-pointer p-3 text-xl font-bold w-60 flex justify-center bg-green-500 hover:-translate-y-1 rounded-2xl shadow-2xl hover:shadow-green-300">
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
  );
};

export default AboutUs;
