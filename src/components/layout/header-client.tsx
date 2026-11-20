"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Globe, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { HvacIcon } from "@/components/icons/hvac-icons";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/lib/nav";
import { SITE, mailto } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HeaderClient({ nav }: { nav: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      // Threshold high enough to avoid jitter, and purely visual state (no height changes)
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpenMenu(null);
  }

  return (
    <>
      {/* Utility Bar: In standard document flow so it scrolls out naturally without layout shifts or height jumps */}
      <div className="border-b border-white/10 bg-[#061224] text-[11px] sm:text-[12px] md:text-[13px] text-slate-300">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-2">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-cyan">
                  <Phone className="size-3 text-cyan sm:size-3.5" strokeWidth={1.5} aria-hidden />
                  <span className="font-mono">{p.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={mailto("Enquiry from website")} className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-cyan">
                <Mail className="size-3 text-cyan sm:size-3.5" strokeWidth={1.5} aria-hidden />
                <span>{SITE.email}</span>
              </a>
            </li>
          </ul>
          <Link href="/international" className="flex items-center gap-1.5 whitespace-nowrap text-cyan transition-colors hover:text-white">
            <Globe className="size-3 sm:size-3.5" strokeWidth={1.5} aria-hidden />
            <span>India, UAE &amp; Global Projects</span>
          </Link>
        </div>
      </div>

      {/* Main Sticky Navbar: Fixed height (h-20) with smooth glassmorphism. NEVER changes height on scroll, eliminating blinking! */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-md dark:border-white/10 dark:bg-[#071324]/95 dark:shadow-[0_4px_25px_-4px_rgba(0,0,0,0.6)]"
            : "border-b border-slate-200/50 bg-white/90 backdrop-blur-sm dark:border-white/5 dark:bg-[#061224]/90",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo className="h-10 w-auto" />

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                item.mega ? (
                  <MegaMenuItem
                    key={item.href}
                    item={item}
                    open={openMenu === item.href}
                    onOpenChange={(o) => setOpenMenu(o ? item.href : null)}
                    active={pathname.startsWith(item.href)}
                  />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-3 py-2 text-[15px] font-medium tracking-tight transition-colors",
                        pathname.startsWith(item.href)
                          ? "bg-slate-100 font-semibold text-steel dark:bg-white/10 dark:text-cyan"
                          : "text-slate-700 hover:bg-slate-50 hover:text-navy dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Action CTAs and Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="md" className="hidden shadow-md shadow-orange/20 sm:inline-flex">
              <Link href="/request-a-quote">Request a quote</Link>
            </Button>
            <MobileMenu nav={nav} />
          </div>
        </div>
      </header>
    </>
  );
}

function MegaMenuItem({
  item,
  open,
  onOpenChange,
  active,
}: {
  item: NavItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active: boolean;
}) {
  const panelId = useId();
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverOpenedAt = useRef(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
        ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, onOpenChange]);

  const mega = item.mega!;
  return (
    <li
      ref={ref}
      className="static"
      onMouseEnter={() => {
        window.clearTimeout(closeTimer.current);
        if (!open) hoverOpenedAt.current = Date.now();
        onOpenChange(true);
      }}
      onMouseLeave={() => {
        closeTimer.current = window.setTimeout(() => onOpenChange(false), 120);
      }}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) onOpenChange(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (open && Date.now() - hoverOpenedAt.current < 400) return;
          onOpenChange(!open);
        }}
        className={cn(
          "flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-medium tracking-tight transition-colors",
          open || active
            ? "bg-slate-100 font-semibold text-steel dark:bg-white/10 dark:text-cyan"
            : "text-slate-700 hover:bg-slate-50 hover:text-navy dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white",
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          strokeWidth={1.75}
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div
        id={panelId}
        data-open={open}
        className="mega-panel absolute inset-x-0 top-full border-t border-slate-200 bg-white/98 shadow-[0_24px_48px_-12px_rgba(11,37,69,0.2)] backdrop-blur-xl dark:border-white/10 dark:bg-[#071324]/98 dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]"
      >
        <div className="container-x grid grid-cols-[240px_1fr] gap-10 py-8">
          <div className="border-r border-slate-200 pr-8 dark:border-white/10">
            <p className="font-display text-2xl font-bold text-navy dark:text-white">{mega.heading}</p>
            {mega.footer ? (
              <Link
                href={mega.footer.href}
                className="link-underline mt-4 inline-block text-sm font-semibold text-steel dark:text-cyan"
              >
                {mega.footer.label} &rarr;
              </Link>
            ) : null}
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 xl:grid-cols-3">
            {mega.items.map((leaf) => (
              <li key={leaf.href + leaf.label}>
                <Link
                  href={leaf.href}
                  className="group flex gap-3.5 rounded-xl p-3 transition-colors hover:bg-slate-100 focus-visible:bg-slate-100 dark:hover:bg-white/5 dark:focus-visible:bg-white/5"
                >
                  {leaf.icon ? (
                    <span className="turbine-spin mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-steel shadow-sm group-hover:border-cyan group-hover:bg-navy group-hover:text-cyan dark:border-white/10 dark:bg-navy-900 dark:text-cyan dark:group-hover:border-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                      <HvacIcon name={leaf.icon} className="size-5" />
                    </span>
                  ) : null}
                  <span>
                    <span className="block text-[15px] font-semibold text-navy transition-colors group-hover:text-steel dark:text-white dark:group-hover:text-cyan">
                      {leaf.label}
                    </span>
                    {leaf.description ? (
                      <span className="mt-1 line-clamp-2 block text-[13px] leading-snug text-slate-500 dark:text-slate-400">
                        {leaf.description}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-slate-200 text-navy hover:bg-slate-100 lg:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="size-6" strokeWidth={1.5} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-2xl dark:bg-[#071324]">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
            <Logo className="h-8 w-auto" />
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-4 border-t border-slate-200 pt-6 dark:border-white/10">
            <ThemeToggle variant="full" />
            <Button asChild size="lg" className="w-full">
              <Link href="/request-a-quote">Request a quote</Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
