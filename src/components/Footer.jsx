import { Mail, Github, Linkedin, Link } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8" id="contacto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-lg font-semibold">Contacto</p>
            <div className="flex items-center gap-6">
                <Mail className="h-5 w-5" />
                <p className=" md:inline">sanchezbisaack@gmail.com</p>
              <a
                href="https://www.linkedin.com/in/kisb03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/IsaackMD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-right text-sm text-gray-400">
            <p className="md:text-left">&copy; 2025 Kevin Isaac Sanchez Benitez.</p>
            <p className="md:text-right">Desarrollado por Kevin Isaac Sanchez Benitez</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

