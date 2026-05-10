interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1.5">
        <span className="text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
          {current} / {total}
        </span>
        <span className="text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
          {percent}%
        </span>
      </div>
      <div className="w-full bg-divider rounded-full h-[2px]">
        <div
          className="bg-primary h-[2px] rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
