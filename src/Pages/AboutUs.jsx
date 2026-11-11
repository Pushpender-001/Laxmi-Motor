import React, { useEffect, useRef, useState } from "react";
import car from "../assets/car1.jpeg";
import StatsStrip from "../Pages/StatsStrip";
import { LuTarget, LuEye, LuHeart, LuShieldCheck, LuUsers } from "react-icons/lu";
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

/* Reveals its children (fade + gentle rise) once, when scrolled into view */
const Reveal = ({ children, delay = 0, from = "up", className = "" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${from} ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Animation styles (self-contained, no Tailwind config needed) */}
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0) rotate(-0.6deg); }
          50%      { transform: translateY(-16px) rotate(0.6deg); }
        }
        @keyframes floatyShadow {
          0%, 100% { transform: scale(1);   opacity: .35; }
          50%      { transform: scale(.88); opacity: .18; }
        }
        @keyframes frameDrift {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(-6px, 6px); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes shine {
          0%   { transform: translateX(-120%) skewX(-20deg); }
          60%, 100% { transform: translateX(260%) skewX(-20deg); }
        }
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,.45); }
          50%      { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
        }

        .float-img     { animation: floaty 6s ease-in-out infinite; }
        .float-shadow  { animation: floatyShadow 6s ease-in-out infinite; }
        .frame-drift   { animation: frameDrift 6s ease-in-out infinite; }
        .hero-in       { animation: heroIn .9s cubic-bezier(.22,.61,.36,1) both; }
        .hero-in-2     { animation: heroIn .9s .15s cubic-bezier(.22,.61,.36,1) both; }
        .line-grow     { transform-origin: left; animation: lineGrow 1.2s .3s cubic-bezier(.22,.61,.36,1) both; }
        .wa-pulse      { animation: softPulse 2.6s ease-out infinite; }

        .reveal {
          opacity: 0;
          transition: opacity .8s cubic-bezier(.22,.61,.36,1),
                      transform .8s cubic-bezier(.22,.61,.36,1);
          will-change: opacity, transform;
        }
        .reveal-up    { transform: translateY(28px); }
        .reveal-left  { transform: translateX(-32px); }
        .reveal-right { transform: translateX(32px); }
        .reveal-in    { opacity: 1; transform: none; }

        /* card sheen on hover */
        .card-sheen::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%);
          transform: translateX(-120%) skewX(-20deg);
          pointer-events: none;
        }
        .card-sheen:hover::after { animation: shine 1.1s ease; }

        /* button sheen */
        .btn-sheen { position: relative; overflow: hidden; }
        .btn-sheen::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.28) 50%, transparent 65%);
          transform: translateX(-120%) skewX(-20deg);
          pointer-events: none;
        }
        .btn-sheen:hover::after { animation: shine .9s ease; }

        @media (prefers-reduced-motion: reduce) {
          .float-img, .float-shadow, .frame-drift, .hero-in, .hero-in-2,
          .line-grow, .wa-pulse { animation: none !important; }
          .reveal { opacity: 1; transform: none; transition: none; }
          .card-sheen:hover::after, .btn-sheen:hover::after { animation: none; }
        }
      `}</style>

      {/* Page title */}
      <div className="hero-in font-bold text-3xl sm:text-4xl md:text-5xl roboto-slab-uniquifier text-center px-4 py-8 sm:p-10 bg-[#FFC928] text-[#F5F7FA]">
        About Us
      </div>

      {/* Intro: text + floating image */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-6 px-5 sm:px-10 lg:px-20 py-10 md:pb-14">
        <div className="w-full md:w-1/2 source-sans-3-uniquifier hero-in-2">
          <p className="text-2xl sm:text-3xl font-bold text-[#FFC928]">
            Your Trusted Driving School
          </p>
          <div className="line-grow h-[3px] w-24 bg-[#FFC928] rounded-full mt-3" />
          <div className="flex flex-col gap-4 sm:gap-5 mt-5 text-base sm:text-lg leading-relaxed">
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
              comfortable, structured, and rewarding learning experience.
            </p>
            <p>
              Our mission is simple: to shape confident drivers and contribute
              to safer roads for everyone.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Reveal from="right" delay={150} className="relative w-full max-w-md lg:max-w-lg">
            {/* gold frame, drifting slightly out of sync with the photo */}
            <div className="frame-drift absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border-[#FFC928] opacity-70" />
            {/* floating photo */}
            <div className="float-img relative">
              <img
                src={car}
                alt="Shree Laxmi Motor Car Driving School training car"
                className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl border-2 border-[#FFC928] shadow-2xl"
              />
            </div>
            {/* ground shadow that breathes with the float */}
            <div className="float-shadow absolute -bottom-8 left-1/2 -translate-x-1/2 h-4 w-3/4 rounded-[50%] bg-black/40 blur-xl" />
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="mx-auto w-[85%] border-b mb-10 border-[#FFC928]"></div>
      </Reveal>

      <Reveal>
        <div className="text-center text-2xl sm:text-3xl md:text-4xl roboto-slab-uniquifier text-[#fabc01] mb-4 px-4">
          The Way We Teach Driving
        </div>
      </Reveal>

      {/* Cards */}
      <div className="w-full bg-[#f4e1ab] mb-1 px-5 sm:px-10 py-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 120}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <div className="card-sheen relative h-full overflow-hidden flex flex-col gap-2 rounded-2xl border-2 border-[#FFC928] bg-gradient-to-r from-[#FFC928] to-[#f4e1ab] p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#f9bc07]">
                <Icon className="size-9 sm:size-10 text-orange-400" />
                <p className="text-lg sm:text-xl roboto-slab-uniquifier text-white">
                  {title}
                </p>
                <p className="text-base source-sans-3-uniquifier text-white">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <StatsStrip />

      {/* Call to action */}
      <div className="flex flex-col items-center mt-1 px-5 py-8 sm:p-8 bg-gradient-to-r from-[#FFC928] to-[#f4e1ab] text-center">
        <Reveal>
          <div className="text-2xl sm:text-3xl roboto-slab-uniquifier text-[#142B4A]">
            Want to join the school?
          </div>
          <p className="mt-2 max-w-xl text-base sm:text-lg source-sans-3-uniquifier text-white">
            Call or WhatsApp us to check batch timings and fees. We'll answer
            everything on the spot — no long forms, no waiting.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-6 mb-4 sm:mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center">
            <a
              href="tel:+919211522526"
              className="btn-sheen flex items-center justify-center gap-2 px-5 py-3 text-lg sm:text-xl font-bold text-white bg-[#142B4A] rounded-2xl shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[#24446e] cursor-pointer"
            >
              <IoMdCall className="size-6" /> Call Now: 9211522526
            </a>
            <a
              href="https://wa.me/919211522526"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen wa-pulse flex items-center justify-center gap-2 px-5 py-3 text-lg sm:text-xl font-bold text-white bg-green-500 rounded-2xl shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-green-300 cursor-pointer sm:w-60"
            >
              <IoLogoWhatsapp className="size-7" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutUs;
