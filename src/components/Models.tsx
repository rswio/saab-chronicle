import saab92 from "@/assets/saab-92.jpg";
import saab99 from "@/assets/saab-99.jpg";
import saab900 from "@/assets/saab-900.jpg";
import saab93 from "@/assets/saab-9-3.jpg";

const models = [
  {
    name: "Saab 92",
    year: "1949-1956",
    description:
      "The first production Saab, featuring aerodynamic design inspired by aircraft.",
    image: saab92,
  },
  {
    name: "Saab 99 Turbo",
    year: "1978-1984",
    description:
      "Revolutionary turbocharged engine that changed the automotive industry.",
    image: saab99,
  },
  {
    name: "Saab 900",
    year: "1978-1998",
    description:
      "The iconic model that defined Saab's identity with its safety and style.",
    image: saab900,
  },
  {
    name: "Saab 9-3",
    year: "1998-2014",
    description:
      "Modern interpretation of Saab values, blending performance with elegance.",
    image: saab93,
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
                <img
                  src={model.image}
                  alt={`${model.name} - ${model.year}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
