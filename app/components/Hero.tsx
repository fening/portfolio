import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-lg mt-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-blue-600 tracking-wide animate-fade-in">
              Hello, I'm
            </h2>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fening Okai
            </h1>
            <p className="text-2xl text-gray-600 font-light">
              Data and Security Enthusiast
            </p>
          </div>

          <p className="text-gray-600 max-w-lg leading-relaxed">
            An IT professional driving success through advanced analytics, 
            technology assurance, and continuous improvement.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://github.com/fening" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/kwadwofeningokai/" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:feningokai@gmail.com" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 animate-pulse -z-10" />
            <Image
              src="/images/pic.jpg"
              alt="Fening Okai"
              width={512}
              height={512}
              className="rounded-full w-full h-full object-cover shadow-2xl relative z-10"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhwYHBoXFxodHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </div>
    </section>
  )
}

