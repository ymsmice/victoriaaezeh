import { useState } from "react";
import { Heart, Menu, X, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Amenazas",
      items: [
        { label: "Deepfakes", href: "#deepfakes" },
        { label: "Phishing", href: "#phishing" },
        { label: "Ciberbullying", href: "#cyberbullying" },
      ]
    },
    {
      label: "Protección",
      items: [
        { label: "Contraseñas", href: "#passwords" },
        { label: "Redes Sociales", href: "#social-media" },
        { label: "Privacidad", href: "#privacy" },
      ]
    },
    { label: "Recursos", href: "#resources" },
    { label: "Quiz", href: "#quiz" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary animate-pulse-soft" />
              <Heart className="w-3 h-3 text-primary absolute -top-1 -right-1 animate-heart-beat" />
            </div>
            <span className="text-xl font-bold text-foreground font-cute">
              CiberConsejos
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {'items' in item ? (
                  <button
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <Heart className="w-3 h-3 text-primary" />
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                    <Heart className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                
                {'items' in item && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-200 ${
                      activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="flex items-center gap-2 px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Heart className="w-3 h-3 text-primary" />
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {'items' in item ? (
                  <>
                    <div className="flex items-center gap-2 px-4 py-2 text-muted-foreground font-medium">
                      <Heart className="w-3 h-3 text-primary" />
                      {item.label}
                    </div>
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="flex items-center gap-2 px-8 py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Heart className="w-2 h-2 text-primary" />
                        {subItem.label}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-3 h-3 text-primary" />
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
