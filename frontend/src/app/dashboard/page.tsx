'use client'

import { useAuth } from '@/context/AuthContext'
import { LevelProgress, CourseModule, RewardCard, Leaderboard } from '@/components/dashboard'

export default function StudentDashboard() {
  const { user } = useAuth()

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      {/* Top Section - Level & Rewards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <LevelProgress 
            level={user?.level || 1} 
            currentXp={user?.xp || 0} 
            targetXp={5000} 
            role="UI Designer" // From screenshot
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RewardCard 
            type="daily"
            title="Daily Check-in"
            description="Daily Reward"
            reward="+10 XP"
            icon="☀️"
            ctaText="Check-in Now"
            ctaColor="bg-[var(--color-primary)]"
          />
          <RewardCard 
            type="social"
            title="Post Check-in"
            description="Social Task"
            reward="+20 XP"
            icon="📱"
            ctaText="Post Now"
            ctaColor="bg-[var(--color-primary-dark)]"
          />
        </div>
      </div>

      {/* Main Content Area - Courses & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Modules & Videos */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-[var(--color-border-light)] pb-4">
            <button className="px-4 py-2 text-sm font-bold text-white bg-[var(--color-text-muted)] rounded-full">
              Course Module
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
              Course Videos
            </button>
          </div>

          <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
            Course Module
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CourseModule title="UI Fundamentals" icon="🎨" progress={100} />
            <CourseModule title="Color Theory" icon="🌈" progress={75} />
            <CourseModule title="Typography" icon="Aa" progress={45} />
            <CourseModule title="Layout Design" icon="📐" progress={0} isLocked />
            <CourseModule title="Prototyping" icon="⚡" progress={0} isLocked />
            <CourseModule title="Design Systems" icon="🧩" progress={0} isLocked />
            <CourseModule title="Web3 UI" icon="💎" progress={0} isLocked />
            <CourseModule title="Final Project" icon="🏆" progress={0} isLocked />
          </div>
        </div>

        {/* Right Side: Leaderboard */}
        <div className="lg:col-span-1">
          <Leaderboard />
        </div>
      </div>
    </div>
  )
}
