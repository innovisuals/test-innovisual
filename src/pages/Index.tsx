
import React, { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import Triangle from "@/components/Triangle";
import ProcessStep from "@/components/ProcessStep";
import BenefitCard from "@/components/BenefitCard";
import ContactForm from "@/components/ContactForm";
import { ChefHat, Box, Upload, Smartphone, TrendingUp, Star, Rocket, Megaphone } from "lucide-react";
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
    <>
      <Navigation vanCreatieRef={vanCreatieRef} impactRef={impactRef} contactRef={contactRef} />

      <section className="w-full bg-[hsl(var(--ivory-white))]">
        <div className="section-container py-24 text-center space-y-6">
          <h2 className={`font-bold mb-8 animate-fade-in ${isMobile ? 'text-5xl' : 'text-3xl md:text-6xl'}`}>
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
              Ontdek vrijblijvend wat INNOVISUAL voor u kan betekenen. Wij realiseren het concept en maken het u gemakkelijk.
              Heeft u specifieke wensen? Ook daarvoor bieden wij alle ruimte. Ervaar het zelf – zonder kosten en zonder verplichtingen.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Index;
