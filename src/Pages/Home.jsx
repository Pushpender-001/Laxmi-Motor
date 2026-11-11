import React, { useEffect, useRef, useState } from "react";
import { MdOutlineVerified, MdHealthAndSafety } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CgProfile, CgGirl } from "react-icons/cg";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import ShopStatus from "../Pages/ShopStatus";
import StatsStripHom from "./StatsStripHom";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: CgProfile,
    title: "Certified Instructors",
    text: "Patient, RTO-certified trainers with 15+ years of teaching experience.",
  },
  {
    icon: MdHealthAndSafety,
    title: "Dual-Control Cars",
    text: "Learn safely in well-maintained manual cars with instructor brakes.",
  },
  {
    icon: FaClockRotateLeft,
    title: "Flexible Timings",
    text: "Morning to evening slots, 6 Working days a week - lessons that fit your schedule.",
  },
];

const stats = [
  { end: 20, suffix: " +", label: "Years of Experience" },
  { end: 5000, suffix: " +", label: "Students Trained" },
  { end: 4.8, decimals: 1, suffix: " ★", label: "Rating on Google" },
  { end: 6, suffix: "", label: "Working Days a Week" },
];

const courses = [
  {
    icons: [FaCarAlt],
    title: "Car Driving (Manual)",
    text: "From the quiet lanes of 2 No. H-Block, Lakhani, to the busy roads around Mula Hotel, Raja Chowk and Kalyan Chowk — gain real-world driving experience with expert guidance and hands-on training.",
  },
  {
    icons: [FaCarAlt],
    title: "Training On Personal Car",
    text: "Prefer learning in your own car? We offer personalized driving lessons using your vehicle, helping you build confidence and feel comfortable behind the wheel every day.",
  },
  {
    icons: [FaCarAlt, CgGirl],
    title: "Ladies Special Batches",
    text: "Dedicated driving batches for women, offering flexible timings, a safe and comfortable learning environment, and patient, supportive instruction. Proudly serving learners from 2 No. H Block, Lakhani to Kalyan Chowk.",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/* Fires once when the element scrolls into view */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* variants: blur | flip | pop | up | left | right */
const Reveal = ({ children, variant = "up", delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rv rv-${variant} ${inView ? "rv-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

/* Counts up to a number when scrolled into view */
const CountUp = ({ end, decimals = 0, suffix = "", duration = 1800 }) => {
  const [ref, inView] = useInView(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(end * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const shown =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref}>
      {shown}
      {suffix && <span className="text-orange-400">{suffix}</span>}
    </span>
  );
};

const CallButton = ({ className = "" }) => (
  <a
    href="tel:+919211522526"
    className={`btn-fill call-pulse flex items-center justify-center gap-2 p-3 text-lg sm:text-xl font-bold text-white bg-[#142B4A] rounded-2xl shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[#24446e] cursor-pointer ${className}`}
  >
    <IoMdCall className="size-6" /> Call Now: 9211522526
  </a>
);

const WhatsAppButton = ({ className = "" }) => (
  <a
    href="https://wa.me/919211522526"
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-fill flex items-center justify-center gap-2 p-3 text-lg sm:text-xl font-bold text-white bg-green-500 rounded-2xl shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-green-300 cursor-pointer sm:w-60 ${className}`}
  >
    <IoLogoWhatsapp className="size-7" /> WhatsApp
  </a>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <style>{`
        /* ---------- keyframes ---------- */
        @keyframes trackIn {
          from { opacity: 0; letter-spacing: .12em; filter: blur(6px); }
          to   { opacity: 1; letter-spacing: normal; filter: blur(0); }
        }
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgeSheen {
          0%   { transform: translateX(-130%) skewX(-20deg); }
          55%, 100% { transform: translateX(300%) skewX(-20deg); }
        }
        @keyframes checkSpin {
          from { transform: rotate(-200deg) scale(0); }
          to   { transform: rotate(0) scale(1); }
        }
        @keyframes bokeh {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(24px, -30px) scale(1.08); }
          66%      { transform: translate(-18px, 14px) scale(.95); }
        }
        @keyframes roadMove {
          from { background-position-x: 0; }
          to   { background-position-x: -96px; }
        }
        @keyframes carDrive {
          from { transform: translateX(-120px); }
          to   { transform: translateX(100vw); }
        }
        @keyframes carBob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-1.5px); }
        }
        @keyframes iconPop {
          0%   { transform: scale(.3) rotate(-25deg); opacity: 0; }
          65%  { transform: scale(1.18) rotate(6deg); opacity: 1; }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        @keyframes bannerFlow {
          from { background-position: 0% 50%; }
          to   { background-position: 100% 50%; }
        }
        @keyframes navyPulse {
          0%   { box-shadow: 0 0 0 0 rgba(20,43,74,.5); }
          70%  { box-shadow: 0 0 0 14px rgba(20,43,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(20,43,74,0); }
        }
        @keyframes dividerGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ---------- hero entrance ---------- */
        .h-badge   { animation: fadeRise .8s .05s cubic-bezier(.22,.61,.36,1) both; position: relative; overflow: hidden; }
        .h-badge::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.55) 50%, transparent 65%);
          transform: translateX(-130%) skewX(-20deg);
          animation: badgeSheen 4.5s 1.4s ease-in-out infinite;
        }
        .h-check   { animation: checkSpin .9s .5s cubic-bezier(.34,1.56,.64,1) both; }
        .h-title   { animation: trackIn 1.2s .2s cubic-bezier(.22,.61,.36,1) both; }
        .h-text    { animation: fadeRise .9s .55s cubic-bezier(.22,.61,.36,1) both; }
        .h-actions { animation: fadeRise .9s .8s cubic-bezier(.22,.61,.36,1) both; }

        /* ---------- hero atmosphere ---------- */
        .bokeh   { position: absolute; border-radius: 9999px; filter: blur(40px); pointer-events: none;
                   animation: bokeh 16s ease-in-out infinite; }
        .road    { height: 3px; background-image: repeating-linear-gradient(90deg,
                     rgba(245,247,250,.85) 0 48px, transparent 48px 96px);
                   background-size: 96px 3px; animation: roadMove 2.2s linear infinite; }
        .car-lane { animation: carDrive 22s linear infinite; }
        .car-body { animation: carBob .5s ease-in-out infinite; }

        /* ---------- icons ---------- */
        .rv-in .icon-pop { animation: iconPop .8s .25s cubic-bezier(.34,1.56,.64,1) both; }
        .icon-pop { opacity: 0; }
        .card-hover:hover .icon-spin { transform: rotate(360deg) scale(1.1); }
        .icon-spin { transition: transform .8s cubic-bezier(.22,.61,.36,1); }

        /* ---------- banners / buttons ---------- */
        .banner-flow {
          background: linear-gradient(100deg, #f6ca45, #f6e3b1, #f6ca45, #f6e3b1);
          background-size: 300% 100%;
          animation: bannerFlow 14s ease-in-out infinite alternate;
        }
        .call-pulse { animation: navyPulse 2.8s ease-out infinite; }
        .btn-fill { position: relative; overflow: hidden; z-index: 0; }
        .btn-fill::before {
          content: ""; position: absolute; inset: 0; z-index: -1;
          background: rgba(255,255,255,.18);
          transform: translateX(-101%);
          transition: transform .45s cubic-bezier(.22,.61,.36,1);
        }
        .btn-fill:hover::before { transform: translateX(0); }

        .divider-grow { transform-origin: center; }
        .rv-in .divider-grow, .divider-grow.rv-in { animation: dividerGrow 1.2s cubic-bezier(.22,.61,.36,1) both; }

        /* ---------- scroll reveals ---------- */
        .rv { opacity: 0;
              transition: opacity .9s cubic-bezier(.22,.61,.36,1),
                          transform .9s cubic-bezier(.22,.61,.36,1),
                          filter .9s cubic-bezier(.22,.61,.36,1); }
        .rv-up    { transform: translateY(30px); }
        .rv-blur  { filter: blur(8px); transform: translateY(10px); }
        .rv-pop   { transform: scale(.9) translateY(14px); }
        .rv-flip  { transform: perspective(900px) rotateX(18deg) translateY(28px); transform-origin: 50% 0; }
        .rv-left  { transform: translateX(-48px); }
        .rv-right { transform: translateX(48px); }
        .rv-in    { opacity: 1; filter: blur(0); transform: none; }

        /* ---------- reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .h-badge, .h-badge::after, .h-check, .h-title, .h-text, .h-actions,
          .bokeh, .road, .car-lane, .car-body, .banner-flow, .call-pulse,
          .rv-in .icon-pop, .divider-grow.rv-in { animation: none !important; }
          .icon-pop { opacity: 1; }
          .car-lane { display: none; }
          .rv { opacity: 1; transform: none; filter: none; transition: none; }
          .icon-spin, .btn-fill::before { transition: none; }
        }
      `}</style>

      {/* ============================ HERO ============================ */}
      <section className="relative bg-[#e3c468] text-[#F5F7FA] px-5 sm:px-10 pt-10 sm:pt-14 pb-20">
        {/* drifting soft light */}
        <span className="bokeh -top-10 -left-10 h-56 w-56 bg-[#f5dc9a]/70" />
        <span
          className="bokeh top-1/3 -right-16 h-64 w-64 bg-[#fff3c4]/50"
          style={{ animationDelay: "-6s" }}
        />

        <div className="relative mx-auto max-w-4xl text-center md:text-left">
          <p className="h-badge inline-flex items-center gap-1.5 border-2 rounded-2xl px-3 py-1 text-sm sm:text-base roboto-slab-uniquifier bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
            <MdOutlineVerified className="h-check size-5 shrink-0" />
            Govt. Approved Driving School
          </p>

          <h1 className="h-title mt-5 text-2xl sm:text-3xl lg:text-4xl leading-snug roboto-slab-uniquifier">
            Learn Safe Driving with SHREE LAXMI MOTOR CAR DRIVING SCHOOL
          </h1>

          <p className="h-text mt-5 text-base sm:text-lg lg:text-xl leading-relaxed source-sans-3-uniquifier">
            Looking for a driving school in Faridabad? Whether you want car
            driving classes near Main Market Rd, Pocket B Sainik Colony, Sector
            49 Faridabad, Haryana 121001, or a driving school near Sainik
            Colony — we've been the go-to choice for 5000+ students since 2004.
            Our instructors get you confident behind the wheel and ready for
            your RTO license on Faridabad's real roads.
          </p>

          <div className="h-actions mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center md:justify-start">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>

        <div className="relative mx-auto mt-8 flex justify-center">
          <ShopStatus />
        </div>

        {/* the road: dashed centre line scrolls, a small car drives past */}
        <div className="relative mt-10 h-9 overflow-hidden" aria-hidden="true">
          <div className="car-lane absolute bottom-[5px] left-0 text-[#142B4A]">
            <svg
              className="car-body"
              width="56"
              height="26"
              viewBox="0 0 64 30"
              fill="none"
            >
              <path
                d="M4 22v-6c0-1.600 1-2.800 2.500-3.200l10-2.600 6.500-5.800c.9-.8 2-1.200 3.100-1.200h12c1.300 0 2.500.6 3.300 1.600L47 12l10 2c2.200.5 3.500 2.200 3.500 4.300V22H4z"
                fill="currentColor"
              />
              <circle cx="17" cy="23" r="5" fill="#F5F7FA" stroke="currentColor" strokeWidth="2.500" />
              <circle cx="48" cy="23" r="5" fill="#F5F7FA" stroke="currentColor" strokeWidth="2.500" />
            </svg>
          </div>
          <div className="road absolute inset-x-0 bottom-0" />
        </div>
      </section>

      {/* ===================== FEATURE CARDS (overlap hero) ===================== */}
      <section className="relative z-10 -mt-14 px-5 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} variant="pop" delay={i * 140} className="h-full">
              <div className="card-hover flex h-full flex-col items-center rounded-2xl border border-[#FFC928] bg-gradient-to-r from-[#e3b632] to-[#f5dc9a] px-4 py-6 text-center text-[#F5F7FA] shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="icon-pop mb-3 text-orange-400">
                  <Icon className="icon-spin size-10" />
                </span>
                <p className="roboto-slab-uniquifier text-2xl sm:text-3xl mb-3">
                  {title}
                </p>
                <p className="source-sans-3-uniquifier text-base px-2">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="mt-14 sm:mt-16 mb-10 px-5">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map(({ end, decimals, suffix, label }, i) => (
            <Reveal key={label} variant="blur" delay={i * 120}>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl roboto-slab-uniquifier text-[#FFC928]">
                  <CountUp end={end} decimals={decimals} suffix={suffix} />
                </p>
                <p className="mt-1 text-base sm:text-lg source-sans-3-uniquifier text-gray-500">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal variant="up" className="divider-grow mx-auto w-[92%] mb-9 border-b border-[#FFC928]">
        <span className="block h-0" />
      </Reveal>

      {/* ============================ COURSES ============================ */}
      <section>
        <div className="flex flex-col gap-3 items-center text-center px-5">
          <Reveal variant="pop">
            <p className="px-5 py-0.5 roboto-slab-uniquifier border-2 text-base sm:text-lg rounded-2xl text-[#F5F7FA] border-[#FFC928] bg-gradient-to-r from-[#e3b632] to-[#f5dc9a]">
              What We Teach
            </p>
          </Reveal>
          <Reveal variant="blur" delay={100}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold roboto-slab-uniquifier">
              Choose The Course That You Want
            </h2>
          </Reveal>
          <Reveal variant="blur" delay={200}>
            <p className="text-base sm:text-lg text-gray-500 source-sans-3-uniquifier max-w-2xl">
              Tap any course to enquire on WhatsApp — or call us directly for
              instant answers.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 mb-10 grid max-w-6xl grid-cols-1 gap-6 px-5 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ icons, title, text }, i) => (
            <Reveal key={title} variant="flip" delay={i * 150} className="h-full">
              <a href="tel:+919211522526" className="group block h-full">
                <div className="card-hover flex h-full min-h-64 flex-col rounded-2xl border-2 border-[#FFC928] bg-gradient-to-r from-[#ecc759] to-[#f5dc9a] p-4 shadow-md transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  <span className="icon-pop mt-1 flex gap-2 text-orange-500">
                    {icons.map((Ic, k) => (
                      <Ic key={k} className="icon-spin size-7" />
                    ))}
                  </span>
                  <p className="mt-2 mb-2 roboto-slab-uniquifier text-xl sm:text-2xl text-[#F5F7FA]">
                    {title}
                  </p>
                  <p className="source-sans-3-uniquifier text-[#F5F7FA] mb-4">
                    {text}
                  </p>
                  <div className="mt-auto">
                    <div className="w-full border-b border-[#F5F7FA]" />
                    <div className="flex items-center justify-between pt-3 text-[#F5F7FA]">
                      <span>Call For Pricing</span>
                      <span className="text-3xl leading-none transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* help banner */}
        <div className="px-5 sm:px-10 lg:px-15">
          <Reveal variant="up">
            <div className="banner-flow mx-auto mb-10 flex max-w-6xl flex-col gap-5 rounded-2xl border border-[#FFC928] px-5 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg sm:text-xl roboto-slab-uniquifier">
                  Not sure which one is right for you?
                </p>
                <p className="text-gray-700 source-sans-3-uniquifier">
                  Call us — we'll help you pick in under 2 minutes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
                <CallButton />
                <WhatsAppButton />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="blur">
          <StatsStripHom />
        </Reveal>

        {/* final call to action */}
        <div className="banner-flow w-full border border-[#FFC928] px-5 sm:px-10 lg:px-20 py-8">
          <Reveal variant="up">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl sm:text-3xl roboto-slab-uniquifier">
                  Ready to start your driving journey?
                </p>
                <p className="text-gray-700 source-sans-3-uniquifier text-lg sm:text-xl">
                  Call us — we'll help you in Learning Car driving.
                </p>
              </div>
              <CallButton />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
