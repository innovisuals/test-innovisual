import React, { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import Triangle from "@/components/Triangle";
import ProcessStep from "@/components/ProcessStep";
import BenefitCard from "@/components/BenefitCard";
import ContactForm from "@/components/ContactForm";
import {
  ChefHat,
  Box,
  Upload,
  Smartphone,
  TrendingUp,
  Star,
  Rocket,
  Megaphone,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index: React.FC = () => {
  const vanCreatieRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "INNOVISUAL | 3D Visualisatie voor Restaurants";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6]">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <Navigation
        vanCreatieRef={vanCreatieRef}
        impactRef={impactRef}
        contactRef={contactRef}
      />

      {/* Alles hieronder blijft gelijk */}
      <section className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="flex-1 w-full flex items-center justify-center pb-12 pt-8">
          <div className="w-full max-w-5xl mx-auto px-4 flex justify-center items-center">
            <div className="w-full max-w-3xl">
              <Logo />
            </div>
          </div>
        </div>
        <div className="absolute bottom-28">
          <Triangle targetRef={vanCreatieRef} />
        </div>
      </section>

      <!-- ... alle andere secties blijven ongewijzigd -->

      <section
        ref={contactRef}
        className={`section-container ${isMobile ? "py-12" : "py-24"}`}
        id="lets-talk"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`font-bold mb-8 animate-fade-in ${
              isMobile ? "text-5xl" : "text-3xl md:text-6xl"
            }`}
          >
            LET'S TALK
          </h2>
          <p
            className="text-lg font-medium mb-2 animate-fade-in italic text-innovisual-muted"
            style={{ animationDelay: "100ms" }}
          >
            Samen innoveren.
          </p>

          <div className="max-w-2xl mx-auto">
            <p
              className="text-innovisual-muted mb-8 animate-fade-in text-lg"
              style={{ animationDelay: "200ms" }}
            >
              Ontdek vrijblijvend wat INNOVISUAL voor u kan betekenen. Wij
              realiseren het concept en maken het u gemakkelijk. Heeft u
              specifieke wensen? Ook daarvoor bieden wij alle ruimte. Ervaar het
              zelf – zonder kosten en zonder verplichtingen.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
};

export default Index;
