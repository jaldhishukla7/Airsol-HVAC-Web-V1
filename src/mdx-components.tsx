import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  a: ({ href = "", children, ...props }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} {...props}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ),
  table: (props) => (
    <div className="not-prose my-6 overflow-x-auto rounded-md border border-line">
      <table className="w-full text-left text-sm [&_td]:border-t [&_td]:border-line [&_td]:px-4 [&_td]:py-2.5 [&_th]:bg-ice [&_th]:px-4 [&_th]:py-2.5 [&_th]:font-semibold [&_th]:text-navy" {...props} />
    </div>
  ),
  pre: (props) => <pre className="!bg-navy !text-ice" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
