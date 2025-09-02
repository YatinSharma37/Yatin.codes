"use client"

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, Palette, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Python", level: 85, color: "from-blue-500 to-cyan-500" },
      { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", level: 82, color: "from-blue-600 to-blue-800" },
      { name: "SQL", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "C++", level: 80, color: "from-blue-700 to-blue-900" },
    ]
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: [
      { name: "Spring Boot", level: 88, color: "from-green-500 to-emerald-500" },
      { name: "Node.js", level: 85, color: "from-green-600 to-green-800" },
      { name: "Express.js", level: 83, color: "from-gray-600 to-gray-800" },
      { name: "REST APIs", level: 90, color: "from-blue-500 to-indigo-500" },
      { name: "Microservices", level: 78, color: "from-purple-500 to-violet-500" },
    ]
  },
  {
    title: "Frontend Development",
    icon: Palette,
    skills: [
      { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 85, color: "from-black to-gray-800" },
      { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-blue-600" },
      { name: "Responsive Design", level: 92, color: "from-green-400 to-emerald-500" },
    ]
  },
  {
    title: "Cloud & Database",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 75, color: "from-orange-500 to-yellow-500" },
      { name: "Firebase", level: 80, color: "from-yellow-500 to-orange-500" },
      { name: "Docker", level: 72, color: "from-blue-500 to-indigo-500" },
      { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "MongoDB", level: 78, color: "from-green-500 to-emerald-500" },
      { name: "MySQL", level: 82, color: "from-blue-600 to-blue-800" },
      { name: "PostgreSQL", level: 75, color: "from-blue-700 to-indigo-700" },
    ]
  },
  {
    title: "AI/ML & Tools",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 70, color: "from-purple-500 to-pink-500" },
      { name: "Deep Learning", level: 65, color: "from-indigo-500 to-purple-500" },
      { name: "LLMs", level: 75, color: "from-blue-500 to-cyan-500" },
      { name: "LangChain", level: 70, color: "from-green-500 to-emerald-500" },
      { name: "RAG", level: 68, color: "from-orange-500 to-red-500" },
      { name: "NLP", level: 72, color: "from-purple-500 to-violet-500" },
      { name: "Computer Vision", level: 65, color: "from-blue-600 to-indigo-600" },
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", level: 95, color: "from-blue-500 to-indigo-500" },
      { name: "IntelliJ", level: 85, color: "from-orange-500 to-red-500" },
      { name: "Postman", level: 88, color: "from-orange-400 to-orange-600" },
      { name: "Agile", level: 80, color: "from-green-500 to-emerald-500" },
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                                         <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                         viewport={{ once: true }}
                         className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                       >
                         <motion.div
                           className="absolute inset-0 bg-white/20 rounded-full"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 0.5, delay: 1 + skillIndex * 0.1 }}
                           viewport={{ once: true }}
                           animate={{ 
                             x: [0, 100, 0],
                             opacity: [0, 0.5, 0]
                           }}
                           transition={{ 
                             duration: 2, 
                             repeat: Infinity, 
                             repeatDelay: 3 
                           }}
                         />
                       </motion.div>
                     </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Other Skills & Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving", "Data Structures", "Algorithms", "System Design",
              "API Design", "Database Design", "Version Control", "Testing",
              "Performance Optimization", "Security Best Practices", "Code Review",
              "Technical Documentation", "Team Collaboration", "Project Management"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
