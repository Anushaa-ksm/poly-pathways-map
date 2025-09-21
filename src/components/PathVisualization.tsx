import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, Briefcase, TrendingUp, ArrowRight } from "lucide-react";

const pathSteps = [
  {
    icon: School,
    title: "Complete 10th Grade",
    description: "Your starting point",
    status: "start",
  },
  {
    icon: GraduationCap,
    title: "3-Year Polytechnic Diploma",
    description: "Choose from 20+ specializations",
    status: "process",
  },
  {
    icon: Briefcase,
    title: "Career Path",
    description: "Start working or pursue higher education",
    status: "decision",
  },
  {
    icon: TrendingUp,
    title: "Professional Success",
    description: "Achieve your career goals",
    status: "end",
  },
];

export const PathVisualization = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Your Journey Map
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A clear path from 10th grade to your dream career. Each step is designed to build your skills and open new opportunities.
        </p>
      </div>
      
      <div className="relative">
        {/* Desktop Path */}
        <div className="hidden md:flex items-center justify-between relative">
          {pathSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex-1 relative">
                <Card className="course-card text-center mx-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`p-3 rounded-full ${
                        step.status === 'start' ? 'bg-education-success/10' :
                        step.status === 'process' ? 'bg-education-primary/10' :
                        step.status === 'decision' ? 'bg-education-accent/10' :
                        'bg-education-secondary/10'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          step.status === 'start' ? 'text-education-success' :
                          step.status === 'process' ? 'text-education-primary' :
                          step.status === 'decision' ? 'text-education-accent' :
                          'text-education-secondary'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < pathSteps.length - 1 && (
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="bg-background p-1 rounded-full border-2 border-education-primary/20">
                      <ArrowRight className="h-4 w-4 text-education-primary" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Mobile Path */}
        <div className="md:hidden space-y-4">
          {pathSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="course-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full flex-shrink-0 ${
                        step.status === 'start' ? 'bg-education-success/10' :
                        step.status === 'process' ? 'bg-education-primary/10' :
                        step.status === 'decision' ? 'bg-education-accent/10' :
                        'bg-education-secondary/10'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          step.status === 'start' ? 'text-education-success' :
                          step.status === 'process' ? 'text-education-primary' :
                          step.status === 'decision' ? 'text-education-accent' :
                          'text-education-secondary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Step {index + 1}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                
                {index < pathSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-6 bg-gradient-to-b from-education-primary to-education-accent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};