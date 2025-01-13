export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am an experienced IT professional with multiple years of experience in driving success through advanced analytics, technology assurance, and continuous improvement. My expertise spans across security frameworks, data analytics, machine learning, cloud computing, and systems engineering.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </div>
            <div className="relative space-y-6 bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900">Core Skills</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Security Frameworks</li>
                <li>Data Analytics</li>
                <li>Machine Learning</li>
                <li>Cloud Computing</li>
                <li>Systems Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}