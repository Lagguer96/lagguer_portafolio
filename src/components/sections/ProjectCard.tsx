import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export default function ProjectCard({ title, description, tech, link, github }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        p-6 rounded-xl bg-gray-800/40 backdrop-blur border border-gray-700 
        shadow-lg hover:shadow-xl transition-all text-white
      "
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-lg text-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a href={link} target="_blank" className="text-indigo-400 hover:underline">
          Ver Proyecto
        </a>

        <a href={github} target="_blank" className="text-gray-400 hover:underline">
          Código GitHub
        </a>
      </div>
    </motion.div>
  );
}
