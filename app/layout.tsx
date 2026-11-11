import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lux Liquor | On-Demand Liquor Delivery in Zimbabwe",
    template: "%s | Lux Liquor Zimbabwe",
  },
  description:
    "Lux Liquor is Zimbabwe's premium on-demand alcohol delivery app, connecting customers with licensed bottle stores and verified delivery partners.",
  metadataBase: new URL("https://luxliquor.co.zw"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <div className="brand-title">
              <Link href="/">Lux Liquor</Link>
            </div>
            <div className="brand-subtitle">
              On-Demand Alcohol Delivery &bull; Zimbabwe
            </div>
            <nav aria-label="Main Navigation">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/delete-account">Delete Account</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer>
            <div className="footer-nav">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/delete-account">Account Deletion</Link>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Intercept Investments (Private)
              Limited t/a Lux Liquor. All rights reserved. Alcohol abuse is
              dangerous to your health. Drink responsibly. Not for sale to
              persons under the age of 18.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
