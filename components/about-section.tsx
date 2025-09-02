"use client"

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Phone, Mail, Calendar, Award } from 'lucide-react'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development 
            and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Baddi, Himachal Pradesh, 174103</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91-9306210842</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">yatinsharmabecse@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">B.Tech in Computer Science & Engineering</h4>
                    <p className="text-muted-foreground">Chitkara University</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2023 – 2027</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">CGPA: 9.74</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Description & Skills Preview */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a dedicated Computer Science student with a passion for technology and innovation. 
                My journey in software development started with a curiosity to understand how things work 
                and has evolved into a drive to create meaningful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong academic foundation (CGPA: 9.74) and hands-on experience in various 
                technologies, I specialize in full-stack development, machine learning, and problem-solving. 
                I believe in writing clean, efficient code and continuously learning new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me playing chess at a national level, mentoring 
                juniors in DSA & CS, or leading tech teams in hackathons and projects.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">Full-Stack</div>
                  <div className="text-sm text-muted-foreground">Web Development</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">AI/ML</div>
                  <div className="text-sm text-muted-foreground">Machine Learning</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">Problem</div>
                  <div className="text-sm text-muted-foreground">Solving</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">Mentoring</div>
                  <div className="text-sm text-muted-foreground">Teaching</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
