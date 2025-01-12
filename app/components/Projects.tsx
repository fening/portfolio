import { Mail, MapPin, Linkedin, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Project = {
  title: string;
  description: string;
  tags: string[];
};

type ProjectCategories = {
  dataScience: Project[];
  cybersecurity: Project[];
};

type CategoryKey = keyof ProjectCategories;

export function Projects() {
  const projects: ProjectCategories = {
    dataScience: [
      {
        title: "Shepherd Hospital Project",
        description: "Developed causal inference models to assess stroke treatment efficacy for personalized healthcare plans",
        tags: ["Causal Inference", "Healthcare Analytics", "Python"]
      },
      {
        title: "Large Language Model Deployment",
        description: "Deployed local LLMs using Retrieval-Augmented Generation (RAG) with langchain for advanced tabular data queries",
        tags: ["LLM", "RAG", "NLP"]
      },
      {
        title: "Big Data Streaming Analytics",
        description: "Implemented PySpark streaming for real-time business success prediction across states",
        tags: ["PySpark", "Streaming Analytics", "Big Data"]
      },
      {
        title: "Hospital Management System",
        description: "Created MongoDB-based system with ML for patient-doctor matching",
        tags: ["MongoDB", "Machine Learning", "Healthcare"]
      }
    ],
    cybersecurity: [
      {
        title: "Enterprise Security Assessment",
        description: "Led comprehensive IT audits improving control effectiveness by 25% and reducing non-compliance by 30%",
        tags: ["Security Audit", "Compliance", "Risk Assessment"]
      },
      {
        title: "Fintech Security Framework",
        description: "Implemented security controls in fintech operations, resulting in 20% improvement in audit outcomes",
        tags: ["Fintech", "Security Controls", "Compliance"]
      },
      {
        title: "Mobile Banking Security",
        description: "Led USSD mobile banking implementation with PCI DSS compliance",
        tags: ["PCI DSS", "Mobile Security", "Banking"]
      }
    ]
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        
        <Tabs defaultValue="dataScience" className="w-full">
          <TabsList className="mb-8 p-1 bg-gray-100 rounded-lg w-fit">
            <TabsTrigger 
              className="px-6 py-2 rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm" 
              value="dataScience"
            >
              Data Science Projects
            </TabsTrigger>
            <TabsTrigger 
              className="px-6 py-2 rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm" 
              value="cybersecurity"
            >
              Cybersecurity Projects
            </TabsTrigger>
          </TabsList>
          
          {(["dataScience", "cybersecurity"] as CategoryKey[]).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects[category].map((project, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

