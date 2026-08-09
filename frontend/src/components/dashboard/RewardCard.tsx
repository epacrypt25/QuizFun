'use client'

/* ==========================================
   RewardCard — Daily Reward & Social Task
   Matches screenshot: icon, title, reward, CTA
   ========================================== */

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
    <div className="card p-5 flex flex-col justify-between h-full">
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
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg)] text-xl flex-shrink-0">
          {icon}
        </div>
      </div>

      {/* Reward */}
      <div className="mb-3">
        <span className="text-xs text-[var(--color-text-muted)]">Reward</span>
        <p className={`text-sm font-bold ${rewardColor}`}>{reward}</p>
      </div>

      {/* CTA */}
      <button
        onClick={onAction}
        className={`w-full rounded-lg ${ctaColor} py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md active:scale-[0.98]`}
      >
        {ctaText}
      </button>
    </div>
  )
}
