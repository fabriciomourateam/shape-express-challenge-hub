import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Moon, 
  Dumbbell, 
  Utensils, 
  Camera,
  CheckCircle,
  XCircle,
  Plus
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
  type: 'daily' | 'bonus';
  progress: number;
  maxProgress: number;
}

interface TaskCardProps {
  task: Task;
  onToggle: (taskId: string) => void;
}

const TaskCard = ({ task, onToggle }: TaskCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onToggle(task.id);
      setIsAnimating(false);
    }, 300);
  };

  const progressPercentage = (task.progress / task.maxProgress) * 100;

  return (
    <Card className={`
      bg-gradient-card backdrop-blur-md border border-border/50 
      transition-all duration-300 hover:shadow-card hover:scale-[1.02]
      ${task.completed ? 'ring-2 ring-success/50 shadow-success' : ''}
      ${isAnimating ? 'animate-glow-pulse' : ''}
    `}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`
              w-10 h-10 rounded-xl flex items-center justify-center
              ${task.completed 
                ? 'bg-gradient-success shadow-success' 
                : 'bg-gradient-primary shadow-primary'
              }
            `}>
              <task.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">{task.title}</h3>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
          </div>
          
          <Badge 
            variant={task.completed ? "default" : "secondary"}
            className={`
              ${task.completed 
                ? 'bg-gradient-success text-success-foreground' 
                : 'bg-gradient-warning text-warning-foreground'
              }
            `}
          >
            {task.completed ? '+' : ''}{task.points} pts
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Progresso: {task.progress}/{task.maxProgress}
            </span>
            <span className="text-sm font-medium">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`
                h-2 rounded-full transition-all duration-500
                ${task.completed 
                  ? 'bg-gradient-success' 
                  : 'bg-gradient-primary'
                }
              `}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {task.completed ? (
              <CheckCircle className="w-4 h-4 text-success" />
            ) : (
              <XCircle className="w-4 h-4 text-muted-foreground" />
            )}
            <span className={`text-sm font-medium ${
              task.completed ? 'text-success' : 'text-muted-foreground'
            }`}>
              {task.completed ? 'Concluída' : 'Pendente'}
            </span>
          </div>

          <Button
            variant={task.completed ? "outline" : "premium"}
            size="sm"
            onClick={handleToggle}
            className="gap-2"
          >
            {task.completed ? (
              <>
                <XCircle className="w-4 h-4" />
                Desfazer
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Marcar
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Dados de exemplo das tarefas
export const dailyTasks: Task[] = [
  {
    id: "water",
    title: "Hidratação",
    description: "Beber 2 litros de água",
    points: 100,
    icon: Droplets,
    completed: false,
    type: "daily",
    progress: 0,
    maxProgress: 7
  },
  {
    id: "sleep",
    title: "Sono de Qualidade",
    description: "Dormir pelo menos 6 horas",
    points: 100,
    icon: Moon,
    completed: false,
    type: "daily",
    progress: 0,
    maxProgress: 7
  },
  {
    id: "exercise",
    title: "Atividade Física",
    description: "30 minutos de exercício",
    points: 100,
    icon: Dumbbell,
    completed: false,
    type: "daily",
    progress: 0,
    maxProgress: 7
  },
  {
    id: "diet",
    title: "Seguir a Dieta",
    description: "Seguir o plano alimentar",
    points: 100,
    icon: Utensils,
    completed: false,
    type: "daily",
    progress: 0,
    maxProgress: 7
  },
  {
    id: "photo",
    title: "Registro Visual",
    description: "Postar foto da refeição/treino",
    points: 100,
    icon: Camera,
    completed: false,
    type: "daily",
    progress: 0,
    maxProgress: 7
  }
];

export default TaskCard;