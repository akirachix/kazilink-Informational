
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav id='nav' className="sticky top-0 bg-[#fffaf4] shadow-sm z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="KaziLink logo" width={80} height={40} />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-xl">
          <a href="#hero" className="text-[#3D1700] hover:text-[#E0B15E]">Home</a>
          <a href="#howitworks" className="text-[#3D1700] hover:text-[#E0B15E]">How It Works</a>
          <a href="#features" className="text-[#3D1700] hover:text-[#E0B15E]">Features</a>
          <a href="#nav" className="text-[#3D1700] hover:text-[#E0B15E]">Contact</a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          {open ? <X size={24} color="#3D1700" /> : <Menu size={24} color="#3D1700" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fffaf4] px-6 py-4 space-y-2">
          <a href="#" onClick={() => setOpen(false)} className="block text-[#3D1700] hover:text-[#E0B15E]">Home</a>
          <a href="#" onClick={() => setOpen(false)} className="block text-[#3D1700] hover:text-[#E0B15E]">How It Works</a>
          <a href="#" onClick={() => setOpen(false)} className="block text-[#3D1700] hover:text-[#E0B15E]">Features</a>
          <a href="#" onClick={() => setOpen(false)} className="block text-[#3D1700] hover:text-[#E0B15E]">Contact</a>
        </div>
      )}
    </nav>
  );
}