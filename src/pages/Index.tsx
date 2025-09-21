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

const commerceCourses = [
  {
    title: "Diploma in Business Administration",
    description: "Management principles, business operations, and administrative skills.",
    duration: "3 Years",
    category: "business" as const,
    subjects: ["Business Management", "Accounting", "Marketing", "Human Resources"],
    careerPaths: ["Administrative Officer", "Business Coordinator", "Office Manager"]
  },
  {
    title: "Diploma in Banking & Finance",
    description: "Financial services, banking operations, and investment management.",
    duration: "3 Years",
    category: "business" as const,
    subjects: ["Banking Operations", "Financial Accounting", "Insurance", "Investment Planning"],
    careerPaths: ["Bank Officer", "Financial Advisor", "Insurance Agent"]
  },
  {
    title: "Diploma in Office Management",
    description: "Office administration, secretarial skills, and business communication.",
    duration: "3 Years",
    category: "business" as const,
    subjects: ["Office Administration", "Business Communication", "Computer Applications", "Record Keeping"],
    careerPaths: ["Office Administrator", "Executive Assistant", "Data Entry Operator"]
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
  },
  {
    title: "Diploma in Digital Marketing",
    description: "Online marketing, social media management, and digital advertising.",
    duration: "1 Year",
    category: "business" as const,
    subjects: ["SEO/SEM", "Social Media Marketing", "Content Marketing", "Analytics"],
    careerPaths: ["Digital Marketing Executive", "Social Media Manager", "Content Creator"]
  },
  {
    title: "Diploma in Interior Design",
    description: "Space planning, design aesthetics, and architectural visualization.",
    duration: "3 Years",
    category: "creative" as const,
    subjects: ["Space Planning", "Color Theory", "3D Modeling", "Building Materials"],
    careerPaths: ["Interior Designer", "Design Consultant", "Project Coordinator"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-education-primary/10 via-background to-education-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Badge className="bg-education-primary/20 text-education-primary border-education-primary/30" variant="outline">
              Career Guidance After 10th Grade
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Polytechnic Courses After 10th Grade
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore diploma programs across Engineering, Commerce, Medical, and Creative fields. 
              Choose your path to a skilled career or higher education.
            </p>
          </div>
        </div>
      </section>

      {/* What is Polytechnic Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              What is Polytechnic Education?
            </h2>
            <p className="text-muted-foreground">
              A polytechnic diploma is a vocational course, typically 3 years in duration, that provides 
              hands-on, job-oriented training. Admission is generally based on your 10th-grade results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
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

      {/* Engineering Courses Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Engineering Diploma Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical and engineering programs that prepare you for hands-on careers in various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Commerce Courses Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Commerce & Business Diploma Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Business-focused programs that develop administrative and management skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commerceCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Courses Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Medical, Creative & Other Diploma Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized programs in healthcare, design, and emerging fields.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Path Visualization */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <PathVisualization />
        </div>
      </section>

      {/* After Diploma Options */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your Options After the Diploma
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Once you have your diploma, you have two clear paths to choose from.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
