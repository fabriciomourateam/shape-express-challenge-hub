import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Utensils, 
  Clock, 
  Users, 
  Leaf,
  ExternalLink,
  Coffee,
  Sun,
  Sunset
} from "lucide-react";

interface DietPlan {
  id: string;
  title: string;
  weightRange: string;
  isVegetarian?: boolean;
  meals: {
    breakfast: string[];
    lunch: string[];
    snack: string[];
    dinner: string[];
  };
}

const dietPlans: DietPlan[] = [
  {
    id: "under-60",
    title: "Plano até 60kg",
    weightRange: "Até 60kg",
    meals: {
      breakfast: [
        "2 fatias de pão integral",
        "1 ovo mexido",
        "1 xícara de café com leite desnatado",
        "1 fruta (banana ou maçã)"
      ],
      lunch: [
        "150g de peito de frango grelhado",
        "1 xícara de arroz integral",
        "1/2 xícara de feijão",
        "Salada verde à vontade",
        "1 colher de azeite"
      ],
      snack: [
        "1 iogurte natural",
        "1 colher de granola",
        "5 castanhas"
      ],
      dinner: [
        "120g de peixe grelhado",
        "Legumes refogados",
        "1 batata doce pequena",
        "Salada de folhas verdes"
      ]
    }
  },
  {
    id: "60-70",
    title: "Plano 60-70kg",
    weightRange: "60-70kg",
    meals: {
      breakfast: [
        "3 fatias de pão integral",
        "2 ovos mexidos",
        "1 xícara de café com leite desnatado",
        "1 fruta e 1 colher de mel"
      ],
      lunch: [
        "180g de peito de frango grelhado",
        "1,5 xícara de arroz integral",
        "1/2 xícara de feijão",
        "Salada verde à vontade",
        "1 colher de azeite"
      ],
      snack: [
        "1 iogurte grego",
        "1 colher de granola",
        "8 castanhas",
        "1 fruta pequena"
      ],
      dinner: [
        "150g de peixe grelhado",
        "Legumes refogados",
        "1 batata doce média",
        "Salada de folhas verdes"
      ]
    }
  },
  {
    id: "70-80",
    title: "Plano 70-80kg",
    weightRange: "70-80kg",
    meals: {
      breakfast: [
        "3 fatias de pão integral",
        "2 ovos mexidos + 2 claras",
        "1 xícara de café com leite desnatado",
        "1 fruta e 1 colher de mel",
        "1 fatia de queijo branco"
      ],
      lunch: [
        "200g de peito de frango grelhado",
        "2 xícaras de arroz integral",
        "3/4 xícara de feijão",
        "Salada verde à vontade",
        "1 colher de azeite"
      ],
      snack: [
        "1 iogurte grego",
        "2 colheres de granola",
        "10 castanhas",
        "1 fruta média"
      ],
      dinner: [
        "180g de peixe ou carne vermelha magra",
        "Legumes refogados",
        "1 batata doce grande",
        "Salada de folhas verdes"
      ]
    }
  },
  {
    id: "70-80-veg",
    title: "Plano 70-80kg Vegetariano",
    weightRange: "70-80kg",
    isVegetarian: true,
    meals: {
      breakfast: [
        "3 fatias de pão integral",
        "2 ovos mexidos",
        "1 xícara de leite de amêndoas",
        "1 fruta e 1 colher de mel",
        "1 fatia de queijo vegano"
      ],
      lunch: [
        "150g de tofu grelhado ou proteína de soja",
        "2 xícaras de arroz integral",
        "3/4 xícara de feijão",
        "Salada verde à vontade",
        "1 colher de azeite",
        "Quinoa (1/2 xícara)"
      ],
      snack: [
        "1 iogurte de coco",
        "2 colheres de granola",
        "10 castanhas",
        "1 fruta média"
      ],
      dinner: [
        "150g de grão-de-bico ou lentilha",
        "Legumes refogados",
        "1 batata doce grande",
        "Salada de folhas verdes",
        "Sementes de girassol"
      ]
    }
  },
  {
    id: "80-90",
    title: "Plano 80-90kg",
    weightRange: "80-90kg",
    meals: {
      breakfast: [
        "4 fatias de pão integral",
        "3 ovos mexidos",
        "1 xícara de café com leite desnatado",
        "1 fruta grande e 1 colher de mel",
        "2 fatias de queijo branco"
      ],
      lunch: [
        "250g de peito de frango grelhado",
        "2,5 xícaras de arroz integral",
        "1 xícara de feijão",
        "Salada verde à vontade",
        "1,5 colher de azeite"
      ],
      snack: [
        "1 iogurte grego grande",
        "3 colheres de granola",
        "12 castanhas",
        "1 fruta grande"
      ],
      dinner: [
        "200g de peixe ou carne vermelha magra",
        "Legumes refogados abundantes",
        "1 batata doce grande",
        "Salada de folhas verdes"
      ]
    }
  },
  {
    id: "over-90",
    title: "Plano 90kg+",
    weightRange: "90kg ou mais",
    meals: {
      breakfast: [
        "4 fatias de pão integral",
        "3 ovos mexidos + 2 claras",
        "1 xícara de café com leite desnatado",
        "1 fruta grande e 2 colheres de mel",
        "2 fatias de queijo branco",
        "1 colher de pasta de amendoim"
      ],
      lunch: [
        "300g de peito de frango grelhado",
        "3 xícaras de arroz integral",
        "1 xícara de feijão",
        "Salada verde à vontade",
        "2 colheres de azeite"
      ],
      snack: [
        "1 iogurte grego grande",
        "3 colheres de granola",
        "15 castanhas",
        "1 fruta grande",
        "1 barra de cereal integral"
      ],
      dinner: [
        "250g de peixe ou carne vermelha magra",
        "Legumes refogados abundantes",
        "1 batata doce extra grande",
        "Salada de folhas verdes",
        "Abacate (1/4 unidade)"
      ]
    }
  }
];

