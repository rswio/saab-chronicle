import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Models from "@/components/Models";
import Legacy from "@/components/Legacy";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Models />
        <Legacy />
        <About />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
