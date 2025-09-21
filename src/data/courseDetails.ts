import { CourseDetail } from "@/components/CourseDetailModal";

export const detailedCourseData: Record<string, CourseDetail> = {
  "civil-engineering": {
    title: "Diploma in Civil Engineering",
    description: "Design, construction, and maintenance of buildings, roads, and bridges.",
    duration: "3 Years",
    category: "engineering",
    subjects: ["Structural Engineering", "Construction Management", "AutoCAD", "Surveying", "Building Materials", "Concrete Technology"],
    careerPaths: ["Junior Engineer", "Site Supervisor", "Draftsman", "Construction Manager"],
    colleges: [
      {
        name: "Government Polytechnic College, Mumbai",
        location: "Mumbai, Maharashtra",
        rating: 4.2,
        fees: "₹25,000/year",
        type: "Government"
      },
      {
        name: "Delhi Institute of Technology",
        location: "Delhi",
        rating: 4.5,
        fees: "₹35,000/year",
        type: "Government"
      },
      {
        name: "Bharati Vidyapeeth Polytechnic",
        location: "Pune, Maharashtra",
        rating: 4.0,
        fees: "₹75,000/year",
        type: "Private"
      },
      {
        name: "MSBTE Affiliated Polytechnic",
        location: "Nagpur, Maharashtra",
        rating: 3.8,
        fees: "₹45,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Junior Civil Engineer", "Site Supervisor", "CAD Operator", "Quality Control Inspector"],
        salary: "₹2.5-4.5 LPA",
        experience: "Fresh graduates can join construction companies, government departments"
      },
      midLevel: {
        roles: ["Project Engineer", "Construction Manager", "Site Manager", "Structural Designer"],
        salary: "₹6-12 LPA",
        experience: "With experience, lead projects and manage teams"
      },
      senior: {
        roles: ["Senior Project Manager", "Consulting Engineer", "Construction Director", "Own Construction Business"],
        salary: "₹15-25+ LPA",
        experience: "Senior roles with complete project responsibility"
      }
    },
    higherEducation: {
      options: ["B.Tech Civil Engineering (Lateral Entry)", "B.E. Civil Engineering", "Bachelor of Architecture"],
      duration: "3 years (via lateral entry) or 4 years (regular)",
      eligibility: "Minimum 60% in diploma for lateral entry"
    },
    skillsGained: ["Construction Management", "AutoCAD & Design Software", "Site Planning", "Quality Control", "Project Management", "Building Codes & Standards"],
    industryDemand: 85
  },

  "mechanical-engineering": {
    title: "Diploma in Mechanical Engineering",
    description: "Design, manufacturing, and maintenance of machines and mechanical systems.",
    duration: "3 Years",
    category: "engineering",
    subjects: ["Thermodynamics", "Manufacturing", "CAD/CAM", "Machine Design", "Fluid Mechanics", "Material Science"],
    careerPaths: ["Production Supervisor", "CAD/CAM Technician", "Maintenance Engineer", "Quality Inspector"],
    colleges: [
      {
        name: "Government Polytechnic, Chennai",
        location: "Chennai, Tamil Nadu",
        rating: 4.3,
        fees: "₹22,000/year",
        type: "Government"
      },
      {
        name: "Pune Institute of Technology",
        location: "Pune, Maharashtra",
        rating: 4.1,
        fees: "₹65,000/year",
        type: "Private"
      },
      {
        name: "Jamia Millia Islamia Polytechnic",
        location: "New Delhi",
        rating: 4.4,
        fees: "₹30,000/year",
        type: "Government"
      },
      {
        name: "Birla Institute of Technology",
        location: "Ranchi, Jharkhand",
        rating: 4.6,
        fees: "₹85,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Production Technician", "CAD Operator", "Maintenance Assistant", "Quality Control Inspector"],
        salary: "₹2.8-5 LPA",
        experience: "Entry-level positions in manufacturing and automotive industries"
      },
      midLevel: {
        roles: ["Production Manager", "Design Engineer", "Plant Manager", "Operations Manager"],
        salary: "₹7-15 LPA",
        experience: "Supervisory roles with team management responsibilities"
      },
      senior: {
        roles: ["General Manager", "Chief Engineer", "Manufacturing Director", "Consultant"],
        salary: "₹18-30+ LPA",
        experience: "Strategic roles in large manufacturing organizations"
      }
    },
    higherEducation: {
      options: ["B.Tech Mechanical Engineering", "B.Tech Production Engineering", "B.Tech Automobile Engineering"],
      duration: "3 years via lateral entry",
      eligibility: "Minimum 60% in diploma with mathematics and science subjects"
    },
    skillsGained: ["CAD/CAM Software", "Manufacturing Processes", "Machine Operation", "Quality Management", "Project Planning", "Technical Problem Solving"],
    industryDemand: 88
  },

  "computer-science": {
    title: "Diploma in Computer Science Engineering",
    description: "Software development, programming, and computer networking.",
    duration: "3 Years",
    category: "engineering",
    subjects: ["Programming", "Data Structures", "Web Development", "Database Management", "Networking", "Software Engineering"],
    careerPaths: ["Software Developer", "Web Developer", "IT Support Specialist", "System Administrator"],
    colleges: [
      {
        name: "Government Polytechnic, Bangalore",
        location: "Bangalore, Karnataka",
        rating: 4.5,
        fees: "₹28,000/year",
        type: "Government"
      },
      {
        name: "IIIT Hyderabad Polytechnic",
        location: "Hyderabad, Telangana",
        rating: 4.7,
        fees: "₹40,000/year",
        type: "Government"
      },
      {
        name: "Manipal Institute of Technology",
        location: "Manipal, Karnataka",
        rating: 4.4,
        fees: "₹95,000/year",
        type: "Private"
      },
      {
        name: "SRM Institute Polytechnic",
        location: "Chennai, Tamil Nadu",
        rating: 4.2,
        fees: "₹78,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Junior Software Developer", "Web Developer", "IT Support Engineer", "Database Assistant"],
        salary: "₹3-6 LPA",
        experience: "High demand in IT companies and startups"
      },
      midLevel: {
        roles: ["Senior Developer", "Team Lead", "System Analyst", "Full Stack Developer"],
        salary: "₹8-18 LPA",
        experience: "Leadership roles in software development teams"
      },
      senior: {
        roles: ["Technical Architect", "Engineering Manager", "CTO", "Technology Consultant"],
        salary: "₹20-40+ LPA",
        experience: "Strategic technology leadership positions"
      }
    },
    higherEducation: {
      options: ["B.Tech Computer Science", "B.Tech Information Technology", "BCA", "B.Sc Computer Science"],
      duration: "3 years via lateral entry or 3-4 years regular",
      eligibility: "60% in diploma with strong programming background"
    },
    skillsGained: ["Programming Languages", "Web Technologies", "Database Management", "Software Testing", "System Administration", "Problem Solving"],
    industryDemand: 95
  },

  "business-administration": {
    title: "Diploma in Business Administration",
    description: "Management principles, business operations, and administrative skills.",
    duration: "3 Years",
    category: "business",
    subjects: ["Business Management", "Accounting", "Marketing", "Human Resources", "Business Law", "Economics"],
    careerPaths: ["Administrative Officer", "Business Coordinator", "Office Manager"],
    colleges: [
      {
        name: "Symbiosis Institute of Business Management",
        location: "Pune, Maharashtra",
        rating: 4.3,
        fees: "₹85,000/year",
        type: "Private"
      },
      {
        name: "Government Commerce College",
        location: "Ahmedabad, Gujarat",
        rating: 3.9,
        fees: "₹25,000/year",
        type: "Government"
      },
      {
        name: "Christ University Polytechnic",
        location: "Bangalore, Karnataka",
        rating: 4.5,
        fees: "₹75,000/year",
        type: "Private"
      },
      {
        name: "Loyola College of Management",
        location: "Chennai, Tamil Nadu",
        rating: 4.1,
        fees: "₹55,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Administrative Assistant", "Business Coordinator", "Office Executive", "Customer Service Representative"],
        salary: "₹2.5-4 LPA",
        experience: "Entry-level management and administrative positions"
      },
      midLevel: {
        roles: ["Office Manager", "Operations Executive", "HR Executive", "Business Analyst"],
        salary: "₹5-10 LPA",
        experience: "Supervisory roles with department management"
      },
      senior: {
        roles: ["General Manager", "Operations Director", "HR Director", "Business Consultant"],
        salary: "₹12-22 LPA",
        experience: "Senior management positions across industries"
      }
    },
    higherEducation: {
      options: ["BBA", "B.Com", "MBA", "PGDM"],
      duration: "3 years for bachelor's degree",
      eligibility: "Any stream with 50% minimum marks"
    },
    skillsGained: ["Business Communication", "Team Management", "Financial Planning", "Marketing Skills", "Leadership", "Strategic Thinking"],
    industryDemand: 78
  },

  "fashion-designing": {
    title: "Diploma in Fashion Designing",
    description: "Creative design, pattern making, and fashion industry knowledge.",
    duration: "3 Years",
    category: "creative",
    subjects: ["Fashion Design", "Pattern Making", "Textile Science", "Fashion Marketing", "Apparel Construction", "Fashion History"],
    careerPaths: ["Fashion Designer", "Pattern Maker", "Fashion Stylist"],
    colleges: [
      {
        name: "National Institute of Fashion Technology",
        location: "Delhi",
        rating: 4.8,
        fees: "₹2,50,000/year",
        type: "Government"
      },
      {
        name: "Pearl Academy",
        location: "Mumbai, Maharashtra",
        rating: 4.4,
        fees: "₹1,75,000/year",
        type: "Private"
      },
      {
        name: "Vogue Institute of Fashion Technology",
        location: "Bangalore, Karnataka",
        rating: 4.2,
        fees: "₹1,25,000/year",
        type: "Private"
      },
      {
        name: "Raffles Millennium International",
        location: "Mumbai, Maharashtra",
        rating: 4.1,
        fees: "₹1,95,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Assistant Fashion Designer", "Pattern Maker", "Fashion Illustrator", "Production Assistant"],
        salary: "₹2-4.5 LPA",
        experience: "Creative roles in fashion houses and garment companies"
      },
      midLevel: {
        roles: ["Fashion Designer", "Creative Director", "Fashion Merchandiser", "Brand Manager"],
        salary: "₹6-15 LPA",
        experience: "Independent design work and brand management"
      },
      senior: {
        roles: ["Chief Designer", "Fashion Entrepreneur", "Creative Director", "Fashion Consultant"],
        salary: "₹15-35+ LPA",
        experience: "Leadership in fashion brands or own fashion business"
      }
    },
    higherEducation: {
      options: ["B.Des Fashion Design", "B.Sc Fashion Technology", "Master's in Fashion Management"],
      duration: "4 years for bachelor's degree",
      eligibility: "Creative portfolio and entrance exam"
    },
    skillsGained: ["Design Software (Adobe Suite)", "Pattern Making", "Fabric Knowledge", "Fashion Illustration", "Trend Analysis", "Brand Development"],
    industryDemand: 72
  },

  "electrical-engineering": {
    title: "Diploma in Electrical Engineering",
    description: "Study of electricity, electronics, and power systems.",
    duration: "3 Years",
    category: "engineering",
    subjects: ["Power Systems", "Control Systems", "Electronics", "Electrical Machines", "Power Electronics", "Electrical Drives"],
    careerPaths: ["Electrician", "Power Plant Operator", "Technical Officer", "Maintenance Technician"],
    colleges: [
      {
        name: "Government Polytechnic, Kolkata",
        location: "Kolkata, West Bengal",
        rating: 4.1,
        fees: "₹24,000/year",
        type: "Government"
      },
      {
        name: "Jadavpur University Polytechnic",
        location: "Kolkata, West Bengal",
        rating: 4.6,
        fees: "₹32,000/year",
        type: "Government"
      },
      {
        name: "VIT Polytechnic College",
        location: "Vellore, Tamil Nadu",
        rating: 4.3,
        fees: "₹85,000/year",
        type: "Private"
      },
      {
        name: "BITS Pilani Polytechnic",
        location: "Pilani, Rajasthan",
        rating: 4.7,
        fees: "₹95,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Electrical Technician", "Maintenance Electrician", "Power Plant Operator", "Electrical Inspector"],
        salary: "₹2.8-5.5 LPA",
        experience: "High demand in power sector and manufacturing industries"
      },
      midLevel: {
        roles: ["Electrical Engineer", "Power Systems Engineer", "Maintenance Manager", "Electrical Consultant"],
        salary: "₹6-14 LPA",
        experience: "Supervisory roles in electrical operations and maintenance"
      },
      senior: {
        roles: ["Chief Electrical Engineer", "Power Plant Manager", "Electrical Contractor", "Energy Consultant"],
        salary: "₹16-28 LPA",
        experience: "Leadership in electrical infrastructure and energy management"
      }
    },
    higherEducation: {
      options: ["B.Tech Electrical Engineering", "B.Tech Power Engineering", "B.Tech Electronics Engineering"],
      duration: "3 years via lateral entry",
      eligibility: "60% in diploma with mathematics and physics background"
    },
    skillsGained: ["Electrical Circuit Analysis", "Power System Operation", "Motor Control", "PLC Programming", "Electrical Safety", "Troubleshooting"],
    industryDemand: 89
  },

  "electronics-communication": {
    title: "Diploma in Electronics & Communication",
    description: "Design of electronic circuits and telecommunications systems.",
    duration: "3 Years",
    category: "engineering",
    subjects: ["Digital Electronics", "Communication Systems", "Microprocessors", "Signal Processing", "VLSI Design", "Embedded Systems"],
    careerPaths: ["Electronics Technician", "Field Service Engineer", "Telecom Technician"],
    colleges: [
      {
        name: "Indian Institute of Technology Polytechnic",
        location: "Delhi",
        rating: 4.8,
        fees: "₹35,000/year",
        type: "Government"
      },
      {
        name: "PSG Polytechnic College",
        location: "Coimbatore, Tamil Nadu",
        rating: 4.4,
        fees: "₹65,000/year",
        type: "Private"
      },
      {
        name: "Government Polytechnic, Nashik",
        location: "Nashik, Maharashtra",
        rating: 3.9,
        fees: "₹26,000/year",
        type: "Government"
      },
      {
        name: "Amity Polytechnic Institute",
        location: "Noida, Uttar Pradesh",
        rating: 4.2,
        fees: "₹78,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Electronics Technician", "Field Service Engineer", "Telecom Technician", "Test Engineer"],
        salary: "₹3-5.5 LPA",
        experience: "Strong opportunities in telecom and electronics industries"
      },
      midLevel: {
        roles: ["Electronics Engineer", "Communication Engineer", "RF Engineer", "Product Development Engineer"],
        salary: "₹7-16 LPA",
        experience: "Design and development roles in electronics companies"
      },
      senior: {
        roles: ["Principal Engineer", "R&D Head", "Technical Director", "Electronics Consultant"],
        salary: "₹18-32 LPA",
        experience: "Leadership in electronics design and development"
      }
    },
    higherEducation: {
      options: ["B.Tech Electronics & Communication", "B.Tech VLSI Design", "B.Tech Telecommunications"],
      duration: "3 years via lateral entry",
      eligibility: "60% in diploma with strong electronics background"
    },
    skillsGained: ["Circuit Design", "Microprocessor Programming", "Communication Protocols", "Signal Processing", "PCB Design", "Embedded Programming"],
    industryDemand: 92
  },

  "automobile-engineering": {
    title: "Diploma in Automobile Engineering",
    description: "Design, production, and repair of vehicles.",
    duration: "3 Years",
    category: "engineering",
    subjects: ["Automotive Systems", "Engine Technology", "Vehicle Dynamics", "Automobile Electronics", "Manufacturing Processes", "Quality Control"],
    careerPaths: ["Automobile Technician", "Service Advisor", "Quality Control Inspector"],
    colleges: [
      {
        name: "Government Tool Room & Training Centre",
        location: "Chennai, Tamil Nadu",
        rating: 4.2,
        fees: "₹28,000/year",
        type: "Government"
      },
      {
        name: "Maruti Suzuki Polytechnic",
        location: "Gurgaon, Haryana",
        rating: 4.5,
        fees: "₹55,000/year",
        type: "Private"
      },
      {
        name: "Tata Motors Polytechnic",
        location: "Pune, Maharashtra",
        rating: 4.6,
        fees: "₹68,000/year",
        type: "Private"
      },
      {
        name: "Government Polytechnic, Indore",
        location: "Indore, Madhya Pradesh",
        rating: 3.8,
        fees: "₹23,000/year",
        type: "Government"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Automobile Technician", "Service Advisor", "Quality Inspector", "Production Assistant"],
        salary: "₹2.5-4.8 LPA",
        experience: "Direct employment opportunities in automotive sector"
      },
      midLevel: {
        roles: ["Service Manager", "Production Supervisor", "Design Engineer", "Quality Manager"],
        salary: "₹6-13 LPA",
        experience: "Managerial roles in automotive manufacturing and service"
      },
      senior: {
        roles: ["Plant Manager", "Chief Engineer", "Automotive Consultant", "Dealership Owner"],
        salary: "₹15-26 LPA",
        experience: "Senior positions in automotive industry leadership"
      }
    },
    higherEducation: {
      options: ["B.Tech Automobile Engineering", "B.Tech Mechanical Engineering", "B.Tech Production Engineering"],
      duration: "3 years via lateral entry",
      eligibility: "60% in diploma with mechanical/automobile background"
    },
    skillsGained: ["Vehicle Diagnostics", "Engine Repair", "Manufacturing Processes", "Quality Control", "Customer Service", "Technical Documentation"],
    industryDemand: 86
  },

  "banking-finance": {
    title: "Diploma in Banking & Finance",
    description: "Financial services, banking operations, and investment management.",
    duration: "3 Years",
    category: "business",
    subjects: ["Banking Operations", "Financial Accounting", "Insurance", "Investment Planning", "Risk Management", "Digital Banking"],
    careerPaths: ["Bank Officer", "Financial Advisor", "Insurance Agent"],
    colleges: [
      {
        name: "Institute of Banking & Finance",
        location: "Mumbai, Maharashtra",
        rating: 4.3,
        fees: "₹65,000/year",
        type: "Private"
      },
      {
        name: "Government Commerce College",
        location: "Delhi",
        rating: 4.0,
        fees: "₹28,000/year",
        type: "Government"
      },
      {
        name: "ICFAI Business School Polytechnic",
        location: "Hyderabad, Telangana",
        rating: 4.2,
        fees: "₹75,000/year",
        type: "Private"
      },
      {
        name: "Narsee Monjee Institute",
        location: "Mumbai, Maharashtra",
        rating: 4.4,
        fees: "₹85,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Bank Clerk", "Insurance Agent", "Financial Advisor", "Credit Analyst"],
        salary: "₹3-5.5 LPA",
        experience: "Entry-level positions in banking and financial services"
      },
      midLevel: {
        roles: ["Bank Officer", "Branch Manager", "Investment Advisor", "Insurance Manager"],
        salary: "₹7-15 LPA",
        experience: "Managerial roles in financial institutions"
      },
      senior: {
        roles: ["Regional Manager", "Financial Consultant", "Investment Banker", "Insurance Director"],
        salary: "₹16-30 LPA",
        experience: "Senior leadership in financial services industry"
      }
    },
    higherEducation: {
      options: ["BBA Finance", "B.Com Banking", "MBA Finance", "CA/CMA"],
      duration: "3 years for bachelor's degree",
      eligibility: "Any stream with 50% minimum marks"
    },
    skillsGained: ["Financial Analysis", "Risk Assessment", "Customer Relations", "Digital Banking", "Investment Planning", "Regulatory Compliance"],
    industryDemand: 83
  },

  "office-management": {
    title: "Diploma in Office Management",
    description: "Office administration, secretarial skills, and business communication.",
    duration: "3 Years",
    category: "business",
    subjects: ["Office Administration", "Business Communication", "Computer Applications", "Record Keeping", "Human Resources", "Project Management"],
    careerPaths: ["Office Administrator", "Executive Assistant", "Data Entry Operator"],
    colleges: [
      {
        name: "Delhi School of Management",
        location: "Delhi",
        rating: 4.1,
        fees: "₹45,000/year",
        type: "Private"
      },
      {
        name: "Government Secretarial College",
        location: "Mumbai, Maharashtra",
        rating: 3.8,
        fees: "₹22,000/year",
        type: "Government"
      },
      {
        name: "Bharatiya Vidya Bhavan",
        location: "Bangalore, Karnataka",
        rating: 4.0,
        fees: "₹38,000/year",
        type: "Private"
      },
      {
        name: "Institute of Administrative Management",
        location: "Chennai, Tamil Nadu",
        rating: 3.9,
        fees: "₹42,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Office Assistant", "Data Entry Operator", "Receptionist", "Administrative Assistant"],
        salary: "₹2-3.8 LPA",
        experience: "Administrative support roles across all industries"
      },
      midLevel: {
        roles: ["Office Manager", "Executive Assistant", "Administrative Coordinator", "HR Assistant"],
        salary: "₹4-8 LPA",
        experience: "Supervisory and coordination roles in office management"
      },
      senior: {
        roles: ["Administrative Manager", "Operations Manager", "Office Director", "Business Administrator"],
        salary: "₹9-18 LPA",
        experience: "Senior administrative leadership positions"
      }
    },
    higherEducation: {
      options: ["BBA", "B.Com", "MBA", "PGDM"],
      duration: "3 years for bachelor's degree",
      eligibility: "Any stream with 50% minimum marks"
    },
    skillsGained: ["Office Software", "Communication Skills", "Time Management", "Record Keeping", "Customer Service", "Administrative Planning"],
    industryDemand: 76
  },

  "hotel-management": {
    title: "Diploma in Hotel Management",
    description: "Hospitality, food service, and hotel operations management.",
    duration: "3 Years",
    category: "business",
    subjects: ["Hotel Operations", "Food & Beverage", "Front Office", "Housekeeping", "Event Management", "Tourism Management"],
    careerPaths: ["Hotel Manager", "Restaurant Manager", "Event Coordinator"],
    colleges: [
      {
        name: "Institute of Hotel Management, Delhi",
        location: "Delhi",
        rating: 4.6,
        fees: "₹1,25,000/year",
        type: "Government"
      },
      {
        name: "Oberoi Centre of Learning & Development",
        location: "Delhi",
        rating: 4.8,
        fees: "₹2,50,000/year",
        type: "Private"
      },
      {
        name: "IHM Mumbai",
        location: "Mumbai, Maharashtra",
        rating: 4.4,
        fees: "₹1,35,000/year",
        type: "Government"
      },
      {
        name: "Welcomgroup Graduate School",
        location: "Manipal, Karnataka",
        rating: 4.3,
        fees: "₹1,85,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Hotel Associate", "Restaurant Supervisor", "Front Office Executive", "Event Assistant"],
        salary: "₹2.5-4.5 LPA",
        experience: "Operational roles in hospitality and tourism industry"
      },
      midLevel: {
        roles: ["Hotel Manager", "Restaurant Manager", "Event Manager", "Travel Consultant"],
        salary: "₹6-14 LPA",
        experience: "Management positions in hotels and hospitality businesses"
      },
      senior: {
        roles: ["General Manager", "Regional Director", "Hotel Owner", "Hospitality Consultant"],
        salary: "₹15-35 LPA",
        experience: "Senior leadership in hospitality industry"
      }
    },
    higherEducation: {
      options: ["BHM", "Bachelor of Tourism Management", "MBA Hotel Management"],
      duration: "3-4 years for bachelor's degree",
      eligibility: "Any stream with English proficiency"
    },
    skillsGained: ["Customer Service", "Event Planning", "Food & Beverage Management", "Hotel Operations", "Communication Skills", "Cultural Awareness"],
    industryDemand: 79
  },

  "pharmacy": {
    title: "Diploma in Pharmacy",
    description: "Pharmaceutical science, drug preparation, and healthcare.",
    duration: "2 Years",
    category: "medical",
    subjects: ["Pharmacology", "Pharmaceutical Chemistry", "Drug Formulation", "Hospital Pharmacy", "Clinical Pharmacy", "Pharmacy Law"],
    careerPaths: ["Pharmacist Assistant", "Medical Representative", "Drug Inspector"],
    colleges: [
      {
        name: "Jamia Hamdard Polytechnic",
        location: "Delhi",
        rating: 4.5,
        fees: "₹75,000/year",
        type: "Private"
      },
      {
        name: "Government Pharmacy College",
        location: "Mumbai, Maharashtra",
        rating: 4.2,
        fees: "₹35,000/year",
        type: "Government"
      },
      {
        name: "Manipal College of Pharmaceutical Sciences",
        location: "Manipal, Karnataka",
        rating: 4.6,
        fees: "₹95,000/year",
        type: "Private"
      },
      {
        name: "NIPER Mohali",
        location: "Mohali, Punjab",
        rating: 4.7,
        fees: "₹45,000/year",
        type: "Government"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Pharmacy Assistant", "Medical Representative", "Drug Store Manager", "Hospital Pharmacist"],
        salary: "₹2.8-5 LPA",
        experience: "Essential healthcare roles in pharmaceutical sector"
      },
      midLevel: {
        roles: ["Registered Pharmacist", "Pharmaceutical Sales Manager", "Quality Control Analyst", "Drug Inspector"],
        salary: "₹6-12 LPA",
        experience: "Professional pharmaceutical practice and regulation"
      },
      senior: {
        roles: ["Chief Pharmacist", "Pharmaceutical Consultant", "Drug Regulatory Affairs", "Pharmacy Owner"],
        salary: "₹13-22 LPA",
        experience: "Senior roles in pharmaceutical industry and regulation"
      }
    },
    higherEducation: {
      options: ["B.Pharmacy", "M.Pharmacy", "Pharm.D"],
      duration: "4 years for B.Pharmacy",
      eligibility: "Science background with chemistry and biology"
    },
    skillsGained: ["Drug Knowledge", "Patient Counseling", "Pharmaceutical Calculations", "Quality Control", "Regulatory Compliance", "Healthcare Ethics"],
    industryDemand: 88
  },

  "digital-marketing": {
    title: "Diploma in Digital Marketing",
    description: "Online marketing, social media management, and digital advertising.",
    duration: "1 Year",
    category: "business",
    subjects: ["SEO/SEM", "Social Media Marketing", "Content Marketing", "Analytics", "Email Marketing", "E-commerce"],
    careerPaths: ["Digital Marketing Executive", "Social Media Manager", "Content Creator"],
    colleges: [
      {
        name: "Digital Marketing Institute, Delhi",
        location: "Delhi",
        rating: 4.3,
        fees: "₹65,000/year",
        type: "Private"
      },
      {
        name: "Google Digital Academy",
        location: "Bangalore, Karnataka",
        rating: 4.6,
        fees: "₹85,000/year",
        type: "Private"
      },
      {
        name: "Indian School of Digital Marketing",
        location: "Mumbai, Maharashtra",
        rating: 4.2,
        fees: "₹55,000/year",
        type: "Private"
      },
      {
        name: "NIIT Digital Marketing",
        location: "Chennai, Tamil Nadu",
        rating: 4.1,
        fees: "₹48,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Digital Marketing Executive", "Social Media Coordinator", "Content Writer", "SEO Analyst"],
        salary: "₹3-6 LPA",
        experience: "High growth opportunities in digital economy"
      },
      midLevel: {
        roles: ["Digital Marketing Manager", "Social Media Manager", "Content Marketing Head", "Growth Hacker"],
        salary: "₹8-18 LPA",
        experience: "Strategic roles in digital marketing and brand management"
      },
      senior: {
        roles: ["Digital Marketing Director", "CMO", "Digital Consultant", "Agency Owner"],
        salary: "₹20-40+ LPA",
        experience: "Leadership in digital transformation and marketing strategy"
      }
    },
    higherEducation: {
      options: ["BBA Marketing", "MBA Digital Marketing", "Advanced Digital Marketing Certifications"],
      duration: "3 years for bachelor's degree",
      eligibility: "Any stream with basic computer knowledge"
    },
    skillsGained: ["SEO/SEM", "Social Media Management", "Content Creation", "Analytics", "Digital Advertising", "Marketing Automation"],
    industryDemand: 96
  },

  "interior-design": {
    title: "Diploma in Interior Design",
    description: "Space planning, design aesthetics, and architectural visualization.",
    duration: "3 Years",
    category: "creative",
    subjects: ["Space Planning", "Color Theory", "3D Modeling", "Building Materials", "Furniture Design", "Lighting Design"],
    careerPaths: ["Interior Designer", "Design Consultant", "Project Coordinator"],
    colleges: [
      {
        name: "National Institute of Design",
        location: "Ahmedabad, Gujarat",
        rating: 4.8,
        fees: "₹2,25,000/year",
        type: "Government"
      },
      {
        name: "Arch Academy of Design",
        location: "Jaipur, Rajasthan",
        rating: 4.3,
        fees: "₹1,25,000/year",
        type: "Private"
      },
      {
        name: "Hamstech Institute of Creative Education",
        location: "Hyderabad, Telangana",
        rating: 4.2,
        fees: "₹95,000/year",
        type: "Private"
      },
      {
        name: "JD Institute of Fashion Technology",
        location: "Delhi",
        rating: 4.1,
        fees: "₹1,15,000/year",
        type: "Private"
      }
    ],
    careerProgression: {
      immediate: {
        roles: ["Assistant Interior Designer", "CAD Operator", "Design Intern", "Project Assistant"],
        salary: "₹2.5-4.5 LPA",
        experience: "Creative roles in design studios and architecture firms"
      },
      midLevel: {
        roles: ["Interior Designer", "Design Consultant", "Project Manager", "Space Planner"],
        salary: "₹6-15 LPA",
        experience: "Independent design practice and client management"
      },
      senior: {
        roles: ["Senior Designer", "Design Director", "Design Entrepreneur", "Architecture Consultant"],
        salary: "₹16-35+ LPA",
        experience: "Leadership in design firms or own design business"
      }
    },
    higherEducation: {
      options: ["B.Des Interior Design", "B.Arch", "M.Des Interior Design"],
      duration: "4 years for bachelor's degree",
      eligibility: "Creative portfolio and entrance exam"
    },
    skillsGained: ["3D Modeling Software", "Space Planning", "Material Knowledge", "Design Visualization", "Project Management", "Client Consultation"],
    industryDemand: 81
  }
};

export const getCourseDetails = (courseId: string): CourseDetail | null => {
  return detailedCourseData[courseId] || null;
};