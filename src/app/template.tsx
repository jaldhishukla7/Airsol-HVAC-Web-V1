/**
 * Re-mounts on every navigation, giving each page a short CSS fade-in.
 * The animation is disabled by the reduced-motion rule in globals.css.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
