import { Eye, Heart, Shield, Lock, Wifi, Settings, Smartphone, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import privacyImg from "@/assets/privacy-illustration.png";

const PrivacySection = () => {
  const dataTypes = [
    { icon: Eye, name: "Historial de navegación", risk: "Alto" },
    { icon: Lock, name: "Contraseñas guardadas", risk: "Crítico" },
    { icon: Smartphone, name: "Ubicación", risk: "Alto" },
    { icon: Settings, name: "Preferencias personales", risk: "Medio" },
  ];

  const tips = [
    {
      title: "Revisa los permisos de apps",
      description: "Muchas apps piden acceso a cámara, micrófono y ubicación sin necesitarlo. Revisa y desactiva los que no uses.",
      icon: Smartphone,
    },
    {
      title: "Usa navegación privada",
      description: "El modo incógnito evita que se guarde tu historial en el dispositivo (aunque el proveedor de internet aún lo ve).",
      icon: Eye,
    },
    {
      title: "Cuidado con WiFi público",
      description: "Evita ingresar datos sensibles cuando uses redes WiFi públicas. Usa una VPN si es posible.",
      icon: Wifi,
    },
    {
      title: "Configura la privacidad del navegador",
      description: "Bloquea rastreadores, cookies de terceros y activa 'Do Not Track' en tu navegador.",
      icon: Settings,
    },
  ];

  const privacyChecklist = [
    "Reviso regularmente los ajustes de privacidad de mis redes",
    "No comparto mi ubicación en tiempo real públicamente",
    "Tengo contraseñas diferentes para cada cuenta",
    "Uso autenticación de dos factores (2FA)",
    "Leo los permisos antes de instalar apps",
    "No hago clic en links sospechosos",
    "Tengo mi dispositivo con contraseña o biometría",
    "Hago respaldos de mi información importante",
  ];

  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Privacidad Online
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Tu{" "}
            <span className="text-primary">Privacidad</span>{" "}
            es un Derecho 🔒
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En internet, tus datos son valiosos. Aprende a proteger tu información personal 
            y a tomar control de lo que compartes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={privacyImg} 
                alt="Ilustración sobre privacidad online con escudo y candado"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <Heart className="absolute -top-3 -left-3 w-8 h-8 text-primary animate-heart-beat" />
            </div>

            {/* What Data is Collected */}
            <Card className="border-2 border-primary/30">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <Eye className="w-6 h-6 text-primary" />
                  ¿Qué Datos Recopilan de Ti? 👀
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {dataTypes.map((data, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="p-2 bg-primary/20 rounded-full">
                        <data.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{data.name}</p>
                        <span className={`text-xs ${
                          data.risk === "Crítico" ? "text-destructive" : 
                          data.risk === "Alto" ? "text-orange-500" : "text-muted-foreground"
                        }`}>
                          Riesgo: {data.risk}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Tips */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-cute">
              Consejos de Privacidad 💡
            </h3>
            {tips.map((tip, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/20 rounded-full flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy Checklist */}
        <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 border-2 border-secondary/30">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center gap-2 text-foreground font-cute justify-center">
              <CheckCircle className="w-6 h-6 text-secondary-foreground" />
              Checklist de Privacidad ✅
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-2">
              ¿Cuántas de estas prácticas ya sigues?
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {privacyChecklist.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* VPN Info */}
        <div className="mt-12 text-center">
          <Card className="inline-block border-2 border-accent bg-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-foreground/10 rounded-full">
                  <Wifi className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-foreground">¿Qué es una VPN?</h4>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Una VPN (Red Privada Virtual) encripta tu conexión a internet, 
                    haciendo más difícil que otros vean lo que haces online. 
                    Es especialmente útil en redes WiFi públicas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
