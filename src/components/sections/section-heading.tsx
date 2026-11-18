import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  intro,
  id,
  className,
  action,
}: {
  title: string;
  intro?: string;
  id?: string;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div>
        <h2 id={id} className="font-display text-4xl leading-tight font-semibold text-navy sm:text-[2.75rem] dark:text-white">
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-muted dark:text-mist">
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
