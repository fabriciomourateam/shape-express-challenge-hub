import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Zap } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ComponentType<{ className?: string }>;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'primary' | 'success' | 'warning' | 'destructive';
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend = 'neutral',
  color = 'primary' 
}: StatsCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'bg-gradient-success shadow-success';
      case 'warning':
        return 'bg-gradient-warning shadow-warning';
      case 'destructive':
        return 'bg-destructive shadow-sm';
      default:
        return 'bg-gradient-primary shadow-primary';
    }
  };

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-success" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <Target className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <Card className="bg-gradient-card backdrop-blur-md border border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getColorClasses()}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-card-foreground">
              {value}
            </div>
            {change !== undefined && (
              <div className="flex items-center gap-1 mt-1">
                {getTrendIcon()}
                <Badge 
                  variant="outline" 
                  className={`
                    text-xs 
                    ${trend === 'up' ? 'text-success border-success/50' : ''}
                    ${trend === 'down' ? 'text-destructive border-destructive/50' : ''}
                    ${trend === 'neutral' ? 'text-muted-foreground' : ''}
                  `}
                >
                  {change > 0 ? '+' : ''}{change}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;