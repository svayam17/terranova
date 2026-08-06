import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Terra Nova | Global Luxury Materials Studio",
  description:
    "Premium wood flooring, decking, cladding, and bespoke sourcing solutions for hospitality, real estate, and luxury developments."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="extension-attribute-cleanup" strategy="beforeInteractive">
        {`
          (function () {
            function cleanBisAttributes(root) {
              var elements = [root].concat(Array.prototype.slice.call(root.querySelectorAll ? root.querySelectorAll("*") : []));
              elements.forEach(function (element) {
                if (!element || !element.attributes) return;
                Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
                  if (attribute.name.indexOf("bis_") === 0) {
                    element.removeAttribute(attribute.name);
                  }
                });
              });
            }

            cleanBisAttributes(document.documentElement);

            var observer = new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                if (mutation.type === "attributes" && mutation.attributeName && mutation.attributeName.indexOf("bis_") === 0) {
                  mutation.target.removeAttribute(mutation.attributeName);
                }
                mutation.addedNodes.forEach(function (node) {
                  if (node.nodeType === 1) cleanBisAttributes(node);
                });
              });
            });

            observer.observe(document.documentElement, {
              attributes: true,
              childList: true,
              subtree: true
            });

            window.addEventListener("load", function () {
              window.setTimeout(function () {
                observer.disconnect();
              }, 1500);
            });
          })();
        `}
      </Script>
      <body
        className={`${cormorant.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
