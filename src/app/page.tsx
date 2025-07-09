// app/page.tsx (if App Router) or pages/index.tsx (if Pages Router)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
