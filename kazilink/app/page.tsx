import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import HeroFooterSection from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <HeroFooterSection/>
    </div>
  );
}