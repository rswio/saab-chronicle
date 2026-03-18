import { useEffect, useRef } from "react";

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
    year: "1958",
    title: "Safety Leadership",
    description:
      "Saab becomes the first manufacturer to fit standard front seatbelts across its entire range — years ahead of legislation requiring them.",
  },
  {
    year: "1978",
    title: "Turbo Revolution",
    description:
      "Saab introduces the 99 Turbo, pioneering turbocharging technology for everyday road cars and changing the industry.",
  },
  {
    year: "1984",
    title: "Iconic 900 & 9000",
    description:
      "The Saab 900 reaches peak popularity while the flagship 9000 launches, jointly developed with Fiat, Lancia and Alfa Romeo on the Type Four platform.",
  },
  {
    year: "1990",
    title: "GM Partnership Begins",
    description:
      "General Motors acquires 50% of Saab Automobile, beginning a new chapter of shared platforms and resources.",
  },
  {
    year: "2000",
    title: "Full GM Ownership",
    description:
      "GM purchases the remaining 50% of Saab. The 9-3 and 9-5 models continue but share more GM components.",
  },
  {
    year: "2010",
    title: "Spyker Acquisition",
    description:
      "Dutch supercar maker Spyker Cars purchases Saab from GM, attempting to revive the struggling brand.",
  },
  {
    year: "2011",
    title: "Production Halts",
    description:
      "Financial difficulties force Saab to halt production. The company files for bankruptcy in December.",
  },
  {
    year: "2012",
    title: "NEVS Takes Over",
    description:
      "National Electric Vehicle Sweden acquires Saab's assets, focusing on electric vehicle development.",
  },
  {
    year: "Today",
    title: "Living Legacy",
    description:
      "While new Saabs are no longer made, a passionate global community keeps the spirit alive through clubs, preservation, and the Saab Owners Club of Great Britain.",
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll<HTMLElement>(".timeline-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${
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
