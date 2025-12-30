import { Eye, Shield, Home, Briefcase, MessageSquareWarning, Globe, Sparkles } from "lucide-react";

const benefits = [
  { icon: Eye, text: "Organized and transparent workflow" },
  { icon: Shield, text: "Protection for both vendors and buyers" },
  { icon: Home, text: "A safe, neutral space to manage deals" },
  { icon: Briefcase, text: "Works for any custom or personalized service" },
  { icon: MessageSquareWarning, text: "Reduces misunderstandings" },
  { icon: Globe, text: "Suitable for real-world and online interactions" },
  { icon: Sparkles, text: "Fast, simple, and intuitive interface" },
];

const WhyChoose = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-primary opacity-[0.03]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
              Why Vasaari
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Choose{" "}
              <span className="text-gradient">Vasaari?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built with organization and clarity at its core, Vasaari transforms how people 
              collaborate on deals — whether online or in person.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.text}
                className="group flex items-center gap-4 bg-card rounded-2xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
