export function Experience() {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Georgia State University, Atlanta",
      period: "Aug 2023 – Jul 2024",
      responsibilities: [
        "Shepherd Hospital Project: Developed causal inference models to assess stroke treatment efficacy, for personalized healthcare plans",
        "Large Language Model Deployment: Deployed local large language models and used Retrieval-Augmented Generation (RAG) with langchain for advanced tabular data queries and NLP, enhancing data accessibility and insights",
        "Big Data Streaming with PySpark: Implemented streaming for data analysis, predicting business success in real-time across states",
        "Hospital Management System with MongoDB: Created a MongoDB-based system utilizing ML for patient-doctor matching, which will improve hospital management efficiency"
      ]
    },
    {
      title: "Information Technology (IT) Auditor, Continuous Auditing and Programs Audit",
      company: "MTN Ghana, Accra",
      period: "May 2021 – Oct 2023",
      responsibilities: [
        "Evaluate the design and effectiveness of IT general controls, ensuring systems, applications, and databases are secure and compliant with regulatory standards, resulting in a 20% reduction in identified control deficiencies",
        "Conducted 15+ comprehensive IT audits across various departments, assessing compliance with regulations, leading to a 25% improvement in IT control effectiveness and reducing non-compliance incidents by 30%",
        "Perform cybersecurity audits to identify vulnerabilities and ensure that the organization's data protection, network security, and incident response measures are robust and effective",
        "Assess IT-related risks and evaluate the adequacy of risk management strategies and internal controls to mitigate those risks, which resulted in a 30% reduction in risk exposure and ensuring alignment with industry standards",
        "Audit IT application controls to verify that they effectively support business processes, ensuring data accuracy, integrity, and proper authorization within critical applications"
      ]
    },
    {
      title: "Analyst, Fintech Compliance and Analytics",
      company: "MTN Ghana, Accra",
      period: "Jul 2018 – Apr 2021",
      responsibilities: [
        "Conducted compliance reviews on customer onboarding, AML, CFT, and other regulations, improving compliance by 15% and reducing regulatory risks",
        "Implemented a policy monitoring system, increasing policy compliance by 20% and enhancing governance effectiveness",
        "Analyzed data and utilized continuous control monitoring to identify fraudulent patterns, enabling effective monitoring and leading to decisive actions such as barring numbers involved in fraud",
        "Developed compliance dashboards and a compliance risk register, boosting overall compliance by 10% and supporting comprehensive risk management processes",
        "Integrated security controls into the compliance monitoring framework, ensuring that all fintech operations adhered to both regulatory and cybersecurity standards, resulting in a 20% improvement in audit outcomes"
      ]
    },
    {
      title: "Mobile Banking Specialist",
      company: "Global Access Savings & Loans Limited, Accra",
      period: "Sep 2017 - Jul 2018",
      responsibilities: [
        "Led the implementation of a USSD mobile banking solution, increasing customer satisfaction by 20% in three months, and ensured PCI DSS compliance across all processes",
        "Resolved 99% of technical issues, reduced fraud investigation backlog, and trained staff, boosting overall efficiency and product adoption"
      ]
    },
    {
      title: "Regulatory Reporting Analyst",
      company: "Global Access Savings & Loans Limited, Accra",
      period: "Sep 2015 - Aug 2017",
      responsibilities: [
        "Enhanced Fintech Reporting: Delivered 50+ financial and regulatory reports annually, ensuring 100% compliance and improving decision-making by 20%",
        "Business Analysis, Reporting, and Data Visualization: Streamlined reporting and analysis with Excel and Power BI, reducing preparation time by 30% and boosting data-driven strategy effectiveness by 25%"
      ]
    }
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
                <div className="bg-white top-12 p-6 md:p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative z-10 mt-16">
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

