import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BestSellers } from "@/components/BestSellers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <BestSellers />
      <Contact />
      <Footer />
    </main>
  );
}
