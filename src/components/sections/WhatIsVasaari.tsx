import { Shield, Users, Zap } from "lucide-react";

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
              The safest way to make deals with{" "}
              <span className="text-gradient">anyone.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Vasaari lets people create and manage service-based deals with complete transparency 
              and secure payments. Whether you meet a vendor on social media, in person, or through 
              a referral, Vasaari acts as a neutral platform that protects both parties until the 
              deal is completed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create customizable services, accept offers, and transact with peace of mind — 
              without middlemen, commissions, or hidden charges.
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Protected Transactions</h3>
                  <p className="text-muted-foreground">
                    Your money is held securely until both parties are satisfied with the deal.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Trust Anyone</h3>
                  <p className="text-muted-foreground">
                    Deal confidently with strangers from social media, referrals, or real-world encounters.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Zero Hidden Fees</h3>
                  <p className="text-muted-foreground">
                    No commissions, no surprises. Full transparency in every transaction.
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
