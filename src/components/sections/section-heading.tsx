import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  intro,
  tag,
  id,
  className,
  action,
}: {
  title: string;
  intro?: string;
  tag?: string;
  id?: string;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div>
        {tag ? (
          <div className="mb-2.5 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-cyan-ink uppercase dark:text-cyan">
            <span className="size-1.5 rounded-full bg-cyan" />
            <span>{tag}</span>
          </div>
        ) : null}
        <h2
          id={id}
          className="font-display text-[2rem] leading-tight font-bold tracking-tight text-navy sm:text-[2.6rem] dark:text-white"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
