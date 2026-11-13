"use client";

import { motion } from "motion/react";

interface RsvpChoiceOption<OptionValue> {
  value: OptionValue;
  label: string;
}

interface RsvpChoiceGroupProps<OptionValue extends string | number> {
  legend: string;
  name: string;
  options: RsvpChoiceOption<OptionValue>[];
  selectedValue: OptionValue;
  onSelect: (value: OptionValue) => void;
  /** true: satu pilihan per baris; false: pilihan berjajar. */
  isStacked?: boolean;
}

/** Grup radio bergaya tombol pil; latar marun meluncur ke pilihan yang dipilih. */
export function RsvpChoiceGroup<OptionValue extends string | number>({
  legend,
  name,
  options,
  selectedValue,
  onSelect,
  isStacked = false,
}: RsvpChoiceGroupProps<OptionValue>) {
  return (
    <fieldset>
      <legend className="text-[0.9375rem] uppercase tracking-[0.2em]! text-antique">{legend}</legend>
      <div className={`mt-3 flex gap-2.5 ${isStacked ? "flex-col" : "flex-row"}`}>
        {options.map((option) => {
          const isSelected = option.value === selectedValue;
          return (
            <motion.label
              key={String(option.value)}
              whileTap={{ scale: 0.97 }}
              className={`relative flex flex-1 cursor-pointer items-center justify-center rounded-full bg-neutral-100 px-4 py-2.5 text-[0.9375rem] transition-colors has-focus-visible:ring-2 has-focus-visible:ring-maroon/40 ${
                isSelected ? "text-ivory" : "text-ink hover:bg-maroon/10"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId={`${name}-selected`}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-maroon"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <input
                type="radio"
                name={name}
                value={String(option.value)}
                checked={isSelected}
                onChange={() => onSelect(option.value)}
                className="sr-only"
              />
              <span className="relative">{option.label}</span>
            </motion.label>
          );
        })}
      </div>
    </fieldset>
  );
}
