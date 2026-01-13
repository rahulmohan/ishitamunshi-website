import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MediaBanner from "@/components/MediaBanner";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Presentations from "@/components/Presentations";
import Teaching from "@/components/Teaching";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <MediaBanner />
      <About />
      <Research />
      <Publications />
      <Presentations />
      <Teaching />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
