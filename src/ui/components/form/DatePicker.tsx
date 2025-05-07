import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from 'ui/lib/utils'
import { Button } from 'ui/components/button'
import { Calendar } from 'ui/components/calendar'
import { Popover, PopoverContent, PopoverTrigger } from 'ui/components/popover'
import { SelectSingleEventHandler } from 'react-day-picker'

type DatePickerProps = {
  date: Date
  setDate: SelectSingleEventHandler
  placeHolder?: string
}

export function DatePicker({
  date,
  setDate,
  placeHolder = 'Pick a date',
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
              date,
            )
          ) : (
            <span>{placeHolder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
