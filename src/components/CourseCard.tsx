import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Briefcase } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  category: "engineering" | "creative" | "medical" | "business";
  careerPaths: string[];
  subjects?: string[];
  className?: string;
}

const categoryIcons = {
  engineering: BookOpen,
  creative: Users,
  medical: BookOpen,
  business: Briefcase,
};

const categoryColors = {
  engineering: "courses-engineering",
  creative: "courses-creative", 
  medical: "courses-medical",
  business: "courses-business",
};

export const CourseCard = ({ 
  title, 
  description, 
  duration, 
  category, 
  careerPaths, 
  subjects,
  className = "" 
}: CourseCardProps) => {
  const Icon = categoryIcons[category];
  
  return (
    <Card className={`course-card group cursor-pointer ${className}`}>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg bg-${categoryColors[category]}/10`}>
            <Icon className={`h-5 w-5 text-${categoryColors[category]}`} />
          </div>
          <Badge variant="secondary" className="text-xs">
            {duration}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {subjects && (
          <div>
            <h4 className="text-sm font-medium mb-2 text-foreground">Key Subjects:</h4>
            <div className="flex flex-wrap gap-1">
              {subjects.slice(0, 3).map((subject, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {subject}
                </Badge>
              ))}
              {subjects.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{subjects.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-foreground">Career Paths:</h4>
          <div className="space-y-1">
            {careerPaths.slice(0, 3).map((path, index) => (
              <div key={index} className="flex items-center text-xs text-muted-foreground">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                {path}
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-2">
          <div className="flex items-center text-sm font-medium text-education-primary group-hover:text-education-accent transition-colors">
            Learn More
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};