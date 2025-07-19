import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dumbbell, 
  Clock, 
  Target, 
  Home,
  Calendar,
  Zap,
  Repeat
} from "lucide-react";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  description?: string;
}

interface WorkoutPlan {
  id: string;
  title: string;
  frequency: string;
  type: string;
  exercises: {
    [day: string]: Exercise[];
  };
}

const workoutPlans: WorkoutPlan[] = [
  {
    id: "3x-week",
    title: "Treino 3x/Semana",
    frequency: "3x por semana",
    type: "Musculação",
    exercises: {
      "Dia A - Peito, Tríceps, Ombro": [
        { name: "Supino Reto", sets: "4", reps: "8-12", rest: "60-90s" },
        { name: "Supino Inclinado", sets: "3", reps: "8-12", rest: "60s" },
        { name: "Crucifixo", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Desenvolvimento Militar", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Elevação Lateral", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Tríceps Testa", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Tríceps Pulley", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia B - Costas, Bíceps": [
        { name: "Puxada Frontal", sets: "4", reps: "8-12", rest: "60-90s" },
        { name: "Remada Curvada", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Remada Unilateral", sets: "3", reps: "10-12", rest: "45s" },
        { name: "Pullover", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Rosca Direta", sets: "4", reps: "10-15", rest: "45s" },
        { name: "Rosca Martelo", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Rosca 21", sets: "2", reps: "21", rest: "60s" }
      ],
      "Dia C - Pernas, Abdome": [
        { name: "Agachamento", sets: "4", reps: "8-15", rest: "90s" },
        { name: "Leg Press", sets: "4", reps: "12-20", rest: "60s" },
        { name: "Extensora", sets: "3", reps: "15-20", rest: "45s" },
        { name: "Flexora", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Panturrilha em Pé", sets: "4", reps: "15-25", rest: "30s" },
        { name: "Abdominal Supra", sets: "3", reps: "20-30", rest: "30s" },
        { name: "Prancha", sets: "3", reps: "30-60s", rest: "30s" }
      ]
    }
  },
  {
    id: "4x-week",
    title: "Treino 4x/Semana",
    frequency: "4x por semana",
    type: "Musculação",
    exercises: {
      "Dia A - Peito, Tríceps": [
        { name: "Supino Reto", sets: "4", reps: "6-10", rest: "90s" },
        { name: "Supino Inclinado", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Supino Declinado", sets: "3", reps: "10-12", rest: "60s" },
        { name: "Crucifixo Inclinado", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Paralelas", sets: "3", reps: "8-15", rest: "60s" },
        { name: "Tríceps Testa", sets: "4", reps: "10-15", rest: "45s" },
        { name: "Tríceps Francês", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia B - Costas, Bíceps": [
        { name: "Barra Fixa", sets: "4", reps: "6-12", rest: "90s" },
        { name: "Puxada Frontal", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Remada Curvada", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Remada Cavalinho", sets: "3", reps: "10-12", rest: "45s" },
        { name: "Pullover", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Rosca Direta", sets: "4", reps: "8-12", rest: "45s" },
        { name: "Rosca Concentrada", sets: "3", reps: "10-15", rest: "45s" }
      ],
      "Dia C - Ombros, Abdome": [
        { name: "Desenvolvimento Militar", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Desenvolvimento Arnold", sets: "3", reps: "10-12", rest: "60s" },
        { name: "Elevação Lateral", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Elevação Posterior", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Encolhimento", sets: "3", reps: "12-20", rest: "45s" },
        { name: "Abdominal Supra", sets: "4", reps: "20-30", rest: "30s" },
        { name: "Abdominal Oblíquo", sets: "3", reps: "15-20", rest: "30s" }
      ],
      "Dia D - Pernas": [
        { name: "Agachamento", sets: "5", reps: "6-12", rest: "2min" },
        { name: "Leg Press", sets: "4", reps: "12-20", rest: "90s" },
        { name: "Afundo", sets: "3", reps: "10-15", rest: "60s" },
        { name: "Extensora", sets: "4", reps: "15-20", rest: "45s" },
        { name: "Flexora", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Stiff", sets: "3", reps: "10-15", rest: "60s" },
        { name: "Panturrilha", sets: "5", reps: "15-25", rest: "30s" }
      ]
    }
  },
  {
    id: "5x-week",
    title: "Treino 5x/Semana",
    frequency: "5x por semana",
    type: "Musculação",
    exercises: {
      "Dia 1 - Peito": [
        { name: "Supino Reto", sets: "5", reps: "6-10", rest: "2min" },
        { name: "Supino Inclinado", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Supino Declinado", sets: "4", reps: "10-12", rest: "60s" },
        { name: "Crucifixo Reto", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Crucifixo Inclinado", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Paralelas", sets: "3", reps: "10-15", rest: "60s" },
        { name: "Pullover", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia 2 - Costas": [
        { name: "Barra Fixa", sets: "5", reps: "6-12", rest: "2min" },
        { name: "Puxada Frontal", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Remada Curvada", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Remada Unilateral", sets: "4", reps: "10-12", rest: "60s" },
        { name: "Remada Cavalinho", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Puxada Triangular", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Pullover", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia 3 - Ombros": [
        { name: "Desenvolvimento Militar", sets: "5", reps: "6-10", rest: "90s" },
        { name: "Desenvolvimento Arnold", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Elevação Lateral", sets: "5", reps: "12-15", rest: "45s" },
        { name: "Elevação Frontal", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Elevação Posterior", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Encolhimento", sets: "4", reps: "15-20", rest: "45s" },
        { name: "Upright Row", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia 4 - Braços": [
        { name: "Rosca Direta", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Tríceps Testa", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Rosca Martelo", sets: "4", reps: "10-15", rest: "45s" },
        { name: "Tríceps Francês", sets: "4", reps: "10-15", rest: "45s" },
        { name: "Rosca Concentrada", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Tríceps Pulley", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Rosca 21", sets: "2", reps: "21", rest: "60s" }
      ],
      "Dia 5 - Pernas": [
        { name: "Agachamento", sets: "5", reps: "6-12", rest: "2-3min" },
        { name: "Leg Press", sets: "4", reps: "15-25", rest: "2min" },
        { name: "Afundo", sets: "4", reps: "12-15", rest: "90s" },
        { name: "Extensora", sets: "4", reps: "15-20", rest: "45s" },
        { name: "Flexora", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Stiff", sets: "4", reps: "10-15", rest: "90s" },
        { name: "Panturrilha", sets: "5", reps: "20-30", rest: "30s" }
      ]
    }
  },
  {
    id: "6x-week",
    title: "Treino 6x/Semana",
    frequency: "6x por semana",
    type: "Musculação",
    exercises: {
      "Dia 1 - Peito, Tríceps": [
        { name: "Supino Reto", sets: "5", reps: "6-10", rest: "2min" },
        { name: "Supino Inclinado", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Supino Declinado", sets: "3", reps: "10-12", rest: "60s" },
        { name: "Crucifixo", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Tríceps Testa", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Tríceps Francês", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Tríceps Pulley", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia 2 - Costas, Bíceps": [
        { name: "Barra Fixa", sets: "5", reps: "6-12", rest: "2min" },
        { name: "Puxada Frontal", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Remada Curvada", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Remada Unilateral", sets: "3", reps: "10-12", rest: "60s" },
        { name: "Rosca Direta", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Rosca Martelo", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Rosca Concentrada", sets: "3", reps: "12-15", rest: "45s" }
      ],
      "Dia 3 - Pernas (Quadríceps)": [
        { name: "Agachamento", sets: "5", reps: "6-12", rest: "2-3min" },
        { name: "Leg Press", sets: "4", reps: "15-25", rest: "2min" },
        { name: "Hack Squat", sets: "4", reps: "12-20", rest: "90s" },
        { name: "Extensora", sets: "4", reps: "15-25", rest: "45s" },
        { name: "Afundo", sets: "3", reps: "12-15", rest: "60s" },
        { name: "Sissy Squat", sets: "3", reps: "10-15", rest: "45s" }
      ],
      "Dia 4 - Ombros": [
        { name: "Desenvolvimento Militar", sets: "5", reps: "6-10", rest: "2min" },
        { name: "Desenvolvimento Arnold", sets: "4", reps: "8-12", rest: "90s" },
        { name: "Elevação Lateral", sets: "5", reps: "12-15", rest: "45s" },
        { name: "Elevação Posterior", sets: "4", reps: "12-15", rest: "45s" },
        { name: "Elevação Frontal", sets: "3", reps: "12-15", rest: "45s" },
        { name: "Encolhimento", sets: "4", reps: "15-20", rest: "45s" }
      ],
      "Dia 5 - Pernas (Posteriores)": [
        { name: "Stiff", sets: "5", reps: "8-12", rest: "90s" },
        { name: "Flexora Deitado", sets: "4", reps: "12-15", rest: "60s" },
        { name: "Flexora Sentado", sets: "4", reps: "12-15", rest: "60s" },
        { name: "Mesa Flexora", sets: "3", reps: "15-20", rest: "45s" },
        { name: "Agachamento Sumô", sets: "4", reps: "12-20", rest: "90s" },
        { name: "Panturrilha", sets: "5", reps: "20-30", rest: "30s" }
      ],
      "Dia 6 - Braços, Abdome": [
        { name: "Rosca Direta", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Tríceps Testa", sets: "4", reps: "8-12", rest: "60s" },
        { name: "Rosca Martelo", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Tríceps Francês", sets: "3", reps: "10-15", rest: "45s" },
        { name: "Abdominal Supra", sets: "4", reps: "25-40", rest: "30s" },
        { name: "Abdominal Oblíquo", sets: "3", reps: "20-30", rest: "30s" },
        { name: "Prancha", sets: "3", reps: "45-90s", rest: "30s" }
      ]
    }
  },
  {
    id: "home-workout",
    title: "Treino em Casa",
    frequency: "3-5x por semana",
    type: "Funcional",
    exercises: {
      "Treino A - Corpo Superior": [
        { name: "Flexão de Braço", sets: "4", reps: "8-20", rest: "60s" },
        { name: "Flexão Diamante", sets: "3", reps: "5-15", rest: "60s" },
        { name: "Pike Push-up", sets: "3", reps: "8-15", rest: "45s" },
        { name: "Tríceps no Sofá", sets: "3", reps: "10-20", rest: "45s" },
        { name: "Prancha", sets: "3", reps: "30-60s", rest: "30s" },
        { name: "Mountain Climber", sets: "3", reps: "20-40", rest: "30s" }
      ],
      "Treino B - Corpo Inferior": [
        { name: "Agachamento", sets: "4", reps: "15-30", rest: "60s" },
        { name: "Agachamento Sumô", sets: "3", reps: "15-25", rest: "60s" },
        { name: "Afundo", sets: "3", reps: "10-20", rest: "45s" },
        { name: "Agachamento Búlgaro", sets: "3", reps: "8-15", rest: "45s" },
        { name: "Panturrilha em Pé", sets: "4", reps: "20-40", rest: "30s" },
        { name: "Glúteo 4 Apoios", sets: "3", reps: "15-25", rest: "30s" }
      ],
      "Treino C - Full Body": [
        { name: "Burpee", sets: "4", reps: "5-15", rest: "90s" },
        { name: "Agachamento com Salto", sets: "3", reps: "10-20", rest: "60s" },
        { name: "Flexão + T", sets: "3", reps: "8-15", rest: "60s" },
        { name: "Prancha Lateral", sets: "3", reps: "20-45s", rest: "30s" },
        { name: "Jumping Jacks", sets: "3", reps: "30-60", rest: "30s" },
        { name: "Abdominal Bicicleta", sets: "3", reps: "20-40", rest: "30s" }
      ]
    }
  }
];

const Workout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Planos de Treino
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Escolha o treino ideal para sua frequência e objetivo
          </p>
        </div>

        {/* Workout Plans Tabs */}
        <Tabs defaultValue="3x-week" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {workoutPlans.map((plan) => (
              <TabsTrigger 
                key={plan.id} 
                value={plan.id}
                className="flex items-center gap-2 text-xs sm:text-sm"
              >
                {plan.type === 'Funcional' ? <Home className="w-4 h-4" /> : <Dumbbell className="w-4 h-4" />}
                <span className="hidden sm:inline">{plan.title}</span>
                <span className="sm:hidden">{plan.frequency.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {workoutPlans.map((plan) => (
            <TabsContent key={plan.id} value={plan.id}>
              <Card className="bg-gradient-card backdrop-blur-md border border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {plan.type === 'Funcional' ? <Home className="w-6 h-6 text-success" /> : <Dumbbell className="w-6 h-6 text-primary" />}
                    {plan.title}
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {plan.frequency}
                    </Badge>
                    <Badge variant="outline">
                      {plan.type}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Plano de treino estruturado para {plan.frequency.toLowerCase()}
                  </p>
                </CardHeader>
              </Card>

              <div className="space-y-6">
                {Object.entries(plan.exercises).map(([dayName, exercises]) => (
                  <Card 
                    key={dayName}
                    className="bg-gradient-card backdrop-blur-md border border-border/50"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        {dayName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {exercises.map((exercise, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/30 hover:bg-card/70 transition-all duration-300"
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold text-card-foreground mb-1">
                                {exercise.name}
                              </h4>
                              {exercise.description && (
                                <p className="text-sm text-muted-foreground">
                                  {exercise.description}
                                </p>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Repeat className="w-4 h-4 text-primary" />
                                <span className="text-muted-foreground">
                                  {exercise.sets} séries
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Target className="w-4 h-4 text-success" />
                                <span className="text-muted-foreground">
                                  {exercise.reps} reps
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-warning" />
                                <span className="text-muted-foreground">
                                  {exercise.rest}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tips */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-warning" />
                Dicas de Treino
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sempre faça aquecimento antes do treino</li>
                <li>• Mantenha a forma correta dos exercícios</li>
                <li>• Descanse entre 48-72h entre treinos do mesmo grupo muscular</li>
                <li>• Hidrate-se durante o treino</li>
                <li>• Progrida gradualmente nas cargas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Duração Recomendada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Treino 3x/semana: 45-60 minutos</li>
                <li>• Treino 4x/semana: 45-60 minutos</li>
                <li>• Treino 5x/semana: 60-75 minutos</li>
                <li>• Treino 6x/semana: 45-60 minutos</li>
                <li>• Treino em casa: 30-45 minutos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Workout;