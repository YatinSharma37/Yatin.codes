"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Code, Trophy } from 'lucide-react'
import { Button } from './ui/button'

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero-specific floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0], 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0], 
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"
        />
      </div>

      <div className="container-padding text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-4"
          >
            👋 Hello, I'm
          </motion.p>

                     {/* Name */}
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-5xl md:text-7xl font-bold mb-6"
           >
             <motion.span 
               className="gradient-text"
               initial={{ backgroundPosition: "0% 50%" }}
               animate={{ backgroundPosition: "100% 50%" }}
               transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
             >
               Yatin Sharma
             </motion.span>
           </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            Full Stack Developer & Computer Science Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions, solving complex problems, 
            and building scalable applications. Currently pursuing B.Tech in CSE with a CGPA of 9.74.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
                         <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
                 size="lg"
                 onClick={scrollToContact}
                 className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
               >
                 <span className="relative z-10">Get In Touch</span>
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                   initial={{ x: '-100%' }}
                   whileHover={{ x: '0%' }}
                   transition={{ duration: 0.3 }}
                 />
               </Button>
             </motion.div>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="group"
            >
              <span>Learn More</span>
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

                     {/* Social Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.2 }}
             className="flex justify-center space-x-6 mb-8"
           >
             {[
               { href: "https://github.com/yatinsharma37", icon: Github, color: "from-gray-700 to-gray-900" },
               { href: "https://www.linkedin.com/in/yatin-sharma-53766a2aa/", icon: Linkedin, color: "from-blue-600 to-blue-800" },
               { href: "https://codeforces.com/profile/yatinsharmabecse", icon: Code, color: "from-orange-500 to-red-500" },
               { href: "https://leetcode.com/u/yatin_pandit37/", icon: Trophy, color: "from-yellow-500 to-orange-500" }
             ].map((social, index) => (
               <motion.a
                 key={social.href}
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                 whileHover={{ 
                   scale: 1.15, 
                   y: -5,
                   rotate: [0, -10, 10, 0]
                 }}
                 whileTap={{ scale: 0.95 }}
                 className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                 <social.icon className="h-6 w-6" />
               </motion.a>
             ))}
           </motion.div>

                     {/* Stats */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.4 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
           >
             {[
               { value: "9.74", label: "CGPA" },
               { value: "24+", label: "Algorithms" },
               { value: "3", label: "Major Projects" }
             ].map((stat, index) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 1.4 + index * 0.2, type: "spring", stiffness: 200 }}
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="text-center group"
               >
                 <motion.div 
                   className="text-3xl font-bold gradient-text mb-2"
                   initial={{ backgroundPosition: "0% 50%" }}
                   animate={{ backgroundPosition: "100% 50%" }}
                   transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                 >
                   {stat.value}
                 </motion.div>
                 <div className="text-muted-foreground group-hover:text-primary transition-colors">
                   {stat.label}
                 </div>
               </motion.div>
             ))}
           </motion.div>
        </motion.div>
      </div>

             {/* Enhanced Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 2 }}
         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
       >
         <motion.div
           animate={{ 
             y: [0, 10, 0],
             scale: [1, 1.1, 1]
           }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="text-muted-foreground cursor-pointer group"
           onClick={scrollToAbout}
         >
           <motion.div
             whileHover={{ scale: 1.2, y: -5 }}
             className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
           >
             <ChevronDown className="h-6 w-6 group-hover:text-primary transition-colors" />
           </motion.div>
         </motion.div>
       </motion.div>
    </section>
  )
}
