
import { useEffect, useState } from "react";

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FFFCF0] text-[#111] font-sans scroll-smooth">
      {/* Sticky MP4-logo */}
      <div
        className={`z-50 transition-all duration-500 ${
          isSticky
            ? "fixed top-4 left-4 w-24"
            : "absolute top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
          src="/logo-loop.mp4"
        />
      </div>

      {/* Scroll-pijltje */}
      <div
        onClick={() =>
          document
            .getElementById("vctb")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl text-[#5C899D] cursor-pointer animate-bounce"
      >
        ↓
      </div>

      {/* Hero section */}
      <div className="h-screen w-full relative flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl text-[#5C899D] font-bold mt-8">
          Welkom bij INNOVISUAL
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          Waar jouw gerechten tot leven komen in Augmented Reality.
        </p>
      </div>

      {/* VCTB */}
      <section id="vctb" className="min-h-screen py-20 px-6">
        <h2 className="text-2xl md:text-4xl text-[#5C899D] text-center mb-8">
          Van Creatie tot Beleving
        </h2>
        <div className="w-[280px] h-[550px] bg-gray-300 rounded-[40px] mx-auto shadow-lg overflow-hidden bg-cover bg-center" style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/IPhone_14_Pro_Vector.svg/300px-IPhone_14_Pro_Vector.svg.png')"
        }} />
      </section>

      {/* IDI */}
      <section id="idi" className="min-h-screen py-20 px-6">
        <h2 className="text-2xl md:text-4xl text-[#5C899D] text-center mb-8">
          Impact door Innovatie
        </h2>
      </section>

      {/* Let’s Talk */}
      <section id="lets-talk" className="min-h-screen py-20 px-6">
        <h2 className="text-2xl md:text-4xl text-[#5C899D] text-center mb-8">
          Let’s Talk
        </h2>
      </section>
    </div>
  );
}
