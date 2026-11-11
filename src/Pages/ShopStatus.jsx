import { useEffect, useState } from "react";

// ---- Change these to match your business ----
const OPEN_HOUR = 5;                    // 5 AM
const CLOSE_HOUR = 21;                  // 9 PM (24-hour format)
const OPEN_DAYS = [1, 2, 3, 4, 5, 6];   // 0 = Sunday ... 6 = Saturday (Mon–Sat)
const TIMEZONE = "Asia/Kolkata";        // shop's timezone, not the visitor's
// ---------------------------------------------

// 5 -> "5 AM", 21 -> "9 PM" (keeps the label in sync with the constants above)
const formatHour = (h) => `${h % 12 || 12} ${h < 12 || h === 24 ? "AM" : "PM"}`;
const HOURS_LABEL = `${formatHour(OPEN_HOUR)} – ${formatHour(CLOSE_HOUR)}`;
const DAYS_LABEL = `All Working ${OPEN_DAYS.length} Days.`;

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

  const tone = isOpen ? "open" : "closed";

  return (
    <div className="flex w-full justify-center px-4">
      <style>{`
        @keyframes ssExpand {
          from { opacity: 0; clip-path: inset(0 50% 0 50% round 16px); transform: translateY(8px); }
          to   { opacity: 1; clip-path: inset(0 0 0 0 round 16px);     transform: translateY(0); }
        }
        @keyframes ssPing {
          0%   { transform: scale(1);   opacity: .75; }
          80%, 100% { transform: scale(2.6); opacity: 0; }
        }
        @keyframes ssGlowOpen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,.0),  0 6px 18px -8px rgba(20,43,74,.6); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.18), 0 6px 18px -8px rgba(20,43,74,.6); }
        }
        @keyframes ssGlowClosed {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,.0),  0 6px 18px -8px rgba(20,43,74,.6); }
          50%      { box-shadow: 0 0 0 6px rgba(239,68,68,.18), 0 6px 18px -8px rgba(20,43,74,.6); }
        }
        @keyframes ssSwap {
          from { opacity: 0; transform: translateY(70%); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
        }

        .ss-pill   { animation: ssExpand .9s cubic-bezier(.22,.61,.36,1) both; }
        .ss-pill.ss-open   { animation: ssExpand .9s cubic-bezier(.22,.61,.36,1) both,
                                        ssGlowOpen 3.2s 1s ease-in-out infinite; }
        .ss-pill.ss-closed { animation: ssExpand .9s cubic-bezier(.22,.61,.36,1) both,
                                        ssGlowClosed 3.2s 1s ease-in-out infinite; }
        .ss-ping   { animation: ssPing 2s cubic-bezier(0,0,.2,1) infinite; }
        .ss-word   { display: inline-block; animation: ssSwap .55s cubic-bezier(.22,.61,.36,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .ss-pill, .ss-pill.ss-open, .ss-pill.ss-closed, .ss-ping, .ss-word {
            animation: none !important;
          }
        }
      `}</style>

      <div
        role="status"
        aria-live="polite"
        className={`ss-pill ss-${tone} inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl bg-[#142B4A]/90 px-4 py-2 text-center text-sm text-white sm:text-base md:text-lg`}
      >
        {/* Blinking dot: green when open, red when closed */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span
            className={`ss-ping absolute inline-flex h-full w-full rounded-full ${
              isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
              isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </span>

        <span className="source-sans-3-uniquifier">
          {/* key forces the word to re-animate when the status flips */}
          <span key={tone} className="ss-word font-semibold">
            {isOpen ? "Open Now" : "Closed Now"}
          </span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">{HOURS_LABEL}</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">{DAYS_LABEL}</span>
        </span>
      </div>
    </div>
  );
}
