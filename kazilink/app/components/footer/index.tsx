import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const HeroFooterSection: React.FC = () => {
  const ussdCode = "*384*88462#";

  return (
    <div id = "contact" className="font-sans text-foreground">
      <header
        className="bg-linear-to-r from-[#3D1700] via-[#a06b3f] to-[#E0B15E] py-12 md:py-20 text-white"
      
      >
        <div className="max-w-4xl mx-auto px-6 text-left md:text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[clamp(28px,4.2vw,48px)] font-extrabold mb-3 md:mb-4 leading-tight">
            Ready to Get Started?
          </h1>

          <p className="max-w-3xl mx-0 md:mx-auto text-sm sm:text-base md:text-lg leading-6 md:leading-7 mb-6 md:mb-8 opacity-95">
            Join thousands of farmers and workers already using KaziLink to make
            seasonal hiring simple and efficient.
          </p>

          <div
            aria-label={`USSD code: ${ussdCode}`}
            className="inline-flex items-center justify-center w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-xs mx-0 md:mx-auto"
          >
            <div className="flex flex-col items-start md:items-center text-left md:text-center bg-[#f3e6db] text-[#4a1f11] rounded-2xl px-6 py-3 sm:px-8 sm:py-4 md:px-6 md:py-3 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#4f1808]">
              <span className="block text-xs sm:text-sm opacity-80">Dial our USSD code</span>
              <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mt-1">
                {ussdCode}
              </span>
            </div>
          </div>
        </div>
      </header>

      <footer className="bg-white text-[#6b4a40]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 md:gap-8 items-start">
          <div className="text-left">
            <div className="text-[#4f1808] font-bold text-lg">KaziLink</div>
            <p className="text-base mt-2 max-w-[20rem]">
              Connecting farmers with workers through simple USSD technology.
              Making seasonal hiring effortless.
            </p>
          </div>

          <nav aria-label="Quick Links" className="flex justify-start lg:ml-20">
            <div className="text-left">
              <h4 className="text-[#4f1808] font-bold text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-base hover:underline focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#f3e6db]"
                    href="#hero"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base hover:underline focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#f3e6db]"
                    href="#howitworks"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base hover:underline focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#f3e6db]"
                    href="#features"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <address className="not-italic text-left">
            <h4 className="text-[#4f1808] font-bold text-lg mb-3">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#4a1f11]">
                <FaPhoneAlt size={14} className="shrink-0 mt-0.5" />
                <a className="text-base hover:underline focus:outline-none" href="tel:+254787654321">
                  +254 787 654 321
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#4a1f11]">
                <FaEnvelope size={14} className="shrink-0 mt-0.5" />
                <a className="text-base hover:underline focus:outline-none" href="mailto:support@kazilink.com">
                  support@kazilink.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#4a1f11]">
                <FaMapMarkerAlt size={14} className="shrink-0 mt-0.5" />
                <span className="text-base">Nairobi, Kenya</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="flex items-center justify-center border-t border-[#4f1808] mt-10 pt-6 text-center text-[#6b4a40] text-base select-none">
          <span className="text-base mr-1">&#169;</span>
          2025 KaziLink. Connecting Fields with Hands.
        </div>
      </footer>
    </div>
  );
};

export default HeroFooterSection;