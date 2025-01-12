import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      text: "feningokai@gmail.com",
      href: "mailto:feningokai@gmail.com",
    },
    {
      icon: Phone,
      text: "(678) 436 9245",
    },
    {
      icon: MapPin,
      text: "Houston, TX",
    },
    {
      icon: Linkedin,
      text: "LinkedIn Profile",
      href: "https://bit.ly/3XiS3c5",
    },
    {
      icon: Github,
      text: "GitHub Profile",
      href: "https://bit.ly/4dTf38j",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactItems.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                {item.href ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-600">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

