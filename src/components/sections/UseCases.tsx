import { Wrench, Package, Laptop, FolderKanban, Users2, ShoppingCart, ListPlus } from "lucide-react";

const useCases = [
  { icon: Wrench, text: "Hire local technicians or service providers" },
  { icon: Package, text: "Buy custom products safely" },
  { icon: Laptop, text: "Book freelancers without risk" },
  { icon: FolderKanban, text: "Manage project-based payments" },
  { icon: Users2, text: "Pay workers or creators via referrals" },
  { icon: ShoppingCart, text: "Make safe deals with online sellers" },
  { icon: ListPlus, text: "Create your own service listing and get paid securely" },
];

const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perfect for{" "}
            <span className="text-gradient">Every Deal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hiring local help to managing complex projects, Vasaari has you covered.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.text}
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:shadow-card transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {useCase.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
