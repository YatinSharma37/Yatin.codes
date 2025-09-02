"use client"

import { motion } from 'framer-motion'
import { Award, Trophy, Star, FileText, Badge } from 'lucide-react'

const certifications = [
  {
    title: "HackExpo 2024",
    issuer: "Hackathon Excellence",
    description: "Recognized for outstanding performance and innovative project development in the 2024 hackathon.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    category: "Hackathon"
  },
  {
    title: "CodingNinza Codekaze 2024",
    issuer: "CodingNinza",
    description: "Achieved excellence in competitive programming and algorithmic problem-solving challenges.",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    category: "Competitive Programming"
  },
  {
    title: "GirlScript Summer of Code 2024",
    issuer: "GirlScript Foundation",
    description: "Contributed to open-source projects and demonstrated strong coding skills during the summer program.",
    icon: Badge,
    color: "from-green-500 to-emerald-500",
    category: "Open Source"
  },
  {
    title: "Postman Student Expert",
    issuer: "Postman",
    description: "Certified as a Postman Student Expert for API development and testing proficiency.",
    icon: FileText,
    color: "from-orange-500 to-red-500",
    category: "API Development"
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    description: "Completed comprehensive cybersecurity fundamentals course covering network security and threat prevention.",
    icon: Award,
    color: "from-blue-500 to-indigo-500",
    category: "Cybersecurity"
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills and expertise in various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card rounded-xl border border-border overflow-hidden card-hover"
            >
              {/* Certificate Header */}
              <div className={`p-6 bg-gradient-to-br ${cert.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <cert.icon className="h-8 w-8" />
                    </div>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
                      {cert.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-white/90 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between"
                >
                  <span className="text-xs text-muted-foreground">
                    Verified Certificate
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Active</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Additional Highlights</h3>
            <p className="text-muted-foreground">
              Beyond certifications, here are some notable achievements and recognitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "9.74", label: "CGPA", description: "Academic Excellence" },
              { number: "24+", label: "Algorithms", description: "Visualized & Implemented" },
              { number: "3", label: "Major Projects", description: "Full-Stack Solutions" },
              { number: "National", label: "Chess Player", description: "Competitive Level" }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
