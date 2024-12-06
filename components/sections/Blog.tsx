"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to create performant and scalable web applications using Next.js and React",
    date: "2024-03-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "Development",
  },
  {
    id: 2,
    title: "The Future of Space Technology",
    excerpt: "Exploring upcoming trends and innovations in space exploration and technology",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    category: "Technology",
  },
  {
    id: 3,
    title: "Mastering TypeScript: Best Practices",
    excerpt: "Essential tips and practices for writing better TypeScript code",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    category: "Development",
  },
];

export default function Blog() {
  return (
    <section className="py-20 relative" id="blog">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-semibold mt-4 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}