import { FileText, Lock, CheckCircle, AlertTriangle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Create a Deal",
    description: "Set up a service with clear details — price, delivery expectations, terms, and timelines.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Lock,
    number: "02",
    title: "Secure Locked Payment",
    description: "The buyer pays upfront, and the amount is held safely by Vasaari until the work is completed.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Deliver & Request Release",
    description: "Once the vendor finishes the work, they request a Release of payment. The buyer confirms, and the amount is released instantly.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: AlertTriangle,
    number: "04",
    title: "Refunds & Disputes",
    description: "If the vendor fails to deliver, the buyer can request a refund. If the buyer refuses to release payment, the vendor can raise a dispute. Automated systems ensure fairness on both sides.",
    color: "from-amber-500 to-amber-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple. Secure.{" "}
            <span className="text-gradient">Seamless.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four easy steps to complete any deal with complete peace of mind.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-card rounded-3xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 relative overflow-hidden">
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-sm font-bold text-primary mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
