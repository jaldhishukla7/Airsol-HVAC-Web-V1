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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change (state adjusted during render, not in an effect).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpenMenu(null);
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar: phone numbers, email and international link. Collapses on scroll. */}
      <div
        className={cn(
          "on-dark overflow-hidden bg-navy-900 text-[11px] sm:text-[12px] md:text-[13px] text-mist transition-[max-height] duration-300",
          scrolled ? "max-h-0" : "max-h-24 sm:max-h-12 md:max-h-10",
        )}
      >
        <div className="container-x flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5 sm:py-1 md:py-0 md:h-9">
          <ul className="flex flex-wrap items-center gap-x-3.5 gap-y-1 sm:gap-x-4 md:gap-5">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-center gap-1.5 whitespace-nowrap hover:text-white">
                  <Phone className="size-3 text-cyan sm:size-3.5" strokeWidth={1.5} aria-hidden />
                  <span>{p.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={mailto("Enquiry from website")} className="flex items-center gap-1.5 whitespace-nowrap hover:text-white">
                <Mail className="size-3 text-cyan sm:size-3.5" strokeWidth={1.5} aria-hidden />
                <span>{SITE.email}</span>
              </a>
            </li>
          </ul>
          <Link href="/international" className="flex items-center gap-1.5 whitespace-nowrap text-cyan hover:text-white">
            <Globe className="size-3 sm:size-3.5" strokeWidth={1.5} aria-hidden />
            <span>India, UAE and international projects</span>
          </Link>
        </div>
      </div>
    <div
      className={cn(
        "border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-[border-color,box-shadow,background-color] duration-200 dark:bg-navy-900/95 dark:supports-[backdrop-filter]:bg-navy-900/85",
        scrolled
          ? "border-line shadow-[0_6px_20px_-14px_rgb(11_37_69/0.35)] dark:border-line-dark dark:shadow-[0_6px_20px_-14px_rgb(0_0_0/0.6)]"
          : "border-transparent",
      )}
    >
      <div
        className={cn(
          "container-x flex items-center gap-4 sm:gap-6 transition-[height] duration-200",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo className={cn("transition-[height] duration-200", scrolled ? "h-8" : "h-10")} />

        <nav aria-label="Main" className="ml-auto hidden lg:block">
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
                      "rounded-md px-2.5 py-2 text-[15px] font-medium text-graphite transition-colors hover:text-steel xl:px-3 dark:text-mist dark:hover:text-white",
                      pathname.startsWith(item.href) && "text-steel dark:text-cyan",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/request-a-quote">Request a quote</Link>
          </Button>
          <MobileMenu nav={nav} />
        </div>
      </div>
    </div>
    </header>
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
          // A mouse click right after hover-open should keep the panel open, not toggle it shut.
          if (open && Date.now() - hoverOpenedAt.current < 400) return;
          onOpenChange(!open);
        }}
        className={cn(
          "flex items-center gap-1 rounded-md px-2.5 py-2 text-[15px] font-medium text-graphite transition-colors hover:text-steel xl:px-3 dark:text-mist dark:hover:text-white",
          (open || active) && "text-steel dark:text-cyan",
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          strokeWidth={1.5}
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div
        id={panelId}
        data-open={open}
        className="mega-panel absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_24px_40px_-24px_rgb(11_37_69/0.35)] dark:bg-navy-900 dark:border-line-dark dark:shadow-[0_24px_40px_-24px_rgb(0_0_0/0.7)]"
      >
        <div className="container-x grid grid-cols-[220px_1fr] gap-10 py-8">
          <div className="border-r border-line pr-8 dark:border-line-dark">
            <p className="font-display text-2xl font-semibold text-navy dark:text-white">{mega.heading}</p>
            {mega.footer ? (
              <Link
                href={mega.footer.href}
                className="link-underline mt-4 inline-block text-sm font-semibold text-steel dark:text-cyan"
              >
                {mega.footer.label}
              </Link>
            ) : null}
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 xl:grid-cols-3">
            {mega.items.map((leaf) => (
              <li key={leaf.href + leaf.label}>
                <Link
                  href={leaf.href}
                  className="group flex gap-3 rounded-md p-3 transition-colors hover:bg-ice focus-visible:bg-ice dark:hover:bg-navy-800 dark:focus-visible:bg-navy-800"
                >
                  {leaf.icon ? (
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-md border border-line bg-white text-steel group-hover:border-steel dark:border-line-dark dark:bg-navy-800 dark:text-cyan dark:group-hover:border-cyan">
                      <HvacIcon name={leaf.icon} className="size-5" />
                    </span>
                  ) : null}
                  <span>
                    <span className="block text-[15px] font-semibold text-navy dark:text-white">{leaf.label}</span>
                    {leaf.description ? (
                      <span className="mt-0.5 line-clamp-2 block text-[13px] leading-snug text-muted dark:text-mist">
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
          className="grid size-11 place-items-center rounded-md text-navy hover:bg-ice lg:hidden dark:text-white dark:hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="size-6" strokeWidth={1.5} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/50 data-[state=open]:animate-[fade-in_0.2s_ease-out]" />
        <Dialog.Content className="on-dark fixed inset-y-0 right-0 z-50 flex w-[min(380px,90vw)] flex-col bg-navy text-white shadow-2xl data-[state=open]:animate-[slide-in_0.25s_ease-out]">
          <div className="flex h-16 items-center justify-between border-b border-line-dark px-5">
            <Dialog.Title className="font-display text-xl font-semibold text-white">Menu</Dialog.Title>
            <Dialog.Close
              className="grid size-11 place-items-center rounded-md hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="size-6" strokeWidth={1.5} />
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="divide-y divide-line-dark">
              {nav.map((item) => (
                <li key={item.href} className="py-1">
                  {item.mega ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-lg font-medium [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <ChevronDown
                          aria-hidden
                          strokeWidth={1.5}
                          className="size-5 transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <ul className="mb-3 space-y-1 border-l border-line-dark pl-4">
                        {item.mega.items.map((leaf) => (
                          <li key={leaf.href + leaf.label}>
                            <Link href={leaf.href} className="block py-2 text-[15px] text-mist hover:text-white">
                              {leaf.label}
                            </Link>
                          </li>
                        ))}
                        {item.mega.footer ? (
                          <li>
                            <Link
                              href={item.mega.footer.href}
                              className="block py-2 text-[15px] font-semibold text-cyan"
                            >
                              {item.mega.footer.label}
                            </Link>
                          </li>
                        ) : null}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.href} className="block py-3 text-lg font-medium hover:text-cyan">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-line-dark p-5">
            <ThemeToggle variant="full" />
            <Button asChild className="w-full">
              <Link href="/request-a-quote">Request a quote</Link>
            </Button>
            <Button asChild variant="ghostDark" className="w-full">
              <a href={mailto("Enquiry from website")}>
                <Mail aria-hidden strokeWidth={1.5} />
                {SITE.email}
              </a>
            </Button>
            {SITE.phones.map((p) => (
              <Button key={p.tel} asChild variant="ghostDark" className="w-full">
                <a href={`tel:${p.tel}`}>
                  <Phone aria-hidden strokeWidth={1.5} />
                  Call {p.display}
                </a>
              </Button>
            ))}
            <Link
              href="/international"
              className="flex items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-4 py-2.5 text-center text-sm font-medium text-cyan hover:bg-cyan/20"
            >
              <Globe className="size-4" strokeWidth={1.5} aria-hidden />
              India, UAE and international projects
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
