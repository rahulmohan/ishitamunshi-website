import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Teaching from "@/components/Teaching";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Teaching />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
