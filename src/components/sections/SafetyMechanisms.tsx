import { Handshake, Vault, Scale, Clock, Timer, BadgeCheck } from "lucide-react";

const mechanisms = [
  {
    icon: Handshake,
    title: "Mutual Approval System",
    description: "Money moves only when both parties agree.",
  },
  {
    icon: Vault,
    title: "Escrow-Style Protection",
    description: "Funds remain locked until terms are met.",
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description: "Either party can raise a dispute.",
  },
  {
    icon: Clock,
    title: "Auto-Acceptance After 15 Days",
    description: "Requests ignored for 15 days get accepted automatically.",
  },
  {
    icon: Timer,
    title: "45-Day Inactivity Rule",
    description: "If both parties are inactive for 45 days, money returns to the original payer.",
  },
  {
    icon: BadgeCheck,
    title: "Zero Commission",
    description: "Full transparency, no hidden charges.",
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
            Multiple layers of protection ensure fair, secure transactions for everyone.
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
