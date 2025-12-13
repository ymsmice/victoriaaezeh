import { BookOpen, Heart, ExternalLink, Youtube, FileText, Globe, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resources = [
    {
      category: "Páginas Educativas",
      icon: Globe,
      color: "primary",
      items: [
        { name: "Internet Segura for Kids (IS4K)", url: "https://www.is4k.es/", description: "Centro de seguridad para menores en España" },
        { name: "Pantallas Amigas", url: "https://www.pantallasamigas.net/", description: "Uso seguro de internet y ciudadanía digital" },
        { name: "Ciberseguridad para familias", url: "https://www.incibe.es/", description: "INCIBE - Instituto de Ciberseguridad" },
      ],
    },
    {
      category: "Videos y Tutoriales",
      icon: Youtube,
      color: "destructive",
      items: [
        { name: "Ciberseguridad explicada", url: "https://www.youtube.com/", description: "Videos educativos sobre seguridad online" },
        { name: "Tutoriales de privacidad", url: "https://www.youtube.com/", description: "Cómo configurar tus redes sociales" },
        { name: "Casos reales de phishing", url: "https://www.youtube.com/", description: "Aprende a identificar estafas" },
      ],
    },
    {
      category: "Guías y Documentos",
      icon: FileText,
      color: "secondary",
      items: [
        { name: "Guía de Ciberseguridad Escolar", url: "#", description: "PDF descargable para estudiantes" },
        { name: "Manual para Padres", url: "#", description: "Cómo proteger a tus hijos online" },
        { name: "Infografías de Seguridad", url: "#", description: "Material visual para compartir" },
      ],
    },
    {
      category: "Juegos Educativos",
      icon: Gamepad2,
      color: "accent",
      items: [
        { name: "Cyberscouts", url: "#", description: "Aprende jugando sobre seguridad" },
        { name: "Quiz de Phishing", url: "#quiz", description: "Pon a prueba tus conocimientos" },
        { name: "Escape Room Digital", url: "#", description: "Resuelve el misterio de la ciberseguridad" },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
      destructive: { bg: "bg-destructive/10", text: "text-destructive", border: "border-destructive/30" },
      secondary: { bg: "bg-secondary/20", text: "text-secondary-foreground", border: "border-secondary/30" },
      accent: { bg: "bg-accent", text: "text-accent-foreground", border: "border-accent-foreground/30" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Recursos Adicionales
            <Heart className="w-4 h-4 animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Sigue{" "}
            <span className="text-primary">Aprendiendo</span> 📚
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aquí encontrarás enlaces a páginas, videos y materiales educativos 
            para seguir aprendiendo sobre ciberseguridad.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const colorClasses = getColorClasses(resource.color);
            return (
              <Card key={index} className={`border-2 ${colorClasses.border} hover:shadow-xl transition-all duration-300`}>
                <CardHeader className={colorClasses.bg}>
                  <CardTitle className="flex items-center gap-3 text-foreground font-cute">
                    <resource.icon className={`w-6 h-6 ${colorClasses.text}`} />
                    {resource.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.url}
                          target={item.url.startsWith("http") ? "_blank" : undefined}
                          rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <Heart className={`w-4 h-4 ${colorClasses.text} mt-1 flex-shrink-0 group-hover:animate-heart-beat`} />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </span>
                              {item.url.startsWith("http") && (
                                <ExternalLink className="w-3 h-3 text-muted-foreground" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30">
            <CardContent className="p-8">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2 font-cute">
                ¿Quieres esta guía en PDF? 📖
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Descarga toda esta información en formato PDF para tenerla siempre a mano 
                o compartirla con tus compañeros y familia.
              </p>
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                <FileText className="w-5 h-5" />
                Descargar Guía Completa
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
