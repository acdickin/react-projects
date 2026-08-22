import React, { useEffect, useRef, useState } from 'react'
import styles from './TransitionSection.module.css'

type TransitionSectionProps = {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'fade'
  time?: number
}

export const TransitionInSection = ({
  children,
  direction = 'left',
  time = 0,
}: TransitionSectionProps) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = domRef.current
    if (!element) return
    let timeoutId: number | undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.unobserve(element)
        timeoutId = window.setTimeout(() => {
          setVisible(true)
        }, time)
      }
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [time])
  return (
    <div
      className={`${styles[direction]} ${isVisible ? styles['is-visible'] : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}