const Diet = () => {
  const getMealIcon = (mealType: string) => {
    switch (mealType) {
      case 'breakfast':
        return <Coffee className="w-5 h-5 text-warning" />;
      case 'lunch':
        return <Sun className="w-5 h-5 text-primary" />;
      case 'snack':
        return <Utensils className="w-5 h-5 text-success" />;
      case 'dinner':
        return <Sunset className="w-5 h-5 text-orange-500" />;
      default:
        return <Utensils className="w-5 h-5" />;
    }
  };

  const getMealName = (mealType: string) => {
    switch (mealType) {
      case 'breakfast':
        return 'Café da Manhã';
      case 'lunch':
        return 'Almoço';
      case 'snack':
        return 'Lanche da Tarde';
      case 'dinner':
        return 'Jantar';
      default:
        return mealType;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Planos Alimentares
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para seu peso e objetivo
          </p>
        </div>

        {/* Diet Plans Tabs */}
        <Tabs defaultValue="under-60" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            {dietPlans.map((plan) => (
              <TabsTrigger 
                key={plan.id} 
                value={plan.id}
                className="flex items-center gap-2 text-xs sm:text-sm"
              >
                {plan.isVegetarian && <Leaf className="w-4 h-4" />}
                <span className="hidden sm:inline">{plan.title}</span>
                <span className="sm:hidden">{plan.weightRange}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {dietPlans.map((plan) => (
            <TabsContent key={plan.id} value={plan.id}>
              <Card className="bg-gradient-card backdrop-blur-md border border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-primary" />
                    {plan.title}
                    {plan.isVegetarian && (
                      <Badge className="bg-gradient-success text-success-foreground gap-1">
                        <Leaf className="w-3 h-3" />
                        Vegetariano
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Plano nutricional personalizado para pessoas de {plan.weightRange}
                  </p>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(plan.meals).map(([mealType, foods]) => (
                  <Card 
                    key={mealType}
                    className="bg-gradient-card backdrop-blur-md border border-border/50 hover:shadow-card transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        {getMealIcon(mealType)}
                        {getMealName(mealType)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {foods.map((food, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-2 text-sm text-card-foreground"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {food}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Food Substitution Link */}
        <Card className="mt-8 bg-gradient-primary shadow-glow border border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Lista de Substituição de Alimentos
                </h3>
                <p className="text-white/90">
                  Acesse nossa tabela completa de substituições alimentares
                </p>
              </div>
              <Button 
                variant="glass"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                onClick={() => window.open('https://www.quantocomer.com.br/fabriciomoura/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Acessar Tabela
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-success" />
                Dicas de Horários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Café da manhã: 7h - 9h</li>
                <li>• Almoço: 12h - 14h</li>
                <li>• Lanche: 15h - 17h</li>
                <li>• Jantar: 19h - 21h</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-md border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Dicas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Beba 2-3 litros de água por dia</li>
                <li>• Evite frituras e doces</li>
                <li>• Mastigue bem os alimentos</li>
                <li>• Respeite os intervalos entre refeições</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diet;