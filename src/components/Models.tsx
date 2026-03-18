import saab92 from "@/assets/saab-92.jpg";
import saab99 from "@/assets/saab-99.jpg";
import saab900 from "@/assets/saab-900.jpg";
import saab93 from "@/assets/saab-9-3.jpg";

const models = [
  {
    name: "Saab 92",
    year: "1949–1956",
    description:
      "The first production Saab, featuring a two-stroke engine and a teardrop aerodynamic body shaped in a wind tunnel — reflecting the company's aviation roots.",
    image: saab92 as string,
  },
  {
    name: "Saab 99 Turbo",
    year: "1977–1980",
    description:
      "The car that brought turbocharging to the mass market. Saab's 99 Turbo proved forced induction and everyday usability could coexist, changing the industry forever.",
    image: saab99 as string,
  },
  {
    name: "Saab 900",
    year: "1978–1994",
    description:
      "The iconic original 900 defined Saab's identity: wraparound windscreen, cabin-forward design, and class-leading safety. A successor NG900 followed from 1994 on a shared GM platform.",
    image: saab900 as string,
  },
  {
    name: "Saab 9000",
    year: "1984–1998",
    description:
      "Saab's flagship executive car, jointly developed on the 'Type Four' platform with Fiat, Lancia and Alfa Romeo. Offered exceptional refinement, safety, and turbocharged performance.",
    image: null,
  },
  {
    name: "Saab 9-5",
    year: "1997–2011",
    description:
      "The spiritual successor to the 9000. The first-generation 9-5 (1997–2005) was well-regarded for its safety and build quality; a brief second generation followed before Saab's closure in 2011.",
    image: null,
  },
  {
    name: "Saab 9-3",
    year: "1998–2014",
    description:
      "Modern interpretation of Saab values across two distinct generations. The second-generation 9-3 (2002–2014) offered sport, estate, and cabriolet variants with strong turbocharged engines.",
    image: saab93 as string,
  },
];

const Models = () => {
  return (
    <section id="models" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Automotive Icons
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Legendary Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <article
              key={model.name}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {model.image ? (
                  <img
                    src={model.image}
                    alt={`${model.name} (${model.year})`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-muted/20 flex items-center justify-center">
                    <span className="font-serif text-3xl font-bold text-primary/40 select-none">
                      {model.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {model.year}
                </span>
                <h3 className="font-serif text-2xl font-bold text-card-foreground mt-1 mb-2">
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
