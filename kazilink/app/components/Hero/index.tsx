'use client';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center">
      <Image
        src="/images/background.png"
        alt="Farmer"
        fill
        className="object-cover brightness-100"
      />

      <div className="absolute inset-0 bg-[#3D1700]/60"></div>

      <div className="relative z-10 px-6 md:px-20 max-w-4xl text-left">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-3">
          Connecting Fields <br /> and Hands
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#E0B15E] mb-5">
          Instantly via USSD
        </h2>
        <p className="text-lg md:text-2xl text-white/90 mb-6">
          KaziLink makes hiring seasonal farm workers simple. Post jobs, get SMS notifications,
          and connect with workers through any mobile phone.
        </p>

        <button
          className="inline-flex items-center gap-3 bg-[#E0B15E] text-white px-8 py-3 rounded-md shadow-md hover:opacity-95 "
        >
          <span className="text-lg font-medium">Explore</span>
          <FiArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}