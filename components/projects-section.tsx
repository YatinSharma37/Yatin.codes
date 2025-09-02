"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Brain, Gamepad2 } from 'lucide-react'
import { Button } from './ui/button'

const projects = [
  {
    title: "Algorithm's Visualizer",
    description: "Interactive platform for 24+ algorithms with animations & recursion trees. Features include step-by-step visualization, recursion tree generation, and educational content for learning complex algorithms.",
    technologies: ["Next.js", "React", "shadcn/ui", "Framer Motion", "TypeScript"],
    github: "https://github.com/yatinsharma37/algorithms-visualizer",
    live: "#",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    features: ["24+ Algorithms", "Interactive Animations", "Recursion Trees", "Educational Content"]
  },
  {
    title: "Anuvadika – Auto-Subtitled Video Generator",
    description: "Auto-generates & translates video subtitles, supports YouTube integration, editing, and chatbot queries. Built with React, Python, Whisper AI, and FFmpeg for comprehensive video processing.",
    technologies: ["React", "Python", "Whisper AI", "FFmpeg", "YouTube API", "Translation"],
    github: "https://github.com/yatinsharma37/anuvadika",
    live: "#",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    features: ["Auto-Subtitles", "Multi-language", "YouTube Integration", "AI Translation"]
  },
  {
    title: "PuzzleHub – Rubik's Cube, Chess, Sudoku Platform",
    description: "Comprehensive puzzle platform featuring Rubik's Cube solver via camera, multiplayer chess with AI opponent, and intelligent Sudoku solver. Built with Spring Boot, React, and OpenCV.",
    technologies: ["Spring Boot", "React", "OpenCV", "Computer Vision", "AI", "Multiplayer"],
    github: "https://github.com/yatinsharma37/puzzlehub",
    live: "#",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    features: ["Rubik's Solver", "AI Chess", "Sudoku Solver", "Multiplayer"]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my major projects demonstrating full-stack development, AI/ML integration, 
            and innovative problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
                         <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 30, rotateY: -15 }}
               whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={{ once: true }}
               whileHover={{ 
                 y: -15, 
                 rotateY: 5,
                 scale: 1.02
               }}
               className="group bg-card rounded-xl border border-border overflow-hidden card-hover transform-gpu"
             >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-br ${project.color} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <project.icon className="h-8 w-8" />
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group"
          >
            <a href="https://github.com/yatinsharma37" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
