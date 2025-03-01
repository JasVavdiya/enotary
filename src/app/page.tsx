import Image from "next/image";
import { AboutUs } from "@/components/about";
import { Vision } from "@/components/vision";
import { BharatGlobal } from "@/components/bharatGlobal";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import BharatLeading from "@/components/bharatLeading/BharatLeading";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
         {/* Bharat Leading Section */}
         <BharatLeading />

      {/* About Us Section */}
      <AboutUs />
      
      {/* Vision Section */}
      <Vision />
      
      {/* Bharat at Global Section */}
      <BharatGlobal />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Testimonials Section */}
      <Testimonials />
      

    </>
  );
}
