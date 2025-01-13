import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Skills() {
  const skills = {
    technical: [
      {
        title: "Security Frameworks and Tools",
        description: "Proficient in implementing and managing security frameworks such as ISO27001/2, NIST, COBIT, CIS, OWASP, and PCI DSS.",
        tags: ["ISO27001", "NIST", "COBIT", "CIS", "OWASP", "PCI DSS"]
      },
      {
        title: "Data Analytics and Machine Learning",
        description: "Expertise in analyzing structured and unstructured data using SQL, SAS, R, ACL, and Spark, with proficiency in applying machine learning techniques.",
        tags: ["SQL", "SAS", "R", "ACL", "Spark", "Machine Learning"]
      },
      {
        title: "Cloud Computing",
        description: "Strong capabilities in cloud computing platforms like VMWare, AWS, Azure, and GCP, along with extensive knowledge in systems engineering.",
        tags: ["AWS", "Azure", "GCP", "VMWare"]
      },
      {
        title: "Applications and Networking",
        description: "Proficient in using Power platforms (PowerApps), Microsoft applications, and experienced in networking, including Routing, Switching, and Firewall management.",
        tags: ["PowerApps", "Microsoft 365", "Networking", "Firewall"]
      }
    ],
    professional: [
      {
        title: "Problem Solving & Analysis",
        description: "Expertise in leading and managing projects and teams, combined with strong problem-solving and analytical skills.",
        tags: ["Project Management", "Team Leadership", "Analysis", "Problem Solving"]
      },
      {
        title: "Compliance & Risk Management",
        description: "Experience in regulatory compliance, risk assessment, and implementing governance frameworks.",
        tags: ["GRC", "Risk Assessment", "Compliance", "Audit"]
      }
    ]
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="mb-8 p-1 bg-gray-100 rounded-lg w-fit">
            <TabsTrigger 
              className="px-6 py-2 rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm" 
              value="technical"
            >
              Technical Skills
            </TabsTrigger>
            <TabsTrigger 
              className="px-6 py-2 rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm" 
              value="professional"
            >
              Professional Skills
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.technical.map((skill, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-600">{skill.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, i) => (
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

          <TabsContent value="professional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.professional.map((skill, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-600">{skill.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, i) => (
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
        </Tabs>
      </div>
    </section>
  )
}

