import type { ReactNode } from 'react'

type FullBleedProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
}

export const FullBleed = ({
  children,
  className = '',
  contentClassName = '',
}: FullBleedProps) => {
  return (
    <div className={`relative left-1/2 w-screen -translate-x-1/2 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl ${contentClassName}`}>
        {children}
      </div>
    </div>
  )
}
