import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldBase =
  "w-full rounded-md border border-line bg-white px-3 text-[15px] text-graphite placeholder:text-muted/80 transition-colors focus:border-steel focus:outline-none focus:ring-2 focus:ring-cyan/40 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/20 dark:border-line-dark dark:bg-navy-900 dark:text-white dark:placeholder:text-mist/60 dark:focus:border-cyan";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(fieldBase, "h-11", className)} {...props} />;
  },
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(fieldBase, "min-h-28 py-2.5", className)} {...props} />;
  },
);

export const NativeSelect = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  function NativeSelect({ className, children, ...props }, ref) {
    return (
      <div className="relative">
        <select ref={ref} className={cn(fieldBase, "h-11 appearance-none pr-10", className)} {...props}>
          {children}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-steel"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    );
  },
);
