import heroImage from "@/assets/hero-saab.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Classic Saab 900 on a Swedish coastal road at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
          Swedish Engineering Excellence
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          The Saab Story
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          From aircraft manufacturer to automotive icon. Discover the remarkable 
          journey of Sweden's most innovative car brand.
        </p>
        <a
          href="#history"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-secondary transition-colors duration-300"
        >
          Explore History
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
