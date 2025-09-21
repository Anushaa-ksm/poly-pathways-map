import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/CourseCard";
import { PathVisualization } from "@/components/PathVisualization";
import heroImage from "@/assets/hero-education.jpg";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  ArrowRight, 
  CheckCircle, 
  Target,
  Briefcase,
  TrendingUp
} from "lucide-react";

// Course data
const engineeringCourses = [
  {
    title: "Diploma in Civil Engineering",
    description: "Design, construction, and maintenance of buildings, roads, and bridges.",
    duration: "3 Years",
    category: "engineering" as const,
    subjects: ["Structural Engineering", "Construction Management", "AutoCAD", "Surveying"],
    careerPaths: ["Junior Engineer", "Site Supervisor", "Draftsman", "Construction Manager"]
  },
  {
    title: "Diploma in Mechanical Engineering", 
    description: "Design, manufacturing, and maintenance of machines and mechanical systems.",
    duration: "3 Years",
    category: "engineering" as const,
    subjects: ["Thermodynamics", "Manufacturing", "CAD/CAM", "Machine Design"],
    careerPaths: ["Production Supervisor", "CAD/CAM Technician", "Maintenance Engineer", "Quality Inspector"]
  },
  {
    title: "Diploma in Computer Science Engineering",
    description: "Software development, programming, and computer networking.",
    duration: "3 Years", 
    category: "engineering" as const,
    subjects: ["Programming", "Data Structures", "Web Development", "Database Management"],
    careerPaths: ["Software Developer", "Web Developer", "IT Support Specialist", "System Administrator"]
  },
  {
    title: "Diploma in Electrical Engineering",
    description: "Study of electricity, electronics, and power systems.",
    duration: "3 Years",
    category: "engineering" as const,
    subjects: ["Power Systems", "Control Systems", "Electronics", "Electrical Machines"],
    careerPaths: ["Electrician", "Power Plant Operator", "Technical Officer", "Maintenance Technician"]
  },
  {
    title: "Diploma in Electronics & Communication",
    description: "Design of electronic circuits and telecommunications systems.",
    duration: "3 Years",
    category: "engineering" as const,
    subjects: ["Digital Electronics", "Communication Systems", "Microprocessors", "Signal Processing"],
    careerPaths: ["Electronics Technician", "Field Service Engineer", "Telecom Technician"]
  },
  {
    title: "Diploma in Automobile Engineering",
    description: "Design, production, and repair of vehicles.",
    duration: "3 Years",
    category: "engineering" as const,
    subjects: ["Automotive Systems", "Engine Technology", "Vehicle Dynamics", "Automobile Electronics"],
    careerPaths: ["Automobile Technician", "Service Advisor", "Quality Control Inspector"]
  }
];

const otherCourses = [
  {
    title: "Diploma in Hotel Management",
    description: "Hospitality, food service, and hotel operations management.",
    duration: "3 Years",
    category: "business" as const,
    subjects: ["Hotel Operations", "Food & Beverage", "Front Office", "Housekeeping"],
    careerPaths: ["Hotel Manager", "Restaurant Manager", "Event Coordinator"]
  },
  {
    title: "Diploma in Fashion Designing",
    description: "Creative design, pattern making, and fashion industry knowledge.",
    duration: "3 Years", 
    category: "creative" as const,
    subjects: ["Fashion Design", "Pattern Making", "Textile Science", "Fashion Marketing"],
    careerPaths: ["Fashion Designer", "Pattern Maker", "Fashion Stylist"]
  },
  {
    title: "Diploma in Medical Laboratory Technology",
    description: "Medical testing, diagnostics, and laboratory procedures.",
    duration: "3 Years",
    category: "medical" as const,
    subjects: ["Clinical Pathology", "Microbiology", "Biochemistry", "Hematology"],
    careerPaths: ["Lab Technician", "Medical Technologist", "Research Assistant"]
  },
  {
    title: "Diploma in Pharmacy",
    description: "Pharmaceutical science, drug preparation, and healthcare.",
    duration: "2 Years",
    category: "medical" as const,
    subjects: ["Pharmacology", "Pharmaceutical Chemistry", "Drug Formulation", "Hospital Pharmacy"],
    careerPaths: ["Pharmacist Assistant", "Medical Representative", "Drug Inspector"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-white/20 text-white border-white/30" variant="outline">
                    Career Guidance Platform
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    A Map to Your Future: 
                    <span className="block text-yellow-200">Courses & Career Paths</span>
                  </h1>
                  <p className="text-lg text-white/90 max-w-xl">
                    Confused about what to do after completing 10th grade? Discover polytechnic courses 
                    that lead directly to careers or higher education opportunities.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="bg-white text-education-primary hover:bg-white/90">
                    <BookOpen className="h-5 w-5" />
                    Explore Courses
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Target className="h-5 w-5" />
                    Plan Your Path
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm text-white/80">Course Options</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-white/80">Years Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-white/80">Job Ready</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-first">
                <img 
                  src={heroImage} 
                  alt="Students exploring career paths after 10th grade"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Polytechnic Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              What is Polytechnic Education?
            </h2>
            <p className="text-lg text-muted-foreground">
              A polytechnic diploma is a vocational course, typically 3 years in duration, that provides 
              hands-on, job-oriented training. Admission is generally based on your 10th-grade results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="course-card">
                <CardContent className="p-6 text-center">
                  <div className="bg-education-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-education-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Practical Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Hands-on training with real-world applications and industry-relevant skills.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="course-card">
                <CardContent className="p-6 text-center">
                  <div className="bg-education-secondary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-6 w-6 text-education-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Industry Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Graduate with skills that employers value and immediate job opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="course-card">
                <CardContent className="p-6 text-center">
                  <div className="bg-education-accent/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-education-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Career Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple pathways for advancement including higher education options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Path Visualization */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <PathVisualization />
        </div>
      </section>

      {/* Engineering Courses Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Popular Engineering Disciplines
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the most common and in-demand courses. Each provides specialized skills 
              for specific industries and career paths.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Courses Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Other Career-Focused Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Polytechnic colleges offer a wide range of non-engineering programs 
              that are also highly valuable in today's job market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* After Diploma Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Options After the Diploma
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Once you have your diploma, you have two clear paths to choose from.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Path A: Career */}
            <Card className="course-card feature-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-education-success/10 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-education-success" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Path A: Start a Career</CardTitle>
                    <CardDescription>Immediate employment opportunities</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your diploma makes you immediately employable in your field. The practical 
                  skills you've learned are in high demand across various industries.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Common Job Roles:</h4>
                  <div className="space-y-1">
                    {["Junior Engineer", "Technician", "Site Supervisor", "IT Support Professional"].map((role, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mr-2 text-education-success flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button variant="success" className="w-full mt-4">
                  <Briefcase className="h-4 w-4" />
                  Explore Job Opportunities
                </Button>
              </CardContent>
            </Card>

            {/* Path B: Higher Education */}
            <Card className="course-card feature-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-education-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-education-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Path B: Higher Education</CardTitle>
                    <CardDescription>Lateral entry to B.Tech programs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Use your diploma to gain lateral entry into a B.Tech or B.E. program and 
                  complete your engineering degree faster.
                </p>
                
                <div className="bg-education-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">What is Lateral Entry?</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                      Skip the first year of B.Tech program
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                      Enter directly into second year
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                      Complete degree in 3 years instead of 4
                    </div>
                  </div>
                </div>
                
                <Button variant="education" className="w-full mt-4">
                  <GraduationCap className="h-4 w-4" />
                  Learn About B.Tech Options
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90">
              Don't let confusion hold you back. Choose the path that aligns with your interests 
              and start building your future today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="bg-white text-education-primary hover:bg-white/90">
                <Target className="h-5 w-5" />
                Find Your Course
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Users className="h-5 w-5" />
                Get Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
