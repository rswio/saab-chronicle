const timelineEvents = [
  {
    year: "1937",
    title: "Svenska Aeroplan AB Founded",
    description:
      "SAAB is established in Trollhättan, Sweden as an aircraft manufacturer during World War II.",
  },
  {
    year: "1947",
    title: "First Automobile Prototype",
    description:
      "The Saab 92001, nicknamed 'Ursaab', is unveiled. Its aerodynamic design reflects the company's aviation heritage.",
  },
  {
    year: "1949",
    title: "Production Begins",
    description:
      "The Saab 92 enters production, featuring a two-stroke engine and distinctive teardrop shape.",
  },
  {
    year: "1978",
    title: "Turbo Revolution",
    description:
      "Saab introduces the 99 Turbo, pioneering turbocharging technology for everyday road cars.",
  },
  {
    year: "1984",
    title: "Iconic 900 Series",
    description:
      "The Saab 900 becomes a global success, known for its safety innovations and distinctive design.",
  },
  {
    year: "2011",
    title: "End of an Era",
    description:
      "After 64 years, Saab automobile production ends. The brand lives on through its passionate community.",
  },
];

const Timeline = () => {
  return (
    <section id="history" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            A Legacy of Innovation
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground">
            The Journey
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {event.year}
                </span>
                <h3 className="font-serif text-2xl font-bold text-card-foreground mt-1 mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary border-4 border-card -translate-x-1/2" />

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
