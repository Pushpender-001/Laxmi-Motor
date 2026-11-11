import React, { useEffect, useRef, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import Location from "../Pages/Location";

const ADDRESS =
  "Shree Laxmi Motor Car Driving School, Main Market Rd, Pocket B, Sainik Colony, Sector 49, Faridabad, Haryana 121001";

const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`;

/* Reveals children once when scrolled into view.
   variants: blur (soft focus-in), left, right, zoom, up */
const Reveal = ({ children, variant = "blur", delay = 0, className = "" }) => {
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rv rv-${variant} ${shown ? "rv-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <style>{`
        /* ---------- keyframes ---------- */
        @keyframes headerFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes badgeRing {
          0%   { box-shadow: 0 0 0 0 rgba(245,247,250,.55); }
          70%  { box-shadow: 0 0 0 14px rgba(245,247,250,0); }
          100% { box-shadow: 0 0 0 0 rgba(245,247,250,0); }
        }
        @keyframes blurIn {
          from { opacity: 0; filter: blur(10px); transform: translateY(10px); }
          to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
        }
        @keyframes lineWipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          40%      { transform: translateY(-7px); }
          60%      { transform: translateY(0); }
          75%      { transform: translateY(-3px); }
        }
        @keyframes clockSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ringPhone {
          0%, 88%, 100% { transform: rotate(0); }
          90% { transform: rotate(-14deg); }
          92% { transform: rotate(12deg); }
          94% { transform: rotate(-10deg); }
          96% { transform: rotate(8deg); }
          98% { transform: rotate(-4deg); }
        }
        @keyframes ripple {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,.5); }
          70%  { box-shadow: 0 0 0 14px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        @keyframes goldShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes dividerGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ---------- header ---------- */
        .header-flow {
          background: linear-gradient(100deg, #e8c252, #f3d57c, #e8c252, #f3d57c, #e8c252);
          background-size: 200% 100%;
          animation: headerFlow 14s linear infinite;
        }
        .badge-ring   { animation: badgeRing 2.8s ease-out infinite; }
        .blur-in      { animation: blurIn 1s cubic-bezier(.22,.61,.36,1) both; }
        .blur-in-2    { animation: blurIn 1s .2s cubic-bezier(.22,.61,.36,1) both; }
        .line-wipe    { animation: lineWipe 1.1s .5s cubic-bezier(.65,0,.35,1) both; }

        /* ---------- icons ---------- */
        .pin-bounce   { display: inline-block; animation: pinBounce 2.4s ease-in-out infinite; }
        .clock-face   { position: relative; display: inline-block; width: 1.25rem; height: 1.25rem;
                        border: 2px solid #eaaf00; border-radius: 9999px; vertical-align: -3px; }
        .clock-hand   { position: absolute; left: 50%; top: 50%; width: 2px; height: 7px;
                        margin-left: -1px; margin-top: -7px; background: #eaaf00; border-radius: 2px;
                        transform-origin: 50% 100%; animation: clockSweep 6s linear infinite; }
        .phone-ring   { display: inline-block; transform-origin: 50% 60%; animation: ringPhone 4s ease-in-out infinite; }
        .wa-ripple    { animation: ripple 2.6s ease-out infinite; }

        /* ---------- hours text shimmer ---------- */
        .gold-shimmer {
          background: linear-gradient(100deg, #ffffff 30%, #fff3c4 45%, #ffffff 60%);
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: goldShimmer 4.5s linear infinite;
        }

        /* ---------- divider ---------- */
        .divider-grow { transform-origin: center; animation: dividerGrow 1.2s cubic-bezier(.22,.61,.36,1) both; }

        /* ---------- scroll reveals ---------- */
        .rv { opacity: 0; transition: opacity .9s cubic-bezier(.22,.61,.36,1),
                                      transform .9s cubic-bezier(.22,.61,.36,1),
                                      filter .9s cubic-bezier(.22,.61,.36,1); }
        .rv-blur  { filter: blur(8px); transform: translateY(10px); }
        .rv-left  { transform: translateX(-48px); }
        .rv-right { transform: translateX(48px); }
        .rv-zoom  { transform: scale(.92); }
        .rv-up    { transform: translateY(28px); }
        .rv-in    { opacity: 1; filter: blur(0); transform: none; }

        /* ---------- hover polish ---------- */
        .info-card { transition: transform .4s cubic-bezier(.22,.61,.36,1), box-shadow .4s ease; }
        .info-card:hover { transform: translateY(-6px); box-shadow: 0 18px 35px -12px rgba(234,175,0,.55); }

        .slide-btn { position: relative; overflow: hidden; z-index: 0; }
        .slide-btn::before {
          content: ""; position: absolute; inset: 0; z-index: -1;
          background: rgba(255,255,255,.18);
          transform: translateX(-101%); transition: transform .45s cubic-bezier(.22,.61,.36,1);
        }
        .slide-btn:hover::before { transform: translateX(0); }

        /* ---------- reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .header-flow, .badge-ring, .blur-in, .blur-in-2, .line-wipe, .pin-bounce,
          .clock-hand, .phone-ring, .wa-ripple, .gold-shimmer, .divider-grow { animation: none !important; }
          .gold-shimmer { -webkit-text-fill-color: #fff; color: #fff; background: none; }
          .rv { opacity: 1; transform: none; filter: none; transition: none; }
          .info-card, .slide-btn::before { transition: none; }
        }
      `}</style>

      {/* Header */}
      <div className="header-flow w-full text-center px-4 py-10 flex flex-col items-center gap-3">
        <p className="badge-ring blur-in border px-4 py-1 rounded-xl text-sm sm:text-base font-bold roboto-slab-uniquifier text-[#F5F7FA]">
          Get In Contact
        </p>
        <p className="blur-in-2 font-bold roboto-slab-uniquifier text-[#F5F7FA] text-2xl sm:text-3xl max-w-3xl">
          Get in contact with us — we'll take care of the rest.
        </p>
        <div className="line-wipe h-[3px] w-24 rounded-full bg-[#F5F7FA]/80" />
      </div>

      {/* Intro text */}
      <div className="flex flex-col items-center gap-2 mt-10 px-5 text-center text-base sm:text-lg font-bold source-sans-3-uniquifier">
        <Reveal variant="blur">
          <p>
            Call or WhatsApp us for driving lesson timings, course details, and
            fees.
          </p>
        </Reveal>
        <Reveal variant="blur" delay={150}>
          <p>
            We're here to answer your questions and guide you every step of the
            way.
          </p>
        </Reveal>
        <Reveal variant="blur" delay={300}>
          <p>
            Get in touch today and start your driving journey with confidence!
          </p>
        </Reveal>
      </div>

      {/* Call / WhatsApp buttons: slide in from opposite sides */}
      <div className="mt-10 px-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center pb-12 sm:pb-14">
        <Reveal variant="left">
          <a
            href="tel:+919211522526"
            className="slide-btn flex items-center justify-center gap-2 p-3 text-lg sm:text-xl font-bold text-white bg-[#142B4A] rounded-2xl shadow-2xl shadow-[#24446e] transition duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <IoMdCall className="phone-ring size-6" /> Call Now: 9211522526
          </a>
        </Reveal>
        <Reveal variant="right" className="sm:w-60">
          <a
            href="https://wa.me/919211522526"
            target="_blank"
            rel="noopener noreferrer"
            className="slide-btn wa-ripple flex items-center justify-center gap-2 p-3 text-lg sm:text-xl font-bold text-white bg-green-500 rounded-2xl shadow-2xl shadow-green-300 transition duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <IoLogoWhatsapp className="size-7" /> WhatsApp
          </a>
        </Reveal>
      </div>

      {/* Divider grows from the centre */}
      <div className="divider-grow mx-auto w-[80%] sm:w-[55%] border-b border-[#ebcd73]" />

      {/* Info cards */}
      <div className="w-full px-4 py-10">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Card 1: Location (slides in from left) */}
          <Reveal variant="left" className="h-full">
            <div className="info-card flex h-full flex-col rounded-3xl border border-[#e8c252] bg-gradient-to-r from-[#fcdb78] to-[#f4e1ab] p-6 sm:p-7">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest roboto-slab-uniquifier text-[#eaaf00]">
                <span className="pin-bounce" aria-hidden="true">📍</span>
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
                className="slide-btn mt-4 inline-flex w-fit items-center gap-2 rounded-xl border border-green-100 bg-[#e4c35e] px-4 py-3 font-semibold text-gray-900 source-sans-3-uniquifier transition duration-300 hover:-translate-y-1 hover:bg-[#eaaf00]"
              >
                <span aria-hidden="true">📍</span> Get Directions
              </a>
            </div>
          </Reveal>

          {/* Card 2: Opening hours (slides in from right) */}
          <Reveal variant="right" delay={150} className="h-full">
            <div className="info-card flex h-full flex-col rounded-3xl border border-[#e8c252] bg-gradient-to-r from-[#fcdb78] to-[#f4e1ab] p-6 sm:p-7">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest roboto-slab-uniquifier text-[#eaaf00]">
                <span className="clock-face" aria-hidden="true">
                  <span className="clock-hand" />
                </span>
                Opening Hours
              </h3>

              <p className="gold-shimmer text-2xl font-extrabold leading-8 source-sans-3-uniquifier">
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
          </Reveal>
        </div>
      </div>

      {/* Map / Location section: gentle zoom-in */}
      <Reveal variant="zoom">
        <Location />
      </Reveal>
    </div>
  );
};

export default Contact;
