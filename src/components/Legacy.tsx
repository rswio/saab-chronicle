import { Shield, Gauge, Lightbulb, Heart } from "lucide-react";

const innovations = [
  {
    icon: Shield,
    title: "Safety Pioneer",
    description:
      "Saab introduced padded dashboards, side-impact protection, and headlight wipers decades before they became industry standard.",
  },
  {
    icon: Gauge,
    title: "Turbo Technology",
    description:
      "Pioneered turbocharging for mass-market vehicles, proving performance and efficiency could coexist.",
  },
  {
    icon: Lightbulb,
    title: "Night Panel",
    description:
      "Invented the Night Panel feature, dimming all dashboard lights except the speedometer for safer night driving.",
  },
  {
    icon: Heart,
    title: "Aviation DNA",
    description:
      "Every Saab carried the spirit of aviation: aerodynamic design, ignition between seats, and wraparound windscreens.",
  },
];

const Legacy = () => {
  return (
    <section id="legacy" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Innovation & Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground">
            The Saab Legacy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 bg-background border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
