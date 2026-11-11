import React, { useEffect, useRef, useState } from "react";

// fill = how much of the gauge sweeps round (1 = full). Only the pass rate
// stops short, so the 98% gauge really does show 98%.
const stats = [
  { value: "20+", label: "Years of Experience", fill: 1 },
  { value: "10k+", label: "Students Trained", fill: 1 },
  { value: "98%", label: "First-Attempt Pass Rate", fill: 0.98 },
  { value: "15+", label: "Training Cars", fill: 1 },
];

// Gauge geometry: a 270° arc, open at the bottom like a speedometer
const R = 52;
const C = 2 * Math.PI * R; // full circumference
const ARC = C * 0.75; // visible 270°

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

const Gauge = ({ value, fill, play, delay }) => (
  <div className="gauge relative mx-auto h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
    <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {/* faint track */}
      <circle
        cx="60"
        cy="60"
        r={R}
        fill="none"
        stroke="#F5F7FA"
        strokeOpacity="0.55"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${ARC} ${C}`}
        transform="rotate(135 60 60)"
      />
      {/* the needle sweep: draws round to its value */}
      <circle
        className="gauge-fill"
        cx="60"
        cy="60"
        r={R}
        fill="none"
        stroke="#142B4A"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${ARC} ${C}`}
        strokeDashoffset={play ? ARC * (1 - fill) : ARC}
        transform="rotate(135 60 60)"
        style={{ transitionDelay: `${delay}ms` }}
      />
    </svg>

    {/* number comes into focus as the gauge sweeps */}
    <p
      className={`gauge-num absolute inset-0 flex items-center justify-center roboto-slab-uniquifier text-3xl font-bold text-[#142B4A] sm:text-4xl ${
        play ? "gauge-num-in" : ""
      }`}
      style={{ transitionDelay: `${delay + 350}ms` }}
    >
      {value}
    </p>
  </div>
);

const StatsStripHom = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="w-full overflow-hidden">
      <style>{`
        @keyframes shRise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shBreath {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(20,43,74,0)); }
          50%      { filter: drop-shadow(0 0 6px rgba(20,43,74,.45)); }
        }

        .gauge { transition: transform .5s cubic-bezier(.22,.61,.36,1); }
        .gauge-item:hover .gauge { transform: scale(1.06); }

        .gauge-fill {
          transition: stroke-dashoffset 2s cubic-bezier(.16,.84,.3,1);
        }
        .sh-go .gauge-fill { animation: shBreath 4s 2.4s ease-in-out infinite; }

        .gauge-num {
          opacity: 0; filter: blur(8px); transform: scale(.7);
          transition: opacity .9s ease, filter .9s ease,
                      transform .9s cubic-bezier(.34,1.56,.64,1);
        }
        .gauge-num-in { opacity: 1; filter: blur(0); transform: scale(1); }

        .sh-label { opacity: 0; }
        .sh-go .sh-label { animation: shRise .8s cubic-bezier(.22,.61,.36,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .gauge, .gauge-fill, .gauge-num { transition: none; }
          .gauge-num { opacity: 1; filter: none; transform: none; }
          .sh-label { opacity: 1; animation: none !important; }
          .sh-go .gauge-fill { animation: none; }
          .gauge-item:hover .gauge { transform: none; }
        }
      `}</style>

      <div
        className={`bg-gradient-to-r from-[#fac72d] to-[#f4e1ab] px-4 py-10 mb-5 sm:px-6 ${
          inView ? "sh-go" : ""
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {stats.map(({ value, label, fill }, i) => (
            <div key={label} className="gauge-item text-center">
              <Gauge value={value} fill={fill} play={inView} delay={i * 180} />
              <p
                className="sh-label source-sans-3-uniquifier mt-2 text-base text-[#F5F7FA] sm:text-lg"
                style={{ animationDelay: `${700 + i * 180}ms` }}
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

export default StatsStripHom;
