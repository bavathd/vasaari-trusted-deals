import { FileText, MessageCircle, CheckCircle, AlertTriangle, Timer } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Create Your Service / Deal",
    description: "Users define the service, expectations, details, and timelines.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Collaborate & Track Progress",
    description: "Both parties can communicate, update status, and keep the deal organized and documented inside the app.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Delivery & Confirmation",
    description: "Once the vendor completes the service, they notify the buyer. The buyer reviews and confirms the completion inside the app.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: AlertTriangle,
    number: "04",
    title: "Dispute Handling for Clarity",
    description: "If either party disagrees or faces an issue, they can raise a dispute ticket. The platform helps provide a structured space for resolving misunderstandings.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Timer,
    number: "05",
    title: "Automated Rules for Transparency",
    description: "If a request is unanswered for 15 days, it is auto-accepted. If both parties remain inactive for 45 days, the deal is automatically closed.",
    color: "from-purple-500 to-purple-600",
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
            Simple. Structured.{" "}
            <span className="text-gradient">Seamless.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five easy steps to manage any deal with complete clarity and organization.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative opacity-0 animate-fade-in-up ${index === 4 ? 'lg:col-start-2' : ''}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
