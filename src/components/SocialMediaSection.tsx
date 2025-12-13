import { Share2, Heart, Lock, Eye, Users, MapPin, Camera, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import socialMediaImg from "@/assets/social-media-illustration.png";

const SocialMediaSection = () => {
  const platforms = [
    {
      name: "Instagram",
      tips: [
        "Configura tu cuenta como privada",
        "Revisa quién puede etiquetarte en fotos",
        "Desactiva el estado de actividad",
        "No compartas tu ubicación en stories",
      ],
    },
    {
      name: "TikTok",
      tips: [
        "Activa el modo privado de cuenta",
        "Limita quién puede hacer dúos contigo",
        "Desactiva la descarga de tus videos",
        "Filtra comentarios ofensivos",
      ],
    },
    {
      name: "WhatsApp",
      tips: [
        "Oculta tu última conexión",
        "Configura quién ve tu foto de perfil",
        "Activa la verificación en dos pasos",
        "No abras links de desconocidos",
      ],
    },
  ];

  const doAndDont = {
    do: [
      { text: "Revisa los ajustes de privacidad regularmente", icon: Lock },
      { text: "Piensa antes de publicar algo", icon: Eye },
      { text: "Acepta solo a personas que conoces", icon: Users },
      { text: "Reporta contenido o cuentas sospechosas", icon: AlertTriangle },
    ],
    dont: [
      { text: "Compartir tu ubicación en tiempo real", icon: MapPin },
      { text: "Publicar fotos de documentos o entradas", icon: Camera },
      { text: "Aceptar solicitudes de extraños", icon: Users },
      { text: "Compartir información personal sensible", icon: Eye },
    ],
  };

  return (
    <section id="social-media" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Share2 className="w-4 h-4" />
            Redes Sociales
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Protege tu{" "}
            <span className="text-primary">Vida Digital</span> 📱
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las redes sociales son geniales para conectar, pero es importante configurarlas 
            correctamente para proteger tu privacidad y seguridad.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={socialMediaImg} 
              alt="Teléfono con escudo protegiendo redes sociales"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl animate-float"
            />
            <Heart className="absolute -top-3 -right-3 w-8 h-8 text-primary animate-heart-beat" />
            <Heart className="absolute -bottom-3 -left-3 w-6 h-6 text-secondary animate-heart-beat" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Do and Don't */}
          <div className="space-y-6 order-1 lg:order-2">
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardHeader className="bg-secondary/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                  Lo que SÍ debes hacer ✅
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {doAndDont.do.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/20 rounded-full">
                        <item.icon className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/30 bg-destructive/5">
              <CardHeader className="bg-destructive/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  Lo que NO debes hacer 🚫
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {doAndDont.dont.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-destructive/20 rounded-full">
                        <item.icon className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Platform Specific Tips */}
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-cute">
          Configuración por Plataforma 🔧
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-foreground font-cute flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {platform.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Huella Digital Warning */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/20 rounded-full mb-4">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4 font-cute">
                Tu Huella Digital es Permanente 👣
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
                Todo lo que publicas en internet puede quedarse allí para siempre, incluso si lo borras. 
                Antes de publicar, pregúntate: <strong className="text-foreground">"¿Estaría bien que mi familia, 
                mis profesores o un futuro empleador vieran esto?"</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  📸 Las fotos permanecen
                </span>
                <span className="px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                  💬 Los comentarios se guardan
                </span>
                <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  📍 La ubicación se registra
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialMediaSection;
