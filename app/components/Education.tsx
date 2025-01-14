export function Education() {
  const education = [
    {
      degree: "MSc Data Science and Analytics",
      school: "Georgia State University, J. Mack Robinson College of Business, Atlanta, GA",
      period: "Aug 2023 - Jul 2024",
      courses: [
        "Machine & Deep Learning",
        "Data Mining",
        "Statistics & Probability",
        "Data Management",
        "Data Visualization",
        "Scalable & Predictive Analytics"
      ]
    },
    {
      degree: "BSc in Information Technology",
      school: "Ghana Communication Technology University, Accra",
      period: "Sep 2013 - Jul 2017",
      courses: [
        "Computer Networks",
        "Database Management Systems",
        "Information Security",
        "Web Development",
        "Software Engineering",
        "Operating Systems",
        "Business Intelligence"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="space-y-8 relative">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="relative pl-16 md:pl-32"
            >
              {/* Timeline line */}
              <div className="absolute left-[30px] md:left-[40px] top-0 bottom-0 w-0.5 bg-blue-100"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[14px] md:left-[26px] top-0 w-8 h-8 bg-white rounded-full border-4 border-blue-500 shadow-md z-20"></div>
              
              {/* Date badge */}
              <div className="hidden md:block absolute left-[70px] top-0 z-30">
                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap shadow-sm">
                  {edu.period}
                </div>
              </div>

              {/* Content card */}
              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mt-16">
                {/* Mobile date display */}
                <div className="text-blue-600 font-medium text-sm mb-3 md:hidden">
                  {edu.period}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-lg text-blue-600 mb-4">{edu.school}</p>
                
                {edu.courses && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

