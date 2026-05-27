import { cn } from '../../lib/cn'

interface TitleCardProps {
  title: string
  subtitle?: string
  className?: string
}

export function TitleCard({ title, subtitle, className }: TitleCardProps) {
  const words = title.split(' ')

  return (
    <div className={cn('flex h-full flex-col justify-between gap-4', className)}>
      {subtitle ? (
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-zinc-400">
          {subtitle}
        </p>
      ) : null}
      <h1 className="font-display text-[2.85rem] font-semibold uppercase leading-[0.88] text-white sm:text-[3.45rem] sm:leading-[0.96] lg:text-[4.2rem] xl:text-[4.45rem]">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="block whitespace-nowrap sm:inline sm:whitespace-normal">
            {word}
            {index < words.length - 1 ? <span className="hidden sm:inline"> </span> : null}
          </span>
        ))}
      </h1>
    </div>
  )
}
