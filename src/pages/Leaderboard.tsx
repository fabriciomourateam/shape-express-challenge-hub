import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Target, Flame, Star } from "lucide-react";

interface User {
  id: string;
  name: string;
  points: number;
  streak: number;
  tasksCompleted: number;
  position: number;
  avatar?: string;
}

const mockUsers: User[] = [
  { id: "1", name: "Ana Silva", points: 1250, streak: 7, tasksCompleted: 35, position: 1 },
  { id: "2", name: "Carlos Santos", points: 1180, streak: 6, tasksCompleted: 32, position: 2 },
  { id: "3", name: "Marina Costa", points: 1150, streak: 7, tasksCompleted: 31, position: 3 },
  { id: "4", name: "João Oliveira", points: 1100, streak: 5, tasksCompleted: 29, position: 4 },
  { id: "5", name: "Lucia Ferreira", points: 1050, streak: 6, tasksCompleted: 28, position: 5 },
  { id: "6", name: "Pedro Lima", points: 980, streak: 4, tasksCompleted: 26, position: 6 },
  { id: "7", name: "Sofia Rodrigues", points: 920, streak: 5, tasksCompleted: 24, position: 7 },
  { id: "8", name: "Bruno Alves", points: 890, streak: 3, tasksCompleted: 23, position: 8 },
];

const Leaderboard = () => {
  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-warning" />;
      case 2:
        return <Medal className="w-6 h-6 text-muted-foreground" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-500" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-muted-foreground">#{position}</span>;
    }
  };

  const getPositionBadge = (position: number) => {
    if (position <= 3) {
      return position === 1 ? "bg-gradient-warning" : 
             position === 2 ? "bg-gradient-to-r from-gray-400 to-gray-600" :
             "bg-gradient-to-r from-orange-400 to-orange-600";
    }
    return "bg-muted";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ranking do Desafio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Veja como você está se saindo comparado aos outros participantes
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mockUsers.slice(0, 3).map((user, index) => (
            <Card 
              key={user.id} 
              className={`
                relative overflow-hidden border-2 transition-all duration-300 hover:scale-105
                ${index === 0 ? 'bg-gradient-warning shadow-warning border-warning/50' : ''}
                ${index === 1 ? 'bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg border-gray-300' : ''}
                ${index === 2 ? 'bg-gradient-to-b from-orange-100 to-orange-200 shadow-lg border-orange-300' : ''}
              `}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  {getPositionIcon(user.position)}
                </div>
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarFallback className="text-lg font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-2">{user.name}</h3>
                <div className="space-y-2">
                  <Badge className={`${getPositionBadge(user.position)} text-white px-3 py-1`}>
                    {user.points} pontos
                  </Badge>
                  <div className="flex justify-center gap-2 text-sm">
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      {user.streak}d
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4 text-primary" />
                      {user.tasksCompleted}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Classificação Completa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div 
                  key={user.id}
                  className={`
                    flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02]
                    ${user.position <= 3 
                      ? 'bg-gradient-card border-primary/30 shadow-card' 
                      : 'bg-card border-border'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10">
                      {getPositionIcon(user.position)}
                    </div>
                    <Avatar className="w-12 h-12">
                      <AvatarFallback>
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{user.name}</h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          {user.streak} dias
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {user.tasksCompleted} tarefas
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge className="bg-gradient-primary text-primary-foreground px-3 py-1 text-lg">
                      {user.points} pts
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motivational Footer */}
        <Card className="mt-8 bg-gradient-primary shadow-glow border border-primary/20">
          <CardContent className="p-6 text-center">
            <Star className="w-12 h-12 text-white mx-auto mb-4 animate-float" />
            <h3 className="text-xl font-bold text-white mb-2">
              Continue Subindo no Ranking!
            </h3>
            <p className="text-white/90">
              Complete mais tarefas e mantenha sua sequência para conquistar o topo
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;