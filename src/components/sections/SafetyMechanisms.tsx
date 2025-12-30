import { Handshake, ListChecks, Scale, Clock, Timer, Eye } from "lucide-react";

const mechanisms = [
  {
    icon: Handshake,
    title: "Mutual Interaction Framework",
    description: "Both sides must approve key steps.",
  },
  {
    icon: ListChecks,
    title: "Structured Progress Tracking",
    description: "No confusion, no missed updates.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution System",
    description: "Issues can be formally addressed.",
  },
  {
    icon: Clock,
    title: "15-Day Auto-Acceptance Rule",
    description: "No stalling or uncertainty.",
  },
  {
    icon: Timer,
    title: "45-Day Auto-Closure Rule",
    description: "Inactive deals close automatically.",
  },
  {
    icon: Eye,
    title: "100% Transparent Workflow",
    description: "Every action is documented.",
  },
];

const SafetyMechanisms = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Security First
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built-In{" "}
            <span className="text-gradient">Safety Mechanisms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple layers of protection ensure organized, transparent workflows for everyone.
          </p>
        </div>

        {/* Safety Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanisms.map((mechanism, index) => (
            <div
              key={mechanism.title}
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="h-full bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <mechanism.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {mechanism.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mechanism.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyMechanisms;
