import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className="font-[Nunito]">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
}