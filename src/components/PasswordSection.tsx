import { useState } from "react";
import { Lock, Heart, Eye, EyeOff, CheckCircle, XCircle, Sparkles, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import passwordImg from "@/assets/password-illustration.png";

const PasswordSection = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkPasswordStrength = (pwd: string) => {
    let score = 0;
    const checks = {
      length: pwd.length >= 12,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      numbers: /[0-9]/.test(pwd),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
    };

    if (checks.length) score += 20;
    if (checks.uppercase) score += 20;
    if (checks.lowercase) score += 20;
    if (checks.numbers) score += 20;
    if (checks.special) score += 20;

    return { score, checks };
  };

  const { score, checks } = checkPasswordStrength(password);

  const getStrengthLabel = (score: number) => {
    if (score === 0) return { label: "Sin evaluar", color: "bg-muted" };
    if (score < 40) return { label: "Muy débil 😰", color: "bg-destructive" };
    if (score < 60) return { label: "Débil 😕", color: "bg-orange-400" };
    if (score < 80) return { label: "Buena 😊", color: "bg-yellow-400" };
    return { label: "¡Excelente! 🎉", color: "bg-green-500" };
  };

  const strength = getStrengthLabel(score);

  const badPasswords = [
    "123456",
    "password",
    "qwerty",
    "nombre + año de nacimiento",
    "el nombre de tu mascota",
    "tu fecha de cumpleaños",
  ];

  const passwordTips = [
    {
      title: "Usa Frases Secretas",
      description: "En vez de una palabra, usa una frase que solo tú entiendas.",
      example: "MiGato@Come3Galletas!",
    },
    {
      title: "Método de la Historia",
      description: "Crea una mini historia y usa las iniciales.",
      example: "\"Mi perro Max cumple 5 años en Marzo\" → MpMc5aeM!",
    },
    {
      title: "Combina Palabras Random",
      description: "Junta palabras sin relación entre sí.",
      example: "Unicornio$Pizza#Luna42",
    },
  ];

  return (
    <section id="passwords" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lock className="w-4 h-4" />
            Protección Básica
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Contraseñas Seguras:{" "}
            <span className="text-primary">Tu Primera Defensa</span> 🔐
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una contraseña fuerte es como la cerradura de tu casa digital. 
            Aprende a crear contraseñas que sean seguras Y fáciles de recordar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Password Checker */}
          <div className="space-y-8">
            <Card className="border-2 border-primary/30">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute">
                  <Shield className="w-6 h-6 text-primary" />
                  Probador de Contraseñas 🔍
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Escribe una contraseña para probar..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-12 text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Fortaleza:</span>
                    <span className={`font-medium ${score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-destructive'}`}>
                      {strength.label}
                    </span>
                  </div>
                  <Progress value={score} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(checks).map(([key, value]) => {
                    const labels: Record<string, string> = {
                      length: "12+ caracteres",
                      uppercase: "Mayúsculas (A-Z)",
                      lowercase: "Minúsculas (a-z)",
                      numbers: "Números (0-9)",
                      special: "Símbolos (!@#...)",
                    };
                    return (
                      <div key={key} className={`flex items-center gap-2 p-2 rounded-lg ${value ? 'bg-green-50' : 'bg-muted'}`}>
                        {value ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className={`text-sm ${value ? 'text-green-700' : 'text-muted-foreground'}`}>
                          {labels[key]}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  ⚠️ Esta herramienta es solo educativa. No uses contraseñas reales aquí.
                </p>
              </CardContent>
            </Card>

            {/* Bad Passwords */}
            <Card className="border-2 border-destructive/30 bg-destructive/5">
              <CardHeader className="bg-destructive/10">
                <CardTitle className="flex items-center gap-2 text-foreground font-cute text-lg">
                  <XCircle className="w-5 h-5 text-destructive" />
                  Contraseñas que NUNCA debes usar 🚫
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {badPasswords.map((pwd, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm border border-destructive/20"
                    >
                      {pwd}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={passwordImg} 
                alt="Ilustración de un candado seguro con corazones"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
              />
              <Heart className="absolute -top-3 -right-3 w-8 h-8 text-primary animate-heart-beat" />
            </div>

            {/* Password Tips */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground font-cute flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Trucos para Crear Contraseñas Memorables
              </h3>
              
              {passwordTips.map((tip, index) => (
                <Card key={index} className="border-2 border-border hover:border-secondary/50 transition-all">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-foreground mb-1">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{tip.description}</p>
                    <div className="bg-secondary/10 rounded-lg px-3 py-2">
                      <code className="text-sm text-secondary-foreground">{tip.example}</code>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-primary/20 rounded-full flex-shrink-0">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2 font-cute">
                  💡 Consejo Pro: Usa un Gestor de Contraseñas
                </h4>
                <p className="text-muted-foreground">
                  Los gestores de contraseñas como <strong>Bitwarden</strong> (gratuito) o <strong>1Password</strong> 
                  guardan todas tus contraseñas de forma segura. Solo necesitas recordar una contraseña maestra 
                  y el gestor se encarga del resto. ¡Es como tener una caja fuerte digital!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PasswordSection;
