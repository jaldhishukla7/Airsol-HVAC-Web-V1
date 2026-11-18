import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="on-dark blueprint-dark text-white">
      <div className="container-x flex min-h-[60vh] flex-col justify-center py-20">
        <p className="font-display text-7xl font-semibold text-cyan">404</p>
        <h1 className="mt-2 font-display text-5xl font-semibold text-white">This duct leads nowhere</h1>
        <p className="mt-4 max-w-[52ch] text-[17px] text-mist">
          The page you asked for does not exist or has moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">Go to the home page</Link>
          </Button>
          <Button asChild size="lg" variant="ghostDark">
            <Link href="/products">Browse products</Link>
          </Button>
          <Button asChild size="lg" variant="ghostDark">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
