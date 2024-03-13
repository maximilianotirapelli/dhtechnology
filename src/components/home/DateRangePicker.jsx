import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import PropTypes from 'prop-types';
import { es } from 'date-fns/locale';
import { useState } from 'react';

DateRangePicker.propTypes = {
  className: PropTypes.string,
  searchDate: PropTypes.object,
  setSearchDate: PropTypes.func,
};

export function DateRangePicker({ className, setSearchDate }) {
  const [date, setDate] = useState();

  function handleSelect(date) {
    setDate(date);

    // Formatea las fechas antes de asignarlas a searchDate
    const formattedDateFrom = date?.from ? format(date.from, 'yyyy-MM-dd') : '';

    const formattedDateTo = date?.to ? format(date.to, 'yyyy-MM-dd') : '';

    setSearchDate({
      from: formattedDateFrom,
      to: formattedDateTo,
    });
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'h-10 w-56 justify-start rounded-2xl bg-gray-100 text-left font-normal text-muted-foreground shadow-md transition-all duration-300 ease-in-out hover:border-gray-400 data-[state=open]:border-primary',
              date && 'text-black',
            )}
          >
            <CalendarIcon className="mr-3 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'd LLL, y', { locale: es })} -{' '}
                  {format(date.to, 'd LLL, y', { locale: es })}
                </>
              ) : (
                format(date.from, 'd LLL, y')
              )
            ) : (
              <span>Elegí la fecha de alquiler</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            locale={es}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
