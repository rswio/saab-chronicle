const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About UK Saab
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Keeping the Spirit Alive
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              UK Saab is dedicated to preserving and celebrating the remarkable 
              heritage of Saab automobiles. Though production ended in 2011, the 
              passion for these Swedish-engineered marvels lives on through 
              enthusiasts, collectors, and communities worldwide.
            </p>
            <p>
              From the teardrop-shaped 92 to the turbocharged 9-5, every Saab 
              tells a story of innovation, safety-first engineering, and 
              distinctly Scandinavian design philosophy. We believe these 
              stories deserve to be told and remembered.
            </p>
            <p>
              Whether you're a lifelong Saab owner, curious newcomer, or simply 
              appreciate automotive history, we invite you to explore the 
              fascinating world of Saab automobiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
