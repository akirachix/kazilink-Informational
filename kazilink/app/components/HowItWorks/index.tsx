
import Image from "next/image";
import { FiSmartphone, FiBell, FiCheckCircle, FiUsers } from "react-icons/fi";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-[#3D1700]">
            How KaziLink Works
          </h2>
          <p className="mt-3 text-lg md:text-xl lg:text-2xl text-[#E0B15E] max-w-3xl mx-auto">
            Simple, fast, and accessible for everyone - no smartphone required
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          <div className="flex flex-col h-full space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#E0B15E]/10 text-[#E0B15E]">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#3D1700]">For Farmers</h3>
            </div>

            <article className="border border-[#3D1700] border-opacity-20 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex-1">
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-md bg-[#E0B15E]/20 text-[#3D1700] shrink-0">
                  <FiSmartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl text-[#3D1700]">1. Post a Job</h4>
                  <p className="mt-3 text-base md:text-lg text-[#3D1700] leading-relaxed max-w-xl">
                    Dial *384*88462# and follow simple prompts to post your job details.
                  </p>
                </div>
              </div>
            </article>

            <article className="border border-[#3D1700] border-opacity-20 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex-1">
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-md bg-[#E0B15E]/20 text-[#3D1700] shrink-0">
                  <FiBell className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl text-[#3D1700]">2. Workers Get Alerts</h4>
                  <p className="mt-3 text-base md:text-lg text-[#3D1700] leading-relaxed max-w-xl">
                    Registered workers receive instant SMS notifications about your job posting.
                  </p>
                </div>
              </div>
            </article>

            <article className="border border-[#3D1700] border-opacity-20 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex-1">
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-md bg-[#E0B15E]/20 text-[#3D1700] shrink-0">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl text-[#3D1700]">3. Hire Instantly</h4>
                  <p className="mt-3 text-base md:text-lg text-[#3D1700] leading-relaxed max-w-xl">
                    Workers confirm if interested via USSD and you receive SMS of full application.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div>
            <div className="relative w-full max-w-md md:max-w-lg rounded-xl overflow-hidden shadow-lg ring-1 ring-[#3D1700]/5 aspect-[4/5]">
              <Image
                src="/howitworks-farmers.jpg"
                alt="Farmer and worker interacting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}