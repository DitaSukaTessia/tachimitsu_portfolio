import { Suspense } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ParticlesClient from "@/components/ParticlesClient";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <AmbientBackground />
      <Suspense fallback={null}>
        <ParticlesClient />
      </Suspense>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
