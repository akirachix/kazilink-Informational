
import WorkerJobsInfo from "./components/features/workerInfo"
import KaziLinkFeatures from "./components/features/features"
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import HeroFooterSection from "./components/footer";

export default function KaziLink (){
  return (
  <div >
    <Navbar />
      <Hero />
      <HowItWorks />
    <WorkerJobsInfo/>
    <KaziLinkFeatures/>
     <HeroFooterSection/>
  </div>
  )
}