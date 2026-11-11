import React from "react";

const ADDRESS =
  "Shree Laxmi Motor Car Driving School, Main Market Rd, Pocket B, Sainik Colony, Sector 49, Faridabad, Haryana 121001";

const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.617933179715!2d77.27186874858195!3d28.400605613564863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cde7d6becfb9d%3A0xd00b1220d118480c!2sMain%2C%20Market%20Rd%2C%20Pocket%20B%2C%20Sainik%20Colony%2C%20Sector%2049%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1792948089266!5m2!1sen!2sin";

// <Location />          -> full section (heading + big map), for a page
// <Location compact />  -> small map + directions link, for the footer
const Location = ({ compact = false }) => {
  const map = (
    <iframe
      title="Shree Laxmi Motor Car Driving School Location"
      src={MAP_SRC}
      width="100%"
      height={compact ? 160 : 400}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  if (compact) {
    return (
      <div className="mt-3 px-4">
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
    );
  }

  return (
    <section className="bg-white px-4 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center text-3xl font-bold text-[#FFC928] roboto-slab-uniquifier">
          Visit Our Driving School
        </h2>

        <p className="mb-8 text-center text-gray-600 source-sans-3-uniquifier">
          Find our location and plan your visit.
        </p>
        <div className="mt-2 text-center mb-3">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg hover:-translate-y-1 bg-[#e9cc74] px-6 py-3 font-bold text-white hover:bg-[#e8c252] source-sans-3-uniquifier pb-3"
          >
            Get Directions
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">{map}</div>
      </div>
    </section>
  );
};

export default Location;
