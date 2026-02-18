import Hero from '@/components/hero';
import Features from '@/components/features';
import Screenshots from '@/components/screenshots';
import Download from '@/components/download';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Footer />
    </main>
  );
}
