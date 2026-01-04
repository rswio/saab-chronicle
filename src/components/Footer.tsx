const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold text-card-foreground">
              UK SAAB
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Celebrating Swedish automotive excellence
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#history"
              className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
            >
              History
            </a>
            <a
              href="#models"
              className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
            >
              Models
            </a>
            <a
              href="#legacy"
              className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
            >
              Legacy
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
            >
              About
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} UK Saab. All rights reserved. This is a tribute site 
            and is not affiliated with Saab Automobile AB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
