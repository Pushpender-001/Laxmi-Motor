import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2004", label: "Established" },
  { value: "20+", label: "Training Cars" },
  { value: "10+", label: "Certified Instructors" },
  { value: "5k+", label: "Licensed Drivers" },
];

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Fires once when the element scrolls into view */
const useInView = (threshold = 0.3) => {
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

/* Odometer-style value: every digit is a reel that spins to its number.
   Non-digit characters (+, k) simply fade in once the reels settle. */
const Roll = ({ value, play, baseDelay = 0 }) => {
  const chars = value.split("");
  return (
    <span
      className="inline-flex items-baseline leading-none"
      aria-label={value}
      role="text"
    >
      {chars.map((ch, i) => {
        const isDigit = /\d/.test(ch);
        const delay = baseDelay + i * 140;

        if (!isDigit) {
          return (
            <span
              key={i}
              aria-hidden="true"
              className={`stat-sym ${play ? "stat-sym-in" : ""}`}
              style={{ transitionDelay: `${delay + 700}ms` }}
            >
              {ch}
            </span>
          );
        }

        const n = Number(ch);
        // two stacked 0–9 reels, so the spin passes a full set of numbers first
        const target = 10 + n;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="stat-reel inline-block h-[1em] overflow-hidden align-baseline"
          >
            <span
              className="stat-strip block"
              style={{
                transform: play ? `translateY(${-target}em)` : "translateY(0)",
                transitionDelay: `${delay}ms`,
              }}
            >
              {[...DIGITS, ...DIGITS].map((d, k) => (
                <span key={k} className="block h-[1em] leading-none">
                  {d}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
};

const StatsStrip = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="w-full overflow-hidden">
      <style>{`
        @keyframes stSweep {
          0%        { transform: translateX(-120%) skewX(-20deg); }
          45%, 100% { transform: translateX(320%)  skewX(-20deg); }
        }
        @keyframes stRise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* reels */
        .stat-strip {
          transition: transform 1.8s cubic-bezier(.16,.84,.3,1);
          will-change: transform;
          font-variant-numeric: tabular-nums;
        }
        .stat-sym {
          opacity: 0; transform: translateY(8px) scale(.8);
          transition: opacity .6s ease, transform .6s cubic-bezier(.34,1.56,.64,1);
        }
        .stat-sym-in { opacity: 1; transform: none; }

        /* labels rise once the numbers are moving */
        .stat-label { opacity: 0; }
        .stat-go .stat-label { animation: stRise .8s cubic-bezier(.22,.61,.36,1) both; }

        /* thin dividers draw downward between stats (desktop) */
        .stat-div { transform: scaleY(0); transform-origin: top;
                    transition: transform .9s cubic-bezier(.65,0,.35,1); }
        .stat-go .stat-div { transform: scaleY(1); }

        /* light sweeps across the strip now and then */
        .stat-sheen { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .stat-sheen::before {
          content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 22%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,.35), transparent);
          transform: translateX(-120%) skewX(-20deg);
        }
        .stat-go .stat-sheen::before { animation: stSweep 9s 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .stat-strip { transition: none; }
          .stat-sym { opacity: 1; transform: none; transition: none; }
          .stat-label { opacity: 1; animation: none !important; }
          .stat-div { transform: none; transition: none; }
          .stat-go .stat-sheen::before { animation: none; }
        }
      `}</style>

      <div
        className={`relative bg-gradient-to-r from-[#FFC928] to-[#f4e1ab] px-4 py-10 sm:px-6 sm:py-12 ${
          inView ? "stat-go" : ""
        }`}
      >
        <div className="stat-sheen" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="relative text-center">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="stat-div absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-[#F5F7FA]/70 md:block"
                  style={{ transitionDelay: `${i * 150}ms` }}
                />
              )}
              <p className="roboto-slab-uniquifier text-4xl font-bold text-[#142B4A] sm:text-5xl">
                <Roll value={value} play={inView} baseDelay={i * 150} />
              </p>
              <p
                className="stat-label source-sans-3-uniquifier mt-2 text-base text-[#F5F7FA] sm:text-lg"
                style={{ animationDelay: `${600 + i * 150}ms` }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
