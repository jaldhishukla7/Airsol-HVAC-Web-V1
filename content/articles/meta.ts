export type ArticleMeta = {
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readingMinutes: number;
  topic: string;
  related: { label: string; href: string }[];
};
