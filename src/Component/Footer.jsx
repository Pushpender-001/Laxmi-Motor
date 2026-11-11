import React, { useEffect, useRef, useState } from "react";
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

const socials = [
  {
    href: "tel:+919211522526",
    label: "Call us",
    icon: CiMobile3,
    fill: "#FFC928",
  },
  {
    href: "https://wa.me/919211522526",
    label: "Chat on WhatsApp",
    icon: FaWhatsapp,
    fill: "#22c55e",
    external: true,
  },
  {
    href: "mailto:bs3665201@gmail.com",
    label: "Email us",
    icon: MdOutlineMail,
    fill: "#FFC928",
  },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

/* Fires once when the footer scrolls into view */
const useInView = (threshold = 0.1) => {
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

const Footer = () => {
  const [ref, inView] = useInView();

  return (
    <footer
      ref={ref}
      className={`relative w-full overflow-hidden bg-[#142B4A] text-[#FFFFFF] ${
        inView ? "f-in" : ""
      }`}
    >
      <style>{`
        @keyframes fRun {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes fRise {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fDraw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fGlow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50%      { opacity: .7;  transform: scale(1.15); }
        }
        @keyframes fOm {
          0%, 100% { text-shadow: 0 0 0 rgba(255,201,40,0); }
          50%      { text-shadow: 0 0 10px rgba(255,201,40,.9); }
        }

        /* a point of light runs along the top edge */
        .f-topline { position: absolute; top: 0; left: 0; right: 0; height: 2px;
                     background: rgba(255,201,40,.18); overflow: hidden; }
        .f-topline::after { content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 25%;
                            background: linear-gradient(90deg, transparent, #FFC928, transparent);
                            animation: fRun 6s linear infinite; }

        /* columns rise one after another */
        .f-col { opacity: 0; }
        .f-in .f-col { animation: fRise .9s cubic-bezier(.22,.61,.36,1) both; }
        .f-in .f-col-1 { animation-delay: .05s; }
        .f-in .f-col-2 { animation-delay: .25s; }
        .f-in .f-col-3 { animation-delay: .45s; }

        /* logo with a soft glow behind it */
        .f-logo-wrap { position: relative; flex-shrink: 0; }
        .f-logo-wrap::before { content: ""; position: absolute; inset: -6px; border-radius: 9999px;
                               background: radial-gradient(circle, rgba(255,201,40,.55), transparent 70%);
                               filter: blur(8px); animation: fGlow 4.5s ease-in-out infinite; }
        .f-logo { position: relative; transition: transform .6s cubic-bezier(.34,1.56,.64,1); }
        .f-logo-wrap:hover .f-logo { transform: rotate(-6deg) scale(1.08); }

        /* social buttons: colour fills up from the bottom */
        .f-soc { position: relative; overflow: hidden; z-index: 0;
                 transition: transform .35s cubic-bezier(.22,.61,.36,1), color .35s ease, border-color .35s ease; }
        .f-soc::before { content: ""; position: absolute; inset: 0; z-index: -1; background: var(--fill);
                         transform: translateY(101%); transition: transform .4s cubic-bezier(.22,.61,.36,1); }
        .f-soc:hover { transform: translateY(-4px); color: #142B4A; border-color: var(--fill); }
        .f-soc:hover::before { transform: translateY(0); }

        /* quick links: a gold underline draws in, the link nudges right */
        .f-link { position: relative; display: inline-block; padding-bottom: 2px;
                  transition: color .3s ease, transform .3s ease; }
        .f-link::after { content: ""; position: absolute; left: 0; bottom: 0; height: 2px; width: 100%;
                         background: #fde68a; transform: scaleX(0); transform-origin: left;
                         transition: transform .4s cubic-bezier(.22,.61,.36,1); }
        .f-link:hover { color: #fde68a; transform: translateX(6px); }
        .f-link:hover::after { transform: scaleX(1); }

        /* directions arrow slides */
        .f-dir .f-arrow { display: inline-block; transition: transform .3s ease; }
        .f-dir:hover .f-arrow { transform: translateX(6px); }

        /* divider and copyright */
        .f-divider { transform: scaleX(0); transform-origin: center; }
        .f-in .f-divider { animation: fDraw 1.3s .7s cubic-bezier(.65,0,.35,1) both; }
        .f-copy { opacity: 0; }
        .f-in .f-copy { animation: fRise .9s 1.2s cubic-bezier(.22,.61,.36,1) both; }
        .f-om { display: inline-block; animation: fOm 3.5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .f-topline::after, .f-in .f-col, .f-logo-wrap::before, .f-in .f-divider,
          .f-in .f-copy, .f-om { animation: none !important; }
          .f-col, .f-copy { opacity: 1; }
          .f-divider { transform: none; }
          .f-soc, .f-soc::before, .f-link, .f-link::after, .f-logo,
          .f-dir .f-arrow { transition: none; }
          .f-logo-wrap:hover .f-logo, .f-link:hover { transform: none; }
        }
      `}</style>

      <div className="f-topline" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-4 pt-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] lg:gap-8 lg:px-10">
        {/* Brand */}
        <div className="f-col f-col-1 flex flex-col sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="f-logo-wrap">
              <img src={pic} alt="Shree Laxmi Motor Car Driving School logo" className="f-logo h-16 w-16 sm:h-20 sm:w-20" />
            </div>
            <p className="roboto-slab-uniquifier text-lg font-bold sm:text-xl">
              SHREE LAXMI MOTOR CAR DRIVING SCHOOL
            </p>
          </div>

          <p className="source-sans-3-uniquifier mt-3 max-w-xl text-base text-[#FFFFFF] sm:text-lg">
            A government-approved driving school committed to creating safe,
            confident and responsible drivers. Certified instructors,
            dual-control cars and complete licence support.
          </p>

          <div className="mt-4 flex gap-3">
            {socials.map(({ href, label, icon: Icon, fill, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                style={{ "--fill": fill }}
                className="f-soc flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="f-col f-col-2">
          <p className="roboto-slab-uniquifier text-xl font-bold lg:text-center">
            Quick links
          </p>
          <div className="source-sans-3-uniquifier mt-3 flex flex-col gap-2 text-lg font-bold lg:items-center">
            <div className="flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <Link key={to} to={to} className="f-link w-fit">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="f-col f-col-3">
          <p className="roboto-slab-uniquifier text-xl font-bold">Address</p>
          <div className="source-sans-3-uniquifier mt-3 flex flex-col gap-1">
            <p>Main Market Rd, Pocket B,</p>
            <p>Sainik Colony, Sector 49,</p>
            <p>Faridabad, Haryana 121001</p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="f-dir mt-4 inline-block w-fit rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-800"
            >
              Get Directions <span className="f-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="f-divider mx-auto mt-6 w-[85%] border-b border-blue-300" />
      <p className="f-copy source-sans-3-uniquifier px-4 py-3 text-center text-xs sm:text-sm">
        ©2026 SHREE LAXMI MOTOR CAR DRIVING SCHOOL. ALL RIGHTS RESERVED{" "}
        <span className="f-om">ॐ</span>
      </p>
    </footer>
  );
};

export default Footer;
