"use client";

import {
  FaBolt,
  FaSms,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    title: "Instant Matching",
    description:
      "Connect farmers with local workers in real-time during peak seasons when you need help .",
    icon: FaBolt,
  },
  {
    title: "SMS Notifications",
    description:
      "Automated SMS alerts keep everyone informed about job postings and confirmations.",
    icon: FaSms,
  },
  {
    title: "Registered Workers",
    description:
      "All workers are registered into the system, giving you peace of mind when hiring.",
    icon: FaShieldAlt,
  },
  {
    title: "24/7 Availability",
    description:
      "Access the platform any time, any day. USSD works even without internet connection.",
    icon: FaClock,
  },
  {
    title: "Location-Based",
    description:
      "Find workers near your farm to reduce transportation costs and time.",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear payment terms agreed upon before work begins. No hidden fees.",
    icon: FaDollarSign,
  },
];

export default function KaziLinkFeatures() {
  return (
    <section className="py-8 sm:py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl text-center md:text-5xl lg:text-[50px] font-semibold text-[#3D1700]">
      Why Choose KaziLink
      </h2>
      <p className="text-[24px] sm:text-base md:text-lg text-center text-[#E0B15E] mb-8">
        Built specifically for the agricultural community's unique needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col justify-between items-center text-[#3D1700] text-center p-4 sm:p-6 border-2 border-[#3D1700] rounded-xl shadow-sm hover:shadow-lg transition bg-white w-full h-full max-h-[180px] sm:max-h-[200px] md:max-h-[220px] overflow-hidden"
          >
            <div className="rounded-full p-4 mb-3 bg-[#FFE2CF] text-[#E0B15E]">
              <feature.icon />
            </div>

            <div className="w-full">
              <h3 className="font-bold text-[18px] sm:text-[22px] sm:text-2xl text-[#3D1700]">
                {feature.title}
              </h3>
              <p className="text-[15px] sm:text-base md:text-lg text-[#3D1700] max-w-xl overflow-hidden">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}