import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Terra Nova",
  description:
    "Integrated sourcing and procurement solutions for finishing materials, built around the requirements of each project.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
