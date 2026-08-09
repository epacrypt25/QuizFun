'use client'

/* ==========================================
   Leaderboard — Matches screenshot design
   Ranked list with avatar, name, XP
   ========================================== */

interface LeaderboardEntry {
  rank: number
  name: string
  xp: number
  avatar: string
  isCurrentUser?: boolean
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'John Doe', xp: 4895, avatar: '🏆', isCurrentUser: true },
  { rank: 2, name: 'Jane Smith', xp: 4200, avatar: '🥈' },
  { rank: 3, name: 'Alex Johnson', xp: 3850, avatar: '🥉' },
  { rank: 4, name: 'Michael Lee', xp: 3500, avatar: '⭐' },
  { rank: 5, name: 'Sarah Chen', xp: 3100, avatar: '🌟' },
]

export function Leaderboard() {
  return (
    <div className="card p-6">
      <h3 className="mb-5 text-lg font-bold text-[var(--color-text-primary)]">
        Leaderboard
      </h3>

      <div className="flex flex-col gap-3">
        {leaderboardData.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors ${
              entry.isCurrentUser
                ? 'bg-[var(--color-primary-50)] border border-[var(--color-primary-100)]'
                : 'hover:bg-[var(--color-bg)]'
            }`}
          >
            {/* Rank */}
            <span className={`text-sm font-bold w-6 text-center ${
              entry.rank <= 3 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
            }`}>
              {entry.rank}
            </span>

            {/* Avatar */}
            <div className={`avatar-sm flex items-center justify-center rounded-full text-base ${
              entry.rank === 1 ? 'bg-amber-100' :
              entry.rank === 2 ? 'bg-gray-100' :
              entry.rank === 3 ? 'bg-orange-100' :
              'bg-[var(--color-bg)]'
            }`}
              style={{ width: 36, height: 36 }}
            >
              {entry.avatar}
            </div>

            {/* Name */}
            <span className={`flex-1 text-sm font-semibold ${
              entry.isCurrentUser ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)]'
            }`}>
              {entry.name}
            </span>

            {/* XP */}
            <span className="text-sm font-bold text-[var(--color-primary)]">
              {entry.xp.toLocaleString()} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
