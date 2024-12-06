"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 relative" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="flex items-center gap-4 mb-12">
          <User className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-muted"
          >
            <Image
              src="/profile.jpg"
              alt="Adepu Goutham Sri Bhargav"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I am Goutham Sri Bhargav Adepu, an enthusiastic and dedicated Computer Science and Engineering (CSE) student at SR University. 
                I possess a strong foundation in core computer science concepts, with hands-on experience in software development, web technologies, 
                and application design.
              </p>
              <p className="text-muted-foreground">
                My academic journey has allowed me to explore various facets of computer science, including data structures, algorithms, 
                software engineering, machine learning, and artificial intelligence. I am passionate about solving real-world problems through 
                technology and am constantly seeking opportunities to enhance my skills.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}