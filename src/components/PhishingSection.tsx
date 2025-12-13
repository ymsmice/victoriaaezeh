import { Fish, Mail, AlertTriangle, Heart, CheckCircle, XCircle, Smartphone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import phishingImg from "@/assets/phishing-illustration.png";

const PhishingSection = () => {
  const phishingTypes = [
    {
      title: "Email Phishing",
      icon: Mail,
      description: "Correos que parecen de bancos, Netflix, o redes sociales pidiendo que actualices tu información.",
      example: "\"Tu cuenta de Netflix será suspendida. Haz clic aquí para verificar tu pago.\"",
    },
    {
      title: "SMS Phishing (Smishing)",
      icon: Smartphone,
      description: "Mensajes de texto urgentes sobre paquetes, premios o problemas con tu cuenta bancaria.",
      example: "\"Tienes un paquete pendiente. Paga $2 de envío aquí: link-sospechoso.com\"",
    },
    {
      title: "Redes Sociales",
      icon: Heart,
      description: "Mensajes directos con links sospechosos, ofertas increíbles o supuestos sorteos.",
      example: "\"¡Ganaste un iPhone! Ingresa tus datos aquí para reclamarlo.\"",
    },
  ];

  const redFlags = [
    { text: "URL sospechosa (revisar antes de hacer clic)", correct: false },
    { text: "Errores de ortografía y gramática", correct: false },
    { text: "Urgencia extrema para actuar rápido", correct: false },
    { text: "Solicitud de datos personales o contraseñas", correct: false },
    { text: "Remitente desconocido o con email raro", correct: false },
    { text: "Ofertas demasiado buenas para ser verdad", correct: false },
  ];

  const safePractices = [
    "Nunca hagas clic en links de mensajes no solicitados",
    "Verifica el remitente y la URL antes de ingresar datos",
    "Usa autenticación de dos factores (2FA) siempre que sea posible",
    "Reporta mensajes sospechosos como spam o phishing",
    "Contacta directamente a la empresa por canales oficiales",
    "Mantén tu navegador y antivirus actualizados",
  ];

  return (
    <section id="phishing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Fish className="w-4 h-4" />
            Amenaza Común
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Phishing: No Muerdas el{" "}
            <span className="text-primary">Anzuelo</span> 🎣
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            El phishing es una técnica que usan los ciberdelincuentes para engañarte y robar 
            tu información personal haciéndose pasar por empresas o personas de confianza.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={phishingImg} 
              alt="Ilustración sobre phishing mostrando un anzuelo pescando datos"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl animate-float"
            />
            <Heart className="absolute -top-3 -left-3 w-8 h-8 text-primary animate-heart-beat" />
            <Heart className="absolute -bottom-3 -right-3 w-6 h-6 text-secondary animate-heart-beat" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Right - Phishing Types */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground font-cute">
              Tipos de Phishing más Comunes 📧
            </h3>
            {phishingTypes.map((type, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{type.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                      <div className="bg-destructive/10 rounded-lg p-3 border border-destructive/20">
                        <p className="text-sm text-foreground italic">
                          <span className="text-destructive font-medium">Ejemplo: </span>
                          {type.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Red Flags and Safe Practices */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Red Flags */}
          <Card className="border-2 border-destructive/30 bg-destructive/5">
            <CardHeader className="bg-destructive/10">
              <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Señales de Alerta 🚨
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{flag.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Safe Practices */}
          <Card className="border-2 border-secondary/30 bg-secondary/5">
            <CardHeader className="bg-secondary/10">
              <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                Prácticas Seguras ✅
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {safePractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Example */}
        <Card className="border-2 border-primary/30 bg-card overflow-hidden">
          <CardHeader className="bg-primary/10">
            <CardTitle className="flex items-center gap-2 text-foreground font-cute">
              <Mail className="w-6 h-6 text-primary" />
              Ejemplo Interactivo: ¿Es Phishing? 🤔
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-muted rounded-lg p-4 mb-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-2 border-b border-border pb-2">
                <span className="text-muted-foreground">De:</span>
                <span className="text-destructive">soporte@netf1ix-verificacion.com</span>
              </div>
              <div className="flex items-center gap-2 mb-2 border-b border-border pb-2">
                <span className="text-muted-foreground">Asunto:</span>
                <span className="text-foreground">⚠️ URGENTE: Tu cuenta será suspendida en 24 horas!!!</span>
              </div>
              <div className="mt-4 text-foreground">
                <p>Estimado usuario,</p>
                <p className="mt-2">
                  Hemos detectado un problema con tu metodo de pago. Tu cuenta de Netflix sera 
                  suspendida permanentemente si no actualizas tus datos en las proximas 24 horas.
                </p>
                <p className="mt-2">
                  Haz clic aquí para verificar: 
                  <span className="text-accent-foreground underline ml-1">http://netf1ix-verify.suspicious-domain.com/login</span>
                </p>
                <p className="mt-4">El equipo de Netfix</p>
              </div>
            </div>
            
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              <h5 className="font-bold text-destructive flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5" />
                ¡Este es un correo de PHISHING! Señales:
              </h5>
              <ul className="text-sm text-foreground space-y-1 ml-7">
                <li>• Email falso: "netf<strong>1</strong>ix" en lugar de "netflix"</li>
                <li>• Errores de ortografía: "metodo", "proximas", "Netfix"</li>
                <li>• Urgencia extrema: "24 horas" de presión</li>
                <li>• URL sospechosa que no es de Netflix oficial</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PhishingSection;
