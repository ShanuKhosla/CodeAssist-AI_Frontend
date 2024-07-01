import About from "@/components/About";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HomePage from "@/components/HomePage";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return(
    <div className="bg-black"> 

    <FloatingNav navItems={navItems}/>
      <HomePage />
      <GetStarted />
      <About />
      <Footer />
    </div>
    
  )
}
