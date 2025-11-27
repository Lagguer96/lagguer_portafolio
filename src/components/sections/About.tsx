"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="
        min-h-screen 
        py-20 px-6 
        bg-gradient-to-br from-gray-800 via-gray-900 to-black
        text-white
      "
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Sobre mí
      </motion.h2>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Foto (si no tienes aún, queda en placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="
            w-56 h-56 rounded-full bg-gray-700/40 border border-gray-600 
            flex items-center justify-center text-gray-400 text-sm
          ">
            Foto aquí
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Soy un desarrollador web en formación, enfocado en construir interfaces
            modernas, limpias y funcionales. Me interesa el desarrollo frontend,
            los sistemas Linux (especialmente Ubuntu) y las herramientas que permiten
            automatizar y optimizar flujos de trabajo.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Estoy desarrollando un portafolio profesional enfocado en proyectos reales,
            mejores prácticas y crecimiento constante dentro del ecosistema JavaScript
            y tecnologías modernas como Next.js y Tailwind CSS.
          </p>

          {/* Habilidades */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Habilidades principales</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-400">
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>Linux / Ubuntu</li>
              <li>Shell Scripting</li>
              <li>Node.js básico</li>
              <li>Automatización básica</li>
              <li>HTML5 & CSS3</li>
              <li>TypeScript</li>
              <li>Framer Motion</li>
              <li>Consumo de APIs</li>
              <li>Git / GitHub</li>
              <li>Desarrollo responsivo</li>
              <li>Optimización web</li>
              <li>Buenas prácticas</li>
              <li>UI/UX básica</li>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Comunicación efectiva</li>
              <li>Organización</li>
              <li>Aprendizaje continuo</li>
              <li>Gestión del tiempo</li>
              <li>Atención al detalle</li>
              <li>Creatividad</li>
              <li>Adaptabilidad</li>
              <li>Proactividad</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
