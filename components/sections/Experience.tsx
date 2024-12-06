"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "SR University",
    period: "2024-2028",
    description: "Focused on computer science fundamentals, software engineering, and web development",
  },
  {
    degree: "Intermediate in MPC",
    school: "Narayana Junior College",
    period: "2022-2024",
    description: "Specialized in Mathematics, Physics, and Chemistry with strong academic performance",
  },
  {
    degree: "Schooling",
    school: "Pathfinder Group of Schools",
    period: "2020-2022",
    description: "Completed secondary education with distinction in science and mathematics",
  },
];

export default function Experience() {
  return (
    <section className="py-20 relative" id="education">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />
              
              {/* Content */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group-hover:translate-x-2">
                <div className="absolute -left-2 top-6 w-6 h-[2px] bg-primary/30 group-hover:w-8 group-hover:bg-primary transition-all" />
                <time className="text-sm text-muted-foreground mb-1 block">
                  {edu.period}
                </time>
                <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-primary mb-3">{edu.degree}</p>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}