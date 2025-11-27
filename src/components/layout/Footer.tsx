"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0a0f1c] to-[#111827] border-t border-white/10 mt-0 py-12 text-gray-300">

      <div className="max-w-6xl mx-auto px-12 grid md:grid-cols-3 gap-12">

        {/* Columna 1 */}
        <div>
          <h2 className="text-xl font-bold text-white">Tu Nombre</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Desarrollador Web especializado en Frontend y entusiasta de las nuevas tecnologías.  
            Este portafolio está construido con Next.js, Tailwind CSS y animaciones modernas.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Secciones</h3>
          <ul className="space-y-2">
            <li><Link href="#inicio" className="hover:text-purple-400 transition">Inicio</Link></li>
            <li><Link href="#sobre-mi" className="hover:text-purple-400 transition">Sobre mí</Link></li>
            <li><Link href="#proyectos" className="hover:text-purple-400 transition">Proyectos</Link></li>
            <li><Link href="/contact" className="hover:text-purple-400 transition">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Conecta conmigo</h3>

          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/Lagguer96"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/marcel-eduardo-lagg/"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:medina17796@gmail.com"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {year} Lagguer — Todos los derechos reservados.
      </div>
    </footer>
  );
}
