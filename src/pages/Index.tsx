import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIsVasaari from "@/components/sections/WhatIsVasaari";
import HowItWorks from "@/components/sections/HowItWorks";
import SafetyMechanisms from "@/components/sections/SafetyMechanisms";
import WhyChoose from "@/components/sections/WhyChoose";
import UseCases from "@/components/sections/UseCases";
import WhoItsFor from "@/components/sections/WhoItsFor";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vasaari - Create. Deal. Deliver. Securely.</title>
        <meta 
          name="description" 
          content="Vasaari is a trusted vendor marketplace where people can create custom services, collaborate with others, and manage deals with complete clarity and transparency." 
        />
        <meta name="keywords" content="marketplace, collaboration, vendor platform, freelance, services, deals, transparency" />
        <link rel="canonical" href="https://vasaari.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <WhatIsVasaari />
          <section id="how-it-works">
            <HowItWorks />
          </section>
          <section id="safety">
            <SafetyMechanisms />
          </section>
          <WhyChoose />
          <section id="use-cases">
            <UseCases />
          </section>
          <WhoItsFor />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
