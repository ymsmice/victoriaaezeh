import { Heart, Shield, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = {
    temas: [
      { label: "Deepfakes", href: "#deepfakes" },
      { label: "Phishing", href: "#phishing" },
      { label: "Contraseñas", href: "#passwords" },
      { label: "Redes Sociales", href: "#social-media" },
      { label: "Ciberbullying", href: "#cyberbullying" },
      { label: "Privacidad", href: "#privacy" },
    ],
    recursos: [
      { label: "Quiz Interactivo", href: "#quiz" },
      { label: "Recursos Externos", href: "#resources" },
      { label: "Guía PDF", href: "#" },
    ],
    externos: [
      { label: "IS4K", url: "https://www.is4k.es/" },
      { label: "INCIBE", url: "https://www.incibe.es/" },
      { label: "Pantallas Amigas", url: "https://www.pantallasamigas.net/" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary" />
                <Heart className="w-3 h-3 text-primary absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-foreground font-cute">
                CiberConsejos
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Guía de ciberseguridad diseñada para estudiantes y adolescentes. 
              ¡Navega seguro y con estilo! 💕
            </p>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-4 h-4 text-primary animate-heart-beat" 
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>

          {/* Temas */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              Temas
            </h4>
            <ul className="space-y-2">
              {links.temas.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              Recursos
            </h4>
            <ul className="space-y-2">
              {links.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Externos */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              Enlaces Útiles
            </h4>
            <ul className="space-y-2">
              {links.externos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 CiberConsejos. Hecho con{" "}
              
              <Heart className="w-4 h-4 inline text-primary animate-heart-beat" />{" "}
              para estudiantes.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:contacto@ciberconsejos.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-4 h-4" />
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
