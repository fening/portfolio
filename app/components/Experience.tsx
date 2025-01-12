export function Experience() {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Georgia State University, Atlanta",
      period: "Aug 2023 – Jul 2024",
      responsibilities: [
        "Developed causal inference models for stroke treatment efficacy",
        "Deployed local large language models and used RAG with langchain",
        "Implemented big data streaming with PySpark",
        "Created a MongoDB-based hospital management system"
      ]
    },
    {
      title: "Information Technology (IT) Auditor",
      company: "MTN Ghana, Accra",
      period: "May 2021 – Oct 2023",
      responsibilities: [
        "Evaluated IT general controls, reducing deficiencies by 20%",
        "Conducted 15+ comprehensive IT audits, improving control effectiveness by 25%",
        "Performed cybersecurity audits and assessed IT-related risks",
        "Audited IT application controls to verify effectiveness"
      ]
    },
    // Add more experiences here
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="space-y-8 relative">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-16 md:pl-32 pb-8 last:pb-0"
            >
              {/* Timeline line */}
                <div className="absolute left-[30px] md:left-[40px] top-0 bottom-0 w-0.5 bg-blue-100"></div>
              
              {/* Timeline dot - moved to top */}
              <div className="absolute left-[14px] md:left-[26px] top-0 w-8 h-8 bg-white rounded-full border-4 border-blue-500 shadow-md z-20"></div>
              
              {/* Date badge */}
              <div className="hidden md:block absolute left-[70px] top-0 z-30">
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap shadow-sm">
                {exp.period}
              </div>
              </div>

                {/* Content card */}
                <div className="bg-white p-6 md:p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative z-10 mt-16">
              {/* Mobile date display */}
              <div className="text-blue-600 font-medium text-sm mb-3 md:hidden">
                {exp.period}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
              <p className="text-lg text-blue-600 mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span className="flex-1">{resp}</span>
                </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

