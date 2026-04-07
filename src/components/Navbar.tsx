import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <img
          src={logo}
          alt="BidsList"
          className="h-16 md:h-12 w-auto object-contain"
        />
        <button
          onClick={scrollToForm}
          className="gradient-cta text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm shadow-cta hover:shadow-cta-hover transition-all duration-300 hover:scale-105"
        >
          Get My Bids
        </button>
      </div>
    </nav>
  );
};

export default Navbar;