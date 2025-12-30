const Footer = () => {
  const links = [
    { label: "About", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="py-16 px-6 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="text-2xl font-bold mb-4">Vasaari</h3>
          
          {/* Tagline */}
          <p className="text-background/70 mb-8 max-w-md">
            A safe, structured marketplace for custom services.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-background/70 hover:text-background transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-background/10 mb-8" />

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © 2025 Vasaari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
