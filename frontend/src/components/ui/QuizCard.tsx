'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export type QuizType = 'NONE' | 'RWA' | 'USDT'

interface QuizCardProps {
  type: 'RWA' | 'USDT'
  title: string
  description: string
  rewardText: string
  onStart: (type: QuizType) => void
}

export function QuizCard({ type, title, description, rewardText, onStart }: QuizCardProps) {
  const isRWA = type === 'RWA'
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl glass-panel p-8 text-center transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group">
      {/* Top Border Accent */}
      <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${isRWA ? 'from-purple-500 to-fuchsia-300' : 'from-emerald-500 to-teal-300'}`} />
      
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">{title}</h2>
      <p className="mb-6 leading-relaxed text-slate-400">{description}</p>
      
      <div className={`mb-8 font-semibold ${isRWA ? 'text-purple-400' : 'text-emerald-400'}`}>
        Reward: {rewardText}
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStart(type)}
        className={`w-full rounded-full px-6 py-3 font-semibold text-white transition-colors ${
          isRWA 
            ? 'bg-purple-600 hover:bg-purple-500' 
            : 'bg-emerald-600 hover:bg-emerald-500'
        }`}
      >
        {isRWA ? 'Take RWA Quiz' : 'Complete Task'}
      </motion.button>
    </motion.div>
  )
}
