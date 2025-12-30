import { Shield, MessageSquare, Workflow } from "lucide-react";

const WhatIsVasaari = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
              About Vasaari
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A safe space to build meaningful{" "}
              <span className="text-gradient">service collaborations.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Vasaari helps people create and manage service-based deals in a structured, transparent 
              environment. Whether you meet a vendor on social media, in person, or through a referral, 
              Vasaari provides a neutral platform to organize your agreement, track activity, and 
              ensure every step is clear for both sides.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Customizable services, simple workflows, and reliable communication — all in one place.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Neutral Platform</h3>
                  <p className="text-muted-foreground">
                    A safe, structured space where both parties can collaborate with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Workflow className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Organized Workflows</h3>
                  <p className="text-muted-foreground">
                    Track progress, update status, and keep every deal documented inside the app.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Reliable Communication</h3>
                  <p className="text-muted-foreground">
                    Clear, structured messaging ensures no details are lost or misunderstood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsVasaari;
