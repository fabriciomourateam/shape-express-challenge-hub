import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import TaskCard, { dailyTasks } from "@/components/TaskCard";
import StatsCard from "@/components/StatsCard";
import heroImage from "@/assets/hero-fitness.jpg";
import { 
  Trophy, 
  Target, 
  Flame, 
  Calendar,
  Star,
  Users,
  Zap,
  Award
} from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState(dailyTasks);
  const [currentDay, setCurrentDay] = useState(1);

  const handleTaskToggle = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            completed: !task.completed,
            progress: !task.completed ? task.progress + 1 : Math.max(0, task.progress - 1)
          }
        : task
    ));
  };

  const totalPoints = tasks.reduce((acc, task) => 
    acc + (task.completed ? task.points : 0), 0
  );

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  // Bonus por completar todas as tarefas
  const allTasksCompleted = completedTasks === totalTasks;
  const bonusPoints = allTasksCompleted ? 200 : 0;
  const finalScore = totalPoints + bonusPoints;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Desafio Shape Express
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                7 dias para transformar seus hábitos e conquistar seus objetivos
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Dia {currentDay}/7
                </Badge>
                <Badge className="bg-gradient-success text-success-foreground px-4 py-2 text-lg">
                  <Star className="w-4 h-4 mr-2" />
                  {finalScore} pontos
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Pontuação Total"
            value={finalScore}
            change={totalPoints}
            icon={Trophy}
            trend="up"
            color="primary"
          />
          <StatsCard
            title="Tarefas Concluídas"
            value={`${completedTasks}/${totalTasks}`}
            change={completionRate}
            icon={Target}
            trend={completionRate > 50 ? 'up' : 'neutral'}
            color="success"
          />
          <StatsCard
            title="Streak Atual"
            value={`${currentDay} dias`}
            icon={Flame}
            color="warning"
          />
          <StatsCard
            title="Posição no Ranking"
            value="#1"
            icon={Award}
            trend="up"
            color="primary"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tarefas Diárias */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Tarefas do Dia {currentDay}
              </h2>
              {allTasksCompleted && (
                <Badge className="bg-gradient-success text-success-foreground px-4 py-2 animate-glow-pulse">
                  <Zap className="w-4 h-4 mr-2" />
                  Bônus +{bonusPoints} pts!
                </Badge>
              )}
            </div>
            
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={handleTaskToggle}
                />
              ))}
            </div>

            {allTasksCompleted && (
              <Card className="mt-6 bg-gradient-success shadow-success border-success/50">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Parabéns! Dia Completo! 🎉
                  </h3>
                  <p className="text-white/90">
                    Você completou todas as tarefas e ganhou {bonusPoints} pontos extras!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar com Motivação e Próximos Passos */}
          <div className="space-y-6">
            {/* Card de Motivação */}
            <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-warning" />
                  Motivação Diária
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic">
                  "O sucesso é a soma de pequenos esforços repetidos dia após dia."
                </blockquote>
                <p className="text-sm text-muted-foreground mt-2">
                  - Robert Collier
                </p>
              </CardContent>
            </Card>

            {/* Próximos Desafios */}
            <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Próximos Passos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/diet'}
                >
                  Ver Plano Alimentar
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/workout'}
                >
                  Acessar Treinos
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/leaderboard'}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Ver Ranking
                </Button>
              </CardContent>
            </Card>

            {/* Call to Action Premium */}
            <Card className="bg-gradient-primary shadow-glow border border-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-white mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Quer Resultados Ainda Melhores?
                </h3>
                <p className="text-white/90 mb-4 text-sm">
                  Acompanhamento individual personalizado para participantes do desafio
                </p>
                <Button 
                  variant="glass" 
                  className="w-full bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  Conhecer Acompanhamento Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
