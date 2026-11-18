import { HeaderClient } from "@/components/layout/header-client";
import { MAIN_NAV } from "@/lib/nav";

/**
 * Server wrapper: builds the navigation from the content files on the server
 * and passes only labels, links and short descriptions to the client header,
 * so page copy is never bundled into client JavaScript.
 */
export function Header() {
  return <HeaderClient nav={MAIN_NAV} />;
}
