import { AlertTriangle, Eye, Heart, Search, Video, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import deepfakeImg from "@/assets/deepfake-illustration.png";

const DeepfakesSection = () => {
  const warningSignals = [
    { signal: "Movimientos faciales poco naturales", icon: Eye },
    { signal: "Parpadeo irregular o inexistente", icon: Eye },
    { signal: "Bordes borrosos alrededor del rostro", icon: Search },
    { signal: "Iluminación inconsistente", icon: Video },
    { signal: "Audio desincronizado con los labios", icon: Video },
    { signal: "Texturas de piel demasiado suaves", icon: Search },
  ];

  const examples = [
    {
      title: "Videos de celebridades falsas",
      description: "Los estafadores crean videos falsos de famosos promocionando productos fraudulentos o diciendo cosas que nunca dijeron.",
      realWorld: "En 2023, circularon deepfakes de influencers latinoamericanos promocionando estafas de criptomonedas.",
      dangerous: true,
    },
    {
      title: "Suplantación de identidad",
      description: "Alguien podría usar tu foto para crear un video falso tuyo diciendo o haciendo cosas inapropiadas.",
      realWorld: "Se han reportado casos de estudiantes cuyas fotos fueron usadas para crear contenido falso y dañar su reputación.",
      dangerous: true,
    },
    {
      title: "Noticias falsas",
      description: "Videos manipulados de políticos o figuras públicas diciendo cosas controversiales para generar desinformación.",
      realWorld: "Durante elecciones, aparecen videos falsos de candidatos con declaraciones inventadas.",
      dangerous: true,
    },
  ];

  return (
    <section id="deepfakes" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Amenaza Digital
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Deepfakes: Cuando la{" "}
            <span className="text-primary">Realidad se Distorsiona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Los deepfakes son videos o imágenes creados con inteligencia artificial que pueden hacer 
            parecer que alguien dice o hace algo que nunca ocurrió.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* What are Deepfakes Card */}
            <Card className="border-2 border-primary/30 bg-card overflow-hidden">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <Video className="w-6 h-6 text-primary" />
                  ¿Qué son exactamente?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Los <strong className="text-foreground">deepfakes</strong> utilizan inteligencia artificial 
                  para superponer rostros, modificar voces o alterar videos de manera muy realista. El término 
                  viene de "deep learning" (aprendizaje profundo) + "fake" (falso).
                </p>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <p className="text-sm text-foreground flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>¡Cuidado!</strong> Cada vez son más difíciles de detectar y pueden usarse 
                      para dañar reputaciones, crear noticias falsas o cometer fraudes.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Warning Signals */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <Search className="w-6 h-6 text-primary" />
                  Señales de Alerta 🔍
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {warningSignals.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item.signal}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Image and Tips */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={deepfakeImg} 
                alt="Ilustración sobre los peligros de los deepfakes"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <Heart className="absolute -top-3 -right-3 w-8 h-8 text-primary animate-heart-beat" />
            </div>

            {/* How to Protect Yourself */}
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardHeader className="bg-secondary/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  ¿Cómo Protegerte?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {[
                  "Verifica siempre la fuente del video antes de compartir",
                  "Busca la noticia en medios oficiales y confiables",
                  "Usa herramientas de verificación como InVID o FotoForensics",
                  "Reporta el contenido sospechoso a la plataforma",
                  "No compartas videos impactantes sin verificar su autenticidad",
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Real Examples Accordion */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-cute">
            Ejemplos Reales de Deepfakes 🎭
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {examples.map((example, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-xl overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{example.title}</span>
                    {example.dangerous && (
                      <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full">
                        Peligroso
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground mb-3">{example.description}</p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong className="text-primary">Caso real:</strong> {example.realWorld}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* External Resources */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Recursos para Verificar Contenido</h4>
                  <p className="text-sm text-muted-foreground">Herramientas gratuitas para detectar deepfakes</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://www.invid-project.eu/tools-and-services/invid-verification-plugin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-card px-4 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors border border-primary/30"
                >
                  InVID Plugin
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://fotoforensics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-card px-4 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors border border-primary/30"
                >
                  FotoForensics
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeepfakesSection;
