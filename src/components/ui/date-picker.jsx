import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ mode = "single", selected, onSelect }) {
  const [date, setDate] = React.useState(selected);

  React.useEffect(() => {
    setDate(selected);
  }, [selected]);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    onSelect(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={`w-[280px] justify-start text-left font-normal ${
            !date && "text-muted-foreground"
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date
            ? mode === "single"
              ? format(date, "PPP")
              : `${format(date[0], "PPP")} - ${format(date[1], "PPP")}`
            : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode={mode}
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}