import React from "react";

const stats = [
  { value: "2004", label: "Established" },
  { value: "20+", label: "Training Cars" },
  { value: "10+", label: "Certified Instructors" },
  { value: "5k+", label: "Licensed Drivers" },
];

const StatsStrip = () => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-r from-[#FFC928] to-[#f4e1ab] px-6 py-12">
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

export default StatsStrip;