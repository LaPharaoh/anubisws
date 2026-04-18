import Navbar from "./components/Navbar";
import Hero from "@/components/ui/glassmorphism-trust-hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
