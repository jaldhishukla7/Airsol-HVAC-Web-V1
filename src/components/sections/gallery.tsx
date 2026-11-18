"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string; width: number; height: number };

/** Thumbnail grid with an accessible lightbox (Esc closes, arrow keys navigate). */
const BENTO = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export function Gallery({
  images,
  className,
  variant = "grid",
}: {
  images: GalleryImage[];
  className?: string;
  variant?: "grid" | "bento";
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );
  const current = index !== null ? images[index] : undefined;

  return (
    <>
      <ul
        className={cn(
          variant === "bento"
            ? "grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4"
            : "grid grid-cols-2 gap-3 sm:grid-cols-3",
          className,
        )}
      >
        {images.map((img, i) => (
          <li key={img.src + i} className={variant === "bento" ? BENTO[i % BENTO.length] : undefined}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-xl border border-line bg-ice",
                variant === "bento" ? "h-full" : "aspect-[4/3]",
              )}
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes={variant === "bento" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 640px) 33vw, 50vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                aria-hidden
                className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-navy/10 to-transparent p-4 text-left text-[13px] leading-snug text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                {img.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-900/90" />
          <Dialog.Content
            className="on-dark fixed inset-0 z-50 flex flex-col items-center justify-center p-4 outline-none"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(1);
              if (e.key === "ArrowLeft") go(-1);
            }}
          >
            <Dialog.Title className="sr-only">Image viewer</Dialog.Title>
            {current ? (
              <>
                <div className="relative h-[75vh] w-full max-w-5xl">
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </div>
                <Dialog.Description className="mt-4 max-w-2xl text-center text-sm text-mist">
                  {current.alt} ({(index ?? 0) + 1} of {images.length})
                </Dialog.Description>
              </>
            ) : null}
            <Dialog.Close
              className="absolute top-4 right-4 grid size-11 place-items-center rounded-md text-white hover:bg-white/10"
              aria-label="Close image viewer"
            >
              <X className="size-6" strokeWidth={1.5} />
            </Dialog.Close>
            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-md text-white hover:bg-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-7" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-md text-white hover:bg-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-7" strokeWidth={1.5} />
                </button>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
