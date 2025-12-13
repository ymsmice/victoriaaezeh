import { Heart, Shield, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  const floatingHearts = Array(6).fill(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-16">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`,
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute text-secondary/40 w-8 h-8 top-1/4 left-1/4 animate-pulse-soft" />
        <Sparkles className="absolute text-accent/40 w-6 h-6 top-1/3 right-1/4 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute text-primary/30 w-10 h-10 bottom-1/3 left-1/3 animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Guía de Ciberseguridad para Jóvenes
              <Heart className="w-4 h-4 animate-heart-beat" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-cute">
              ¡Protégete en el{" "}
              <span className="text-primary relative">
                mundo digital
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary"/>
                </svg>
              </span>
              {" "}con estilo!
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Aprende a navegar de forma segura con consejos prácticos, ejemplos reales y recursos 
              diseñados especialmente para estudiantes y adolescentes. ¡Tu seguridad online es lo primero! 💕
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Heart className="w-5 h-5" />
                Comenzar a Aprender
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 rounded-full border-2 border-primary text-primary hover:bg-primary/10">
                <Sparkles className="w-5 h-5" />
                Ver Recursos
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Temas Cubiertos</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-foreground">🛡️</div>
                <div className="text-sm text-muted-foreground">Seguro</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img
                src={heroBanner}
                alt="Escudo de ciberseguridad protegiendo una laptop con corazones"
                className="w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-bounce-soft shadow-lg">
                <Heart className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce-soft shadow-lg" style={{ animationDelay: "0.5s" }}>
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <a href="#intro" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Desliza para más</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
