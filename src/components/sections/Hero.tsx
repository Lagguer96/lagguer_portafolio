"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const words = ["Desarrollador Web", "Frontend Developer", "Creativo Digital"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const currentWord = words[index % words.length];


  // Typing effect logic
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      !reverse
    ) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="inicio"
      className="
        min-h-screen 
        flex flex-col items-center justify-center text-center px-6 
        bg-gradient-to-br from-gray-900 via-gray-800 to-black 
        text-white
      "
    >

      {/* Nombre */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hola, soy <span className="text-blue-600">Marcel Medina</span>
      </motion.h1>

      {/* Typing effect */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-3xl text-gray-100 dark:text-gray-300 h-10"
      >
        {currentWord?.substring(0, subIndex) ?? "|"}
      </motion.h2>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 max-w-xl text-gray-10 leading-relaxed"
      >
        Bienvenido a mi portafolio profesional. Aquí encontrarás mis proyectos,
        experiencia y formas de contacto.
      </motion.p>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#proyectos"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Ver Proyectos
        </a>

        <a
          href="#contacto"
          className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          Contacto
        </a>
      </motion.div>

    </section>
  );
}
