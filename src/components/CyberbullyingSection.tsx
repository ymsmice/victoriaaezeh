import { Heart, MessageCircle, Users, Shield, Phone, AlertTriangle, HandHeart, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import cyberbullyingImg from "@/assets/cyberbullying-illustration.png";

const CyberbullyingSection = () => {
  const signs = [
    "Cambios de humor repentinos después de usar el teléfono",
    "Evitar redes sociales o dispositivos",
    "Nerviosismo al recibir notificaciones",
    "Aislamiento de amigos y familia",
    "Bajo rendimiento escolar",
    "Problemas para dormir",
  ];

  const whatToDo = [
    {
      title: "Si eres víctima",
      steps: [
        "No respondas a los ataques",
        "Guarda capturas de pantalla como evidencia",
        "Bloquea a la persona que te acosa",
        "Reporta el comportamiento en la plataforma",
        "Habla con un adulto de confianza",
      ],
    },
    {
      title: "Si eres testigo",
      steps: [
        "No compartas ni des like al contenido dañino",
        "Apoya a la víctima en privado",
        "Reporta el contenido a la plataforma",
        "Anima a la víctima a buscar ayuda",
        "Informa a un adulto si es grave",
      ],
    },
  ];

  const helplines = [
    { name: "Línea de la Vida (México)", number: "800 911 2000", available: "24 horas" },
    { name: "ANAR (España)", number: "900 20 20 10", available: "24 horas" },
    { name: "Línea 102 (Argentina)", number: "102", available: "24 horas" },
    { name: "Línea 147 (Chile)", number: "147", available: "24 horas" },
  ];

  const types = [
    {
      name: "Exclusión social",
      description: "Dejar a alguien fuera de grupos o actividades online intencionalmente.",
    },
    {
      name: "Difamación",
      description: "Esparcir rumores falsos o información dañina sobre alguien.",
    },
    {
      name: "Acoso directo",
      description: "Enviar mensajes ofensivos, amenazas o insultos repetidamente.",
    },
    {
      name: "Suplantación",
      description: "Hacerse pasar por otra persona para dañar su reputación.",
    },
    {
      name: "Outing",
      description: "Revelar secretos o información privada sin consentimiento.",
    },
  ];

  return (
    <section id="cyberbullying" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HandHeart className="w-4 h-4" />
            Apoyo y Prevención
            <Heart className="w-4 h-4 animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Ciberbullying:{" "}
            <span className="text-primary">No Estás Solo/a</span> 💕
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            El ciberbullying es acoso a través de medios digitales. Es un problema serio, 
            pero hay formas de enfrentarlo y siempre hay alguien dispuesto a ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image and Types */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={cyberbullyingImg} 
                alt="Ilustración de apoyo contra el ciberbullying"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <Heart className="absolute -top-3 -right-3 w-8 h-8 text-primary animate-heart-beat" />
            </div>

            {/* Types of Cyberbullying */}
            <Card className="border-2 border-border">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Tipos de Ciberbullying
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {types.map((type, index) => (
                    <div key={index} className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm">{type.name}</h4>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Warning Signs */}
          <div className="space-y-8">
            <Card className="border-2 border-destructive/30 bg-destructive/5">
              <CardHeader className="bg-destructive/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  Señales de Alerta 🚨
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  Si notas estos cambios en ti o en alguien cercano, podría ser una señal:
                </p>
                <ul className="space-y-2">
                  {signs.map((sign, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What to Do */}
            <Accordion type="single" collapsible className="space-y-4">
              {whatToDo.map((section, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-secondary/30 rounded-xl overflow-hidden bg-secondary/5"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/10 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ol className="space-y-2 list-decimal list-inside">
                      {section.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-foreground text-sm">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Helplines */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground font-cute text-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
              Líneas de Ayuda - ¡Siempre Hay Alguien Para Ti! 📞
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {helplines.map((line, index) => (
                <div key={index} className="bg-card rounded-xl p-4 text-center border border-border">
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-bold text-foreground text-sm">{line.name}</h4>
                  <p className="text-xl font-bold text-primary mt-1">{line.number}</p>
                  <p className="text-xs text-muted-foreground">{line.available}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Positive Message */}
        <div className="text-center bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 md:p-12">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-soft" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-cute">
            Recuerda: Eres Valioso/a 💖
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nadie tiene derecho a hacerte sentir mal. Si estás pasando por una situación difícil, 
            <strong className="text-foreground"> busca ayuda</strong>. Hablar con alguien de confianza 
            es el primer paso para sentirte mejor. <strong className="text-primary">¡No estás solo/a!</strong>
          </p>
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-6 h-6 text-primary animate-heart-beat" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberbullyingSection;
