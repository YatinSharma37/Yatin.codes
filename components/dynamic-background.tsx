"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function DynamicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-900/20" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ y: [0, 35, 0], x: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-60 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-indigo-400/15 to-blue-400/15 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -12, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-80 right-1/4 w-20 h-20 bg-gradient-to-br from-teal-400/15 to-cyan-400/15 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ x: mousePosition.x - 100, y: mousePosition.y - 100 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute w-48 h-48 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
      />
    </div>
  )
}
