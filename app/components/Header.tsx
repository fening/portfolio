import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link></li>
          <li><Link href="#skills" className="text-gray-700 hover:text-blue-600">Skills</Link></li>
          <li><Link href="#experience" className="text-gray-700 hover:text-blue-600">Experience</Link></li>
          <li><Link href="#education" className="text-gray-700 hover:text-blue-600">Education</Link></li>
          <li><Link href="#projects" className="text-gray-700 hover:text-blue-600">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
