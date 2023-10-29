import * as React from 'react'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon &&
          React.createElement(icon, {
            className: 'absolute left-3 w-4 top-2 text-muted-foreground'
          })}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background pl-3 pr-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            {
              'pl-10': icon
            }
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
