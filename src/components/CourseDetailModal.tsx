import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  DollarSign,
  Clock,
  Award,
  Building2,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

export interface CourseDetail {
  title: string;
  description: string;
  duration: string;
  category: "engineering" | "creative" | "medical" | "business";
  subjects: string[];
  careerPaths: string[];
  colleges: {
    name: string;
    location: string;
    rating: number;
    fees: string;
    type: "Government" | "Private";
  }[];
  careerProgression: {
    immediate: {
      roles: string[];
      salary: string;
      experience: string;
    };
    midLevel: {
      roles: string[];
      salary: string;
      experience: string;
    };
    senior: {
      roles: string[];
      salary: string;
      experience: string;
    };
  };
  higherEducation: {
    options: string[];
    duration: string;
    eligibility: string;
  };
  skillsGained: string[];
  industryDemand: number;
}

interface CourseDetailModalProps {
  course: CourseDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons = {
  engineering: BookOpen,
  creative: Users,
  medical: BookOpen,
  business: Briefcase,
};

const categoryColors = {
  engineering: "education-primary",
  creative: "education-secondary", 
  medical: "education-accent",
  business: "education-success",
};

export const CourseDetailModal = ({ course, isOpen, onClose }: CourseDetailModalProps) => {
  if (!course) return null;

  const Icon = categoryIcons[course.category];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-${categoryColors[course.category]}/10`}>
              <Icon className={`h-6 w-6 text-${categoryColors[course.category]}`} />
            </div>
            <div>
              <DialogTitle className="text-2xl">{course.title}</DialogTitle>
              <DialogDescription className="text-base mt-1">
                {course.description}
              </DialogDescription>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {course.duration}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {course.industryDemand}% Industry Demand
            </Badge>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="colleges">Colleges</TabsTrigger>
            <TabsTrigger value="careers">Career Path</TabsTrigger>
            <TabsTrigger value="higher-ed">Higher Education</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Key Subjects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {course.subjects.map((subject, index) => (
                      <Badge key={index} variant="outline" className="justify-center">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Skills You'll Gain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.skillsGained.map((skill, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-education-success flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Industry Demand Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Market Demand</span>
                    <span>{course.industryDemand}%</span>
                  </div>
                  <Progress value={course.industryDemand} className="h-2" />
                </div>
                <p className="text-sm text-muted-foreground">
                  This field shows strong growth potential with increasing job opportunities 
                  across various industries.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colleges" className="space-y-4">
            <div className="grid gap-4">
              {course.colleges.map((college, index) => (
                <Card key={index} className="course-card">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <h4 className="font-semibold">{college.name}</h4>
                          <Badge variant={college.type === "Government" ? "default" : "secondary"}>
                            {college.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {college.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {college.rating}/5
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-education-primary">{college.fees}</div>
                        <div className="text-xs text-muted-foreground">Annual Fee</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="careers" className="space-y-6">
            <div className="space-y-6">
              <Card className="border-education-success/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-education-success">
                    <Briefcase className="h-5 w-5" />
                    Immediate Opportunities (0-2 Years)
                  </CardTitle>
                  <CardDescription>{course.careerProgression.immediate.experience}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <DollarSign className="h-5 w-5" />
                    {course.careerProgression.immediate.salary}
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {course.careerProgression.immediate.roles.map((role, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-education-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-education-primary">
                    <TrendingUp className="h-5 w-5" />
                    Mid-Level Positions (3-7 Years)
                  </CardTitle>
                  <CardDescription>{course.careerProgression.midLevel.experience}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <DollarSign className="h-5 w-5" />
                    {course.careerProgression.midLevel.salary}
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {course.careerProgression.midLevel.roles.map((role, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-education-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-education-accent">
                    <Award className="h-5 w-5" />
                    Senior Positions (8+ Years)
                  </CardTitle>
                  <CardDescription>{course.careerProgression.senior.experience}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <DollarSign className="h-5 w-5" />
                    {course.careerProgression.senior.salary}
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {course.careerProgression.senior.roles.map((role, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="higher-ed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Higher Education Options
                </CardTitle>
                <CardDescription>
                  Continue your education to unlock more opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-education-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Available Programs:</h4>
                  <div className="space-y-2">
                    {course.higherEducation.options.map((option, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-education-success flex-shrink-0" />
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Duration</h5>
                    <p className="text-sm text-muted-foreground">{course.higherEducation.duration}</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Eligibility</h5>
                    <p className="text-sm text-muted-foreground">{course.higherEducation.eligibility}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};