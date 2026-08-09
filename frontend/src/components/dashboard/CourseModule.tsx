'use client'

/* ==========================================
   CourseModule — Module cards for courses
   Matches screenshot: icon, title, progress
   ========================================== */

interface CourseModuleProps {
  title: string
  icon: string
  progress: number
  isLocked?: boolean
}

export function CourseModule({ title, icon, progress, isLocked = false }: CourseModuleProps) {
  return (
    <div className={`card-flat p-4 flex flex-col items-center justify-center gap-3 text-center transition-all ${
      isLocked ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:border-[var(--color-primary)] hover:shadow-md cursor-pointer'
    }`}>
      <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg)] flex items-center justify-center text-3xl mb-2">
        {icon}
      </div>
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
            <div 
              className="h-full bg-[var(--color-primary)] rounded-full transition-all" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
