'use client'

/* ==========================================
   LevelProgress — User level and XP progress
   Matches screenshot: Level text, XP text, gradient bar
   ========================================== */

interface LevelProgressProps {
  level: number
  currentXp: number
  targetXp: number
  role: string
}

export function LevelProgress({ level, currentXp, targetXp, role }: LevelProgressProps) {
  const progressPercent = Math.min(100, Math.max(0, (currentXp / targetXp) * 100))

  return (
    <div className="card p-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="avatar-lg bg-orange-50 text-2xl">
          🦊
        </div>
        <div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            Level {level}
          </h3>
          <p className="text-xs text-[var(--color-text-muted)]">
            {role}
          </p>
        </div>
        <div className="ml-auto text-xs font-bold text-[var(--color-accent)] bg-orange-50 px-3 py-1 rounded-full">
          {currentXp} XP
        </div>
      </div>

      <div className="xp-bar mt-2">
        <div 
          className="xp-bar-fill" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  )
}
