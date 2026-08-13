'use client'

/* ==========================================
   RewardCard — Daily Reward & Social Task
   Matches screenshot: icon, title, reward, CTA
   ========================================== */
import { motion } from 'framer-motion'

interface RewardCardProps {
  type: 'daily' | 'social'
  title: string
  description: string
  reward: string
  rewardColor?: string
  icon: string
  ctaText: string
  ctaColor?: string
  onAction?: () => void
}

export function RewardCard({
  title,
  description,
  reward,
  rewardColor = 'text-green-600',
  icon,
  ctaText,
  ctaColor = 'bg-[var(--color-primary)]',
  onAction,
}: RewardCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
      className="card p-5 flex flex-col justify-between h-full">
      {/* Top */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-[var(--color-text-muted)] font-medium mb-0.5">
            {description}
          </p>
          <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
            {title}
          </h4>
        </div>
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg)] text-xl flex-shrink-0">
          {icon}
        </motion.div>
      </div>

      {/* Reward */}
      <div className="mb-3">
        <span className="text-xs text-[var(--color-text-muted)]">Reward</span>
        <p className={`text-sm font-bold ${rewardColor}`}>{reward}</p>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onAction}
        className={`w-full rounded-lg ${ctaColor} py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]`}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  )
}
