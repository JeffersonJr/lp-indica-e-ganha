import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronDown, Check } from "lucide-react";
import { countries } from "@/lib/countries";
import { cn } from "@/lib/utils";

interface PhoneInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> {
  value: string;
  dialCode: string;
  onPhoneChange: (phone: string, dialCode: string) => void;
  containerClassName?: string;
}

export function PhoneInput({
  value,
  dialCode,
  onPhoneChange,
  containerClassName,
  className,
  required,
  ...props
}: PhoneInputProps) {
  const [open, setOpen] = React.useState(false);
  const selectedCountry =
    countries.find((c) => c.dialCode === dialCode) || countries[0];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (dialCode === "+55") {
      if (v.length > 11) v = v.slice(0, 11);
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    onPhoneChange(v, dialCode);
  };

  return (
    <div
      className={cn(
        "flex w-full h-12 rounded-xl border border-input bg-transparent shadow-sm transition-colors focus-within:ring-1 focus-within:ring-[color:var(--brand-orange)]",
        containerClassName,
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 text-base text-[color:var(--brand-ink)] font-medium border-r border-input hover:bg-black/5 rounded-l-xl transition-colors focus:outline-none"
          >
            <span className="text-lg leading-none">{selectedCountry.flag}</span>
            <span>{dialCode}</span>
            <ChevronDown className="w-3 h-3 opacity-50 ml-0.5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Buscar país..." className="h-9" />
            <CommandList>
              <CommandEmpty>País não encontrado.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.code}
                    value={`${country.name} ${country.dialCode}`}
                    onSelect={() => {
                      // Re-format current value if switching to/from +55
                      let v = value.replace(/\D/g, "");
                      if (country.dialCode === "+55") {
                        if (v.length > 11) v = v.slice(0, 11);
                        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
                        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
                      }
                      onPhoneChange(v, country.dialCode);
                      setOpen(false);
                    }}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg leading-none">
                        {country.flag}
                      </span>
                      <span className="font-medium">{country.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {country.dialCode}
                      </span>
                    </div>
                    {dialCode === country.dialCode && (
                      <Check className="h-4 w-4 text-[color:var(--brand-orange)]" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <input
        required={required}
        type="tel"
        placeholder={dialCode === "+55" ? "(11) 99999-9999" : "999999999"}
        className={cn(
          "flex-1 px-4 bg-transparent focus:outline-none rounded-r-xl w-full min-w-0 text-[color:var(--brand-ink)] placeholder:text-muted-foreground",
          className,
        )}
        value={value}
        onChange={handlePhoneChange}
        {...props}
      />
    </div>
  );
}
