import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const Container = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn('w-full max-w-[900px] mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export { Container }
