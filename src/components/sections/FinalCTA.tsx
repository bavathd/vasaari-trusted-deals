import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-[0.08]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-float animation-delay-300" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Sparkle badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to get started?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Build Trusted Deals.{" "}
            <br className="hidden md:block" />
            <span className="text-gradient">Anywhere. Anytime.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            A better way to create, work, and transact — backed by clarity and protection.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" className="shadow-glow">
              Start Your First Deal
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
