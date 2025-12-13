import { Shield, Heart, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IntroSection = () => {
  const stats = [
    { icon: AlertTriangle, value: "73%", label: "de los jóvenes han visto contenido inapropiado online", color: "text-destructive" },
    { icon: Shield, value: "1 de 3", label: "adolescentes han sido víctimas de ciberbullying", color: "text-primary" },
    { icon: Zap, value: "95%", label: "de los ataques de phishing usan ingeniería social", color: "text-secondary" },
  ];

  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 animate-heart-beat" />
            ¿Por qué es importante?
            <Heart className="w-4 h-4 animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            La Ciberseguridad es para{" "}
            <span className="text-primary">Todos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En un mundo cada vez más conectado, conocer los riesgos y cómo protegerte es fundamental 
            para disfrutar de internet de forma segura y responsable.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-primary/10 mb-4 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What You'll Learn */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-border shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-cute">
                ¿Qué Aprenderás Aquí? 💡
              </h3>
              <p className="text-muted-foreground mb-6">
                Esta guía está diseñada especialmente para ti. Aquí encontrarás información clara y 
                práctica sobre las amenazas más comunes en internet y cómo protegerte de ellas.
              </p>
              <ul className="space-y-3">
                {[
                  "Identificar deepfakes y contenido manipulado",
                  "Reconocer intentos de phishing y estafas",
                  "Proteger tus redes sociales y privacidad",
                  "Crear contraseñas seguras e inolvidables",
                  "Actuar ante el ciberbullying",
                  "Navegar de forma segura y responsable",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 mx-auto text-primary mb-4 animate-float" />
                  <p className="text-xl font-bold text-foreground font-cute">Tu Seguridad</p>
                  <p className="text-muted-foreground">es nuestra prioridad</p>
                </div>
              </div>
              {/* Decorative Hearts */}
              <Heart className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-heart-beat" />
              <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-secondary animate-heart-beat" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
