import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import pic from "../assets/pic.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [hideBrand, setHideBrand] = useState(false);
  const barRef = useRef(null);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;

      // scroll progress bar (transform only, so it stays cheap)
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }

      // brand row tucks away when scrolling down, returns when scrolling up
      if (y < 60) setHideBrand(false);
      else if (y > lastY.current + 6) setHideBrand(true);
      else if (y < lastY.current - 6) setHideBrand(false);

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    `nav-link relative px-1 py-1 sm:px-2 ${isActive ? "is-active" : ""}`;

  return (
    <header className="nav-drop sticky top-0 z-50 w-full bg-[#142B4A] shadow-lg shadow-black/20">
      <style>{`
        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoIn {
          from { opacity: 0; transform: rotate(-180deg) scale(.4); }
          to   { opacity: 1; transform: rotate(0) scale(1); }
        }
        @keyframes brandGold {
          0%, 55% { background-position: 150% 0; }
          100%    { background-position: -50% 0; }
        }
        @keyframes linkIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nav-drop { animation: navDrop .8s cubic-bezier(.22,.61,.36,1) both; }

        /* brand row collapses smoothly: 1fr -> 0fr */
        .brand-collapse { display: grid; grid-template-rows: 1fr;
                          transition: grid-template-rows .45s cubic-bezier(.22,.61,.36,1),
                                      opacity .35s ease; }
        .brand-collapse.is-hidden { grid-template-rows: 0fr; opacity: 0; }
        .brand-inner { min-height: 0; overflow: hidden; }

        /* logos spin in once, wiggle on hover */
        .nav-logo { animation: logoIn 1s .3s cubic-bezier(.34,1.56,.64,1) both;
                    transition: transform .5s cubic-bezier(.34,1.56,.64,1); }
        .nav-logo:hover { transform: rotate(12deg) scale(1.1); }

        /* a band of gold light passes through the school name now and then */
        .brand-text {
          background: linear-gradient(100deg, #ffffff 40%, #ffd966 50%, #ffffff 60%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: brandGold 9s 1.5s ease-in-out infinite;
        }

        /* links drop in one by one; underline is drawn, not a border */
        .nav-link { animation: linkIn .7s cubic-bezier(.22,.61,.36,1) both; }
        .nav-link:nth-child(1) { animation-delay: .5s; }
        .nav-link:nth-child(2) { animation-delay: .65s; }
        .nav-link:nth-child(3) { animation-delay: .8s; }
        .nav-link::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          border-radius: 2px; background: #fff;
          transform: scaleX(0); transform-origin: left; opacity: .6;
          transition: transform .4s cubic-bezier(.22,.61,.36,1), opacity .3s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.is-active::after { transform: scaleX(1); opacity: 1; background: #FFC928; }
        .nav-link.is-active { color: #FFC928; }

        /* reading progress under the bar */
        .nav-progress { height: 3px; transform-origin: left; transform: scaleX(0);
                        background: linear-gradient(90deg, #FFC928, #fde68a); }

        @media (prefers-reduced-motion: reduce) {
          .nav-drop, .nav-logo, .brand-text, .nav-link { animation: none !important; }
          .brand-text { -webkit-text-fill-color: #fff; color: #fff; background: none; }
          .brand-collapse, .nav-logo, .nav-link::after { transition: none; }
          .nav-logo:hover { transform: none; }
        }
      `}</style>

      {/* Brand row */}
      <div className={`brand-collapse ${hideBrand ? "is-hidden" : ""}`}>
        <div className="brand-inner">
          <div className="flex items-center justify-center gap-2 px-3 py-2 sm:gap-4 sm:py-3">
            <img
              src={pic}
              alt=""
              className="nav-logo h-9 w-9 shrink-0 object-contain sm:h-12 sm:w-12"
            />
            <p className="brand-text text-center roboto-slab-uniquifier text-sm font-bold leading-tight sm:text-2xl lg:text-4xl">
              SHREE LAXMI MOTOR CAR DRIVING SCHOOL
            </p>
            <img
              src={pic}
              alt=""
              className="nav-logo h-9 w-9 shrink-0 object-contain sm:h-12 sm:w-12"
            />
          </div>
        </div>
      </div>

      {/* Links */}
      <nav
        aria-label="Main"
        className="flex justify-center gap-5 px-3 pb-2 pt-1 text-lg font-bold text-[#FFFFFF] roboto-slab-uniquifier sm:gap-10 sm:text-xl lg:text-2xl"
      >
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={linkClass}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div ref={barRef} className="nav-progress" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
