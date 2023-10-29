import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Button } from './Button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar, CalendarProps } from './Calendar'
import dayjs from 'dayjs'

type Props = CalendarProps & {
  format?: string
  selected?: Date
}

export default function DatePicker({
  selected,
  format = 'DD/MM/YYYY',
  ...props
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !selected && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? dayjs(selected).format(format) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar initialFocus {...props} />
      </PopoverContent>
    </Popover>
  )
}
