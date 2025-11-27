"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Proyectos
      </motion.h2>

      <div className="grid gap-10 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            tech={p.tech}
            link={p.link}
            github={p.github}
          />
        ))}
      </div>
    </section>
  );
}
