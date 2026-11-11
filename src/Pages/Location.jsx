import React, { useEffect, useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";

const ADDRESS =
  "Shree Laxmi Motor Car Driving School, Main Market Rd, Pocket B, Sainik Colony, Sector 49, Faridabad, Haryana 121001";

const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.617933179715!2d77.27186874858195!3d28.400605613564863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cde7d6becfb9d%3A0xd00b1220d118480c!2sMain%2C%20Market%20Rd%2C%20Pocket%20B%2C%20Sainik%20Colony%2C%20Sector%2049%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1792948089266!5m2!1sen!2sin";

/* Fires once when the element scrolls into view */
const useInView = (threshold = 0.2) => {
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
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* Shared styles, defined once */
const Styles = () => (
  <style>{`
    @keyframes pinDrop {
      0%   { transform: translateY(-60px) scale(.8); opacity: 0; }
      55%  { transform: translateY(0)     scale(1.05); opacity: 1; }
      70%  { transform: translateY(-14px) scale(1); }
      85%  { transform: translateY(0); }
      92%  { transform: translateY(-5px); }
      100% { transform: translateY(0); }
    }
    @keyframes ringOut {
      0%   { transform: translate(-50%, 0) scale(.2); opacity: .7; }
      100% { transform: translate(-50%, 0) scale(1.8); opacity: 0; }
    }
    @keyframes inkLine {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    @keyframes mapReveal {
      from { clip-path: circle(0% at 50% 40%); }
      to   { clip-path: circle(150% at 50% 40%); }
    }
    @keyframes skeleton {
      0%   { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes borderGlow {
      0%, 100% { box-shadow: 0 10px 30px -12px rgba(232,194,82,.35); }
      50%      { box-shadow: 0 16px 44px -10px rgba(232,194,82,.7); }
    }
    @keyframes btnHalo {
      0%   { box-shadow: 0 0 0 0 rgba(232,194,82,.6); }
      70%  { box-shadow: 0 0 0 14px rgba(232,194,82,0); }
      100% { box-shadow: 0 0 0 0 rgba(232,194,82,0); }
    }
    @keyframes btnPin {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-3px); }
    }
    @keyframes fadeRise {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* pin + ripples */
    .loc-pin    { display: none; }
    .in .loc-pin { display: inline-block; animation: pinDrop 1.3s cubic-bezier(.22,.61,.36,1) both; }
    .loc-ring   { position: absolute; left: 50%; bottom: 2px; width: 56px; height: 20px;
                  border: 2px solid #e8c252; border-radius: 50%; opacity: 0; }
    .in .loc-ring   { animation: ringOut 2.8s .9s ease-out infinite; }
    .in .loc-ring-2 { animation-delay: 1.7s; }

    /* heading line draws itself */
    .loc-line { transform-origin: center; transform: scaleX(0); }
    .in .loc-line { animation: inkLine 1s .5s cubic-bezier(.65,0,.35,1) both; }

    /* text rise, staggered */
    .loc-t1, .loc-t2, .loc-t3 { opacity: 0; }
    .in .loc-t1 { animation: fadeRise .8s .25s cubic-bezier(.22,.61,.36,1) both; }
    .in .loc-t2 { animation: fadeRise .8s .45s cubic-bezier(.22,.61,.36,1) both; }
    .in .loc-t3 { animation: fadeRise .8s .65s cubic-bezier(.22,.61,.36,1) both; }

    /* map: circular reveal, skeleton while loading, soft glow after */
    .map-frame { clip-path: circle(0% at 50% 40%); }
    .in .map-frame { animation: mapReveal 1.4s .5s cubic-bezier(.65,0,.35,1) both,
                                borderGlow 5s 2.2s ease-in-out infinite; }
    .map-skeleton {
      background: linear-gradient(100deg, #f4e1ab 30%, #fff6d8 50%, #f4e1ab 70%);
      background-size: 200% 100%;
      animation: skeleton 1.8s linear infinite;
    }
    .map-iframe { opacity: 0; transition: opacity .8s ease; }
    .map-iframe.loaded { opacity: 1; }

    /* directions button */
    .dir-btn { position: relative; overflow: hidden; }
    .in .dir-btn { animation: btnHalo 2.8s 2s ease-out infinite; }
    .dir-btn::after {
      content: ""; position: absolute; inset: 0;
      background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.4) 50%, transparent 65%);
      transform: translateX(-120%) skewX(-20deg);
      pointer-events: none;
    }
    .dir-btn:hover::after { transition: transform .8s ease; transform: translateX(240%) skewX(-20deg); }
    .dir-btn:hover .dir-pin { animation: btnPin .6s ease-in-out infinite; }

    /* compact (footer) */
    .compact-in { opacity: 0; }
    .in .compact-in { animation: fadeRise .8s cubic-bezier(.22,.61,.36,1) both; }

    @media (prefers-reduced-motion: reduce) {
      .in .loc-pin, .in .loc-ring, .in .loc-line, .in .loc-t1, .in .loc-t2,
      .in .loc-t3, .in .map-frame, .in .dir-btn, .dir-btn:hover .dir-pin,
      .map-skeleton, .in .compact-in { animation: none !important; }
      .loc-pin { display: inline-block; }
      .loc-line { transform: none; }
      .loc-t1, .loc-t2, .loc-t3, .compact-in { opacity: 1; }
      .map-frame { clip-path: none; }
      .map-iframe { transition: none; }
      .dir-btn:hover::after { transition: none; }
    }
  `}</style>
);

// <Location />          -> full section (heading + big map), for a page
// <Location compact />  -> small map + directions link, for the footer
const Location = ({ compact = false }) => {
  const [ref, inView] = useInView();
  const [loaded, setLoaded] = useState(false);

  const map = (
    <div className="map-skeleton relative">
      <iframe
        title="Shree Laxmi Motor Car Driving School Location"
        src={MAP_SRC}
        width="100%"
        height={compact ? 160 : undefined}
        className={`map-iframe block w-full ${loaded ? "loaded" : ""} ${
          compact ? "" : "h-72 sm:h-80 md:h-[400px]"
        }`}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      ></iframe>
    </div>
  );

  if (compact) {
    return (
      <div ref={ref} className={`mt-3 px-4 ${inView ? "in" : ""}`}>
        <Styles />
        <div className="compact-in">
          <div className="overflow-hidden rounded-xl shadow-lg">{map}</div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm source-sans-3-uniquifier font-semibold hover:text-amber-200 hover:underline"
          >
            Get Directions →
          </a>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={ref}
      className={`bg-white px-4 py-12 sm:py-16 md:px-12 overflow-x-hidden ${
        inView ? "in" : ""
      }`}
    >
      <Styles />
      <div className="mx-auto max-w-7xl">
        {/* pin drops in, ripples spread from where it lands */}
        <div className="relative mx-auto mb-2 flex h-16 w-24 items-end justify-center">
          <span className="loc-ring" />
          <span className="loc-ring loc-ring-2" />
          <span className="loc-pin text-[#FFC928]" aria-hidden="true">
            <MdLocationOn className="size-12 sm:size-14" />
          </span>
        </div>

        <h2 className="loc-t1 mb-3 text-center text-2xl sm:text-3xl font-bold text-[#FFC928] roboto-slab-uniquifier">
          Visit Our Driving School
        </h2>
        <div className="loc-line mx-auto mb-4 h-[3px] w-20 rounded-full bg-[#FFC928]" />

        <p className="loc-t2 mb-6 sm:mb-8 text-center text-base sm:text-lg text-gray-600 source-sans-3-uniquifier">
          Find our location and plan your visit.
        </p>

        <div className="loc-t3 mt-2 mb-6 text-center">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dir-btn inline-flex items-center justify-center gap-2 rounded-lg bg-[#e9cc74] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e8c252] source-sans-3-uniquifier"
          >
            <MdLocationOn className="dir-pin size-5" aria-hidden="true" />
            Get Directions
          </a>
        </div>

        <div className="map-frame overflow-hidden rounded-2xl border-2 border-[#f4e1ab] shadow-lg">
          {map}
        </div>
      </div>
    </section>
  );
};

export default Location;
