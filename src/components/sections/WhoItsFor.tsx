import { Palette, Wrench, GraduationCap, Store, Hammer, Calendar, Handshake } from "lucide-react";

const audiences = [
  { icon: Palette, label: "Freelancers & gig workers" },
  { icon: Wrench, label: "Technicians & repair experts" },
  { icon: GraduationCap, label: "Tutors, trainers & creators" },
  { icon: Store, label: "Small vendors & local businesses" },
  { icon: Hammer, label: "Custom product makers" },
  { icon: Calendar, label: "Event & service coordinators" },
  { icon: Handshake, label: "Anyone forming a deal with another person" },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            For Everyone
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who It's{" "}
            <span className="text-gradient">For</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vasaari is designed for anyone who wants to collaborate with clarity.
          </p>
        </div>

        {/* Audience Tags */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {audiences.map((audience, index) => (
            <div
              key={audience.label}
              className="group flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <audience.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium whitespace-nowrap">
                {audience.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
