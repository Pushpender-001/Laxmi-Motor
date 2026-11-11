import { useEffect, useState } from "react";

// ---- Change these to match your business ----
const OPEN_HOUR = 5;                    // 5 AM
const CLOSE_HOUR = 21;                 // 9 PM (24-hour format)
const OPEN_DAYS = [1, 2, 3, 4, 5, 6];   // 0 = Sunday ... 6 = Saturday (Mon–Sat)
const TIMEZONE = "Asia/Kolkata";        // shop's timezone, not the visitor's
// ---------------------------------------------

function checkIsOpen() {
  // Current time in the shop's timezone
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: TIMEZONE })
  );
  const hour = now.getHours() + now.getMinutes() / 60;
  return (
    OPEN_DAYS.includes(now.getDay()) && hour >= OPEN_HOUR && hour < CLOSE_HOUR
  );
}

export default function ShopStatus() {
  const [isOpen, setIsOpen] = useState(checkIsOpen);

  useEffect(() => {
    const update = () => setIsOpen(checkIsOpen());
    update();
    const id = setInterval(update, 30000); // re-check every 30 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-lg text-white ml-150">
      {/* Blinking dot: green when open, red when closed */}
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
            isOpen ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            isOpen ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </span>

      <span className="source-sans-3-uniquifier">
        <span className="font-semibold">
          {isOpen ? "Open Now" : "Closed Now"}
        </span>{" "}
        · 5 AM – 9 PM · All Working 6 Days.
      </span>
    </div>
  );
}
