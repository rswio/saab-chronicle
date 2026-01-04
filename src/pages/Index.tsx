import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Models from "@/components/Models";
import Legacy from "@/components/Legacy";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>UK Saab | History of Saab Automobiles</title>
        <meta
          name="description"
          content="Discover the remarkable history of Saab automobiles. From aircraft manufacturer to automotive icon, explore Swedish engineering excellence and innovation."
        />
        <meta
          name="keywords"
          content="Saab, Saab cars, Saab history, Swedish cars, Saab 900, Saab 99 Turbo, classic cars, automotive history"
        />
        <link rel="canonical" href="https://uksaab.com" />
      </Helmet>

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
      </div>
    </>
  );
};

export default Index;
