"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Code, Trophy, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "yatinsharmabecse@gmail.com",
    link: "mailto:yatinsharmabecse@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-9306210842",
    link: "tel:+919306210842",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Baddi, Himachal Pradesh, 174103",
    link: "#",
    color: "from-purple-500 to-pink-500"
  }
]

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yatinsharma37",
    color: "from-gray-700 to-gray-900",
    description: "View my projects and contributions"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yatin-sharma-53766a2aa/",
    color: "from-blue-600 to-blue-800",
    description: "Connect professionally"
  },
  {
    name: "Codeforces",
    icon: Code,
    url: "https://codeforces.com/profile/yatinsharmabecse",
    color: "from-orange-500 to-red-500",
    description: "Competitive programming profile"
  },
  {
    name: "LeetCode",
    icon: Trophy,
    url: "https://leetcode.com/u/yatin_pandit37/",
    color: "from-yellow-500 to-orange-500",
    description: "Problem-solving achievements"
  }
]

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all"
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.color} rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform`}>
                      <social.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{social.name}</h4>
                    <p className="text-xs text-muted-foreground">{social.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl border border-border"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>

                             <motion.div
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 <Button
                   type="submit"
                   size="lg"
                   className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                 >
                   <span className="relative z-10">Send Message</span>
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                     initial={{ x: '-100%' }}
                     whileHover={{ x: '0%' }}
                     transition={{ duration: 0.3 }}
                   />
                 </Button>
               </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group"
              >
                <a href="mailto:yatinsharmabecse@gmail.com">
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start a Conversation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group"
              >
                <a href="https://github.com/yatinsharma37" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
