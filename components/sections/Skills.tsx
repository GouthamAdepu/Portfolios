"use client";

import { motion } from "framer-motion";
import { Code2, Database, Palette, Globe } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Palette,
    items: ["Python", "C", "C++", "JavaScript"],
  },
  {
    category: "Web Development",
    icon: Database,
    items: ["Node.js", "React", "Express", "MongoDB"],
  },
  {
    category: "Operating Systems",
    icon: Globe,
    items: ["Windows", "Linux", "MacOS"],
  },
  {
    category: "Tools",
    icon: Code2,
    items: ["Git", "VS Code", "Eclipse", "IntelliJ IDEA"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 relative" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
            >
              <skill.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}