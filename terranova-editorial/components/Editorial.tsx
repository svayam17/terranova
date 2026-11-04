import type { ReactNode } from "react";

/**
 * Running head — the editorial replacement for tracked all-caps eyebrows.
 * A section number in italic Cormorant, a short rule, and the label in
 * sentence case, like the folio line of a printed journal.
 */
export function RunHead({
  n,
  children,
  className = ""
}: {
  n?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`runhead ${className}`}>
      {n ? <span className="runhead__n">{n}</span> : null}
      <span className="runhead__rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
