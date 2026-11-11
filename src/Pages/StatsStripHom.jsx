import React from "react";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "10k+", label: "Students Trained" },
  { value: "98%", label: "First-Attempt Pass Rate" },
  { value: "15+", label: "Training Cars" },
];

const StatsStripHom = () => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-r from-[#fac72d] to-[#f4e1ab] px-6 py-10 mb-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="roboto-slab-uniquifier text-5xl font-bold text-[#142B4A]">
                {value}
              </p>
              <p className="source-sans-3-uniquifier mt-1 text-lg text-[#F5F7FA]">
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