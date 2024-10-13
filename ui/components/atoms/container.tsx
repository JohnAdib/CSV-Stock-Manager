import clsx from 'clsx'

export function Container({
  children,
  className
}: Readonly<{
  children: React.ReactNode
  className?: string
}>): JSX.Element {
  return (
    <div className={clsx('container mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
