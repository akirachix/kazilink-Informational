"use client";

import Image from "next/image";
import { FaBell,FaCheckCircle, FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const steps = [
  {
    step: 1,
    title: "Receive SMS Alert",
    description: "Get notified instantly when new jobs are posted within your location.",
    icon: FaBell,
  },
  {
    step: 2,
    title: "Browse Jobs",
    description: "Dial '*384*88462#' to view all available jobs within the location and job type details.",
    icon: FaPhone,
  },
  {
    step: 3,
    title: "Accept & Work",
    description: "Select a job and confirm. Receive SMS with farmer contact and job details.",
    icon: FaCheckCircle,
  },
];

export default function WorkerJobsInfo() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex items-stretch justify-center">
            <div
              className="w-full max-w-md md:max-w-lg rounded-3xl lg:max-w-xl overflow-hidden h-auto sm:h-80 md:h-full max-h-[640px]"
            >
              <Image
                src="/images/workers.jpg"
                alt="Farmer and worker interacting"
                width={1200}
                height={900}
                className="object-contain sm:object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg text-[#E0B15E] text-[24px] sm:text-[28px]">
                <FaUser />
              </div>
              <h3 className="text-[28px] sm:text-3xl font-bold text-[#3D1700]">For Workers</h3>
            </div>

            <div className="space-y-6">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="border border-[#3D1700] border-opacity-20 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-14 h-14 rounded-md text-[#E0B15E] text-[24px] sm:text-[28px] shrink-0">
                      <s.icon />
                    </div>

                    <div>
                      <h4 className="font-bold text-[18px] sm:text-[22px] sm:text-2xl text-[#3D1700]">
                        {s.step}. {s.title}
                      </h4>
                      <p className="mt-2 text-[15px] sm:text-base md:text-lg text-[#3D1700] max-w-xl">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}