"use client"

import { motion } from 'framer-motion'
import { ChevronUp, Mail, Github, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setIsExpanded(false)
  }

  const actions = [
    {
      icon: Mail,
      href: "mailto:yatinsharmabecse@gmail.com",
      label: "Email",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      href: "https://github.com/yatinsharma37",
      label: "GitHub",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yatin-sharma-53766a2aa/",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800"
    }
  ]

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ 
                  opacity: isExpanded ? 1 : 0, 
                  scale: isExpanded ? 1 : 0.8, 
                  x: isExpanded ? 0 : 20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: -5 }}
                className={`flex items-center space-x-3 p-3 bg-card rounded-full border border-border shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`p-2 bg-gradient-to-br ${action.color} rounded-full`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Main button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              isExpanded ? 'rotate-45' : ''
            }`}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronUp className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </motion.div>
      )}

      {/* Scroll to top button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-6 z-40 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </>
  )
}
