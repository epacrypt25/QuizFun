'use client'

/* ==========================================
   CourseModule — Module cards for courses
   Matches screenshot: icon, title, progress
   ========================================== */
import { motion } from 'framer-motion'

interface CourseModuleProps {
  title: string
  icon: string
  progress: number
  isLocked?: boolean
}

export function CourseModule({ title, icon, progress, isLocked = false }: CourseModuleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!isLocked ? { scale: 1.05, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={`card-flat p-4 flex flex-col items-center justify-center gap-3 text-center transition-colors ${
      isLocked ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:border-[var(--color-primary)] hover:shadow-md cursor-pointer'
    }`}>
      <motion.div 
        whileHover={!isLocked ? { rotate: [0, -10, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl bg-[var(--color-bg)] flex items-center justify-center text-3xl mb-2"
      >
        {icon}
      </motion.div>
      <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
        {title}
      </h4>
      {isLocked ? (
        <span className="text-xs text-[var(--color-text-muted)] font-medium bg-[var(--color-bg)] px-3 py-1 rounded-full">
          Locked
        </span>
      ) : (
        <div className="w-full mt-1">
          <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-bold mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-[var(--color-bg)] rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-[var(--color-primary)] rounded-full" 
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}
