import { useState } from "react";
import { HelpCircle, Heart, CheckCircle, XCircle, Trophy, RotateCcw, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions: Question[] = [
    {
      question: "¿Qué es un deepfake?",
      options: [
        "Un tipo de virus informático",
        "Un video o imagen manipulado con IA para parecer real",
        "Una contraseña muy segura",
        "Un juego de realidad virtual"
      ],
      correct: 1,
      explanation: "Los deepfakes son contenidos audiovisuales generados por inteligencia artificial que pueden hacer parecer que alguien dice o hace algo que nunca ocurrió."
    },
    {
      question: "¿Cuál es una señal de un correo de phishing?",
      options: [
        "Viene de una dirección oficial de la empresa",
        "No tiene errores de ortografía",
        "Te pide actuar con urgencia y hacer clic en un enlace",
        "Te saluda por tu nombre completo"
      ],
      correct: 2,
      explanation: "Los correos de phishing suelen crear urgencia para que actúes sin pensar. Siempre verifica el remitente y no hagas clic en enlaces sospechosos."
    },
    {
      question: "¿Qué hace que una contraseña sea segura?",
      options: [
        "Usar tu fecha de nacimiento",
        "Tener solo letras minúsculas",
        "Combinar mayúsculas, minúsculas, números y símbolos",
        "Usar el nombre de tu mascota"
      ],
      correct: 2,
      explanation: "Una contraseña segura debe tener al menos 12 caracteres y combinar diferentes tipos de caracteres para ser más difícil de adivinar."
    },
    {
      question: "Si alguien te acosa en redes sociales, ¿qué deberías hacer primero?",
      options: [
        "Responder con insultos",
        "Ignorar y borrar tu cuenta",
        "Guardar evidencia, bloquear y reportar",
        "Publicar sobre esa persona"
      ],
      correct: 2,
      explanation: "Es importante guardar capturas de pantalla como evidencia, bloquear a la persona y reportar el comportamiento. También debes hablar con un adulto de confianza."
    },
    {
      question: "¿Qué información NUNCA debes compartir en redes sociales?",
      options: [
        "Tu comida favorita",
        "Tu dirección exacta y número de teléfono",
        "Una foto de tu mascota",
        "Tu película favorita"
      ],
      correct: 1,
      explanation: "Nunca compartas información personal sensible como tu dirección, número de teléfono, o documentos de identidad en redes sociales."
    },
    {
      question: "¿Qué es la autenticación de dos factores (2FA)?",
      options: [
        "Tener dos contraseñas iguales",
        "Un método que pide dos formas de verificar tu identidad",
        "Iniciar sesión desde dos dispositivos",
        "Compartir tu contraseña con dos personas"
      ],
      correct: 1,
      explanation: "La 2FA añade una capa extra de seguridad pidiendo algo que sabes (contraseña) y algo que tienes (como un código en tu teléfono)."
    },
  ];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { text: "¡Perfecto! Eres un experto en ciberseguridad 🏆", emoji: "🎉" };
    if (percentage >= 80) return { text: "¡Excelente! Tienes muy buenos conocimientos 🌟", emoji: "⭐" };
    if (percentage >= 60) return { text: "¡Bien! Pero puedes mejorar un poco más 💪", emoji: "👍" };
    return { text: "Necesitas repasar los temas. ¡No te rindas! 📚", emoji: "💕" };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Pon a Prueba tus Conocimientos
            <Heart className="w-4 h-4 animate-heart-beat" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cute">
            Quiz de{" "}
            <span className="text-primary">Ciberseguridad</span> 🧠
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Cuánto has aprendido? Responde estas preguntas para descubrirlo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!quizComplete ? (
            <Card className="border-2 border-primary/30 overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-primary/10 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Pregunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {score} correctas
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <CardContent className="p-6">
                {/* Question */}
                <h3 className="text-xl font-bold text-foreground mb-6 font-cute">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {questions[currentQuestion].options.map((option, index) => {
                    let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ";
                    
                    if (showResult) {
                      if (index === questions[currentQuestion].correct) {
                        buttonClass += "border-green-500 bg-green-50 text-green-700";
                      } else if (index === selectedAnswer) {
                        buttonClass += "border-destructive bg-destructive/10 text-destructive";
                      } else {
                        buttonClass += "border-border text-muted-foreground";
                      }
                    } else {
                      buttonClass += "border-border hover:border-primary/50 hover:bg-primary/5 text-foreground cursor-pointer";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            showResult && index === questions[currentQuestion].correct
                              ? "bg-green-500 text-white"
                              : showResult && index === selectedAnswer
                              ? "bg-destructive text-white"
                              : "bg-muted text-foreground"
                          }`}>
                            {showResult && index === questions[currentQuestion].correct ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : showResult && index === selectedAnswer ? (
                              <XCircle className="w-5 h-5" />
                            ) : (
                              String.fromCharCode(65 + index)
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className={`p-4 rounded-xl mb-6 ${
                    selectedAnswer === questions[currentQuestion].correct
                      ? "bg-green-50 border border-green-200"
                      : "bg-primary/10 border border-primary/20"
                  }`}>
                    <p className="text-sm text-foreground">
                      <strong className={selectedAnswer === questions[currentQuestion].correct ? "text-green-700" : "text-primary"}>
                        {selectedAnswer === questions[currentQuestion].correct ? "¡Correcto! " : "Explicación: "}
                      </strong>
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {/* Next Button */}
                {showResult && (
                  <Button 
                    onClick={nextQuestion}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
                    <Heart className="w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            /* Results */
            <Card className="border-2 border-primary/30 overflow-hidden text-center">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20 pb-8">
                <div className="relative">
                  <Trophy className="w-20 h-20 mx-auto text-primary mb-4" />
                  <Sparkles className="absolute top-0 right-1/4 w-6 h-6 text-secondary animate-pulse-soft" />
                  <Sparkles className="absolute top-4 left-1/4 w-4 h-4 text-primary animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
                </div>
                <CardTitle className="text-3xl font-cute text-foreground">
                  ¡Quiz Completado!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {score}/{questions.length}
                  </div>
                  <p className="text-xl text-foreground font-cute">
                    {getScoreMessage().text}
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.ceil(score / questions.length * 5) ? 'text-primary' : 'text-muted'} animate-heart-beat`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                        fill={i < Math.ceil(score / questions.length * 5) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={restartQuiz}
                    variant="outline"
                    className="gap-2 border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Intentar de Nuevo
                  </Button>
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <a href="#intro">
                      Repasar Temas
                      <Heart className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
