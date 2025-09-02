"use client"

import { motion } from 'framer-motion'
import { Crown, Users, Trophy, Lightbulb, Target, Heart } from 'lucide-react'

const activities = [
  {
    title: "National-Level Chess Player",
    description: "Competing at the national level in chess tournaments, demonstrating strategic thinking and competitive spirit. Achieved recognition for exceptional gameplay and sportsmanship.",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    achievements: ["National Tournament Participant", "Strategic Thinking", "Competitive Excellence"],
    impact: "High"
  },
  {
    title: "Mentoring Juniors in DSA & CS",
    description: "Actively mentoring junior students in Data Structures, Algorithms, and Computer Science fundamentals. Conducting workshops and providing guidance for academic and career development.",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    achievements: ["Workshop Conducting", "Academic Guidance", "Career Development Support"],
    impact: "High"
  },
  {
    title: "Leading Tech Teams in Hackathons",
    description: "Leading and coordinating technical teams in various hackathons and coding competitions. Managing project development, team collaboration, and delivering innovative solutions.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
    achievements: ["Team Leadership", "Project Management", "Innovation Delivery"],
    impact: "Medium"
  },
  {
    title: "Project Leadership & Coordination",
    description: "Taking initiative in leading major technical projects, coordinating team efforts, and ensuring successful project delivery within deadlines and quality standards.",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    achievements: ["Project Planning", "Team Coordination", "Quality Assurance"],
    impact: "High"
  }
]

const values = [
  {
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and stay updated with industry trends.",
    icon: Lightbulb
  },
  {
    title: "Problem Solving",
    description: "Approaching challenges with analytical thinking and creative solutions.",
    icon: Target
  },
  {
    title: "Team Collaboration",
    description: "Working effectively in teams and fostering a collaborative environment.",
    icon: Users
  },
  {
    title: "Innovation",
    description: "Thinking outside the box to create unique and impactful solutions.",
    icon: Heart
  }
]

export function ExtracurricularSection() {
  return (
    <section id="extracurricular" className="section-padding bg-muted/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Extracurricular</span> Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics, I'm actively involved in various activities that shape my character, 
            leadership skills, and contribute to the community.
          </p>
        </motion.div>

        {/* Main Activities */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl border border-border overflow-hidden card-hover"
            >
              {/* Activity Header */}
              <div className={`p-6 bg-gradient-to-br ${activity.color} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <activity.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                      Impact: {activity.impact}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Activity Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.achievements.map((achievement, achievementIndex) => (
                      <motion.span
                        key={achievement}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Values & Philosophy</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The principles that guide my approach to learning, collaboration, and personal development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="text-center group"
            >
              <div className="p-6 bg-card rounded-xl border border-border group-hover:border-primary/30 transition-colors">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chess Achievement Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                                 <div className="p-3 bg-amber-500/20 rounded-lg">
                   <Crown className="h-8 w-8 text-amber-600" />
                 </div>
                <h3 className="text-2xl font-bold text-foreground">Chess Excellence</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a national-level chess player, I've developed strong analytical thinking, 
                strategic planning, and decision-making skills. These abilities directly translate 
                to my approach to problem-solving in software development and project management.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Strategic Thinking", "Analytical Skills", "Decision Making", 
                  "Patience & Focus", "Competitive Spirit", "Sportsmanship"
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-amber-500/20 text-amber-700 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold gradient-text mb-2">♔</div>
              <div className="text-2xl font-semibold text-foreground mb-2">National Level</div>
              <div className="text-muted-foreground">Chess Player</div>
              <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                <div className="text-sm text-muted-foreground">
                  "Chess is not just a game, it's a way of thinking that enhances 
                  problem-solving abilities in all aspects of life."
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
