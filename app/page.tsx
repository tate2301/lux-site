import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lux Liquor | On-Demand Liquor Delivery in Zimbabwe",
  description:
    "Official portal and regulatory information for Lux Liquor Zimbabwe, an on-demand delivery app connecting licensed bottle stores and verified couriers with adult consumers.",
};

export default function HomePage() {
  return (
    <>
      <section>
        <h1>Fast, Reliable Liquor Delivery Across Zimbabwe</h1>
        <p className="meta-date">
          Official platform information &amp; legal compliance portal
        </p>

        <div className="callout callout-warning">
          <div className="callout-title">Notice: 18+ Only</div>
          <p>
            Lux Liquor strictly enforces the legal drinking age in Zimbabwe. You
            must be at least 18 years old to browse, register, order, or receive
            alcoholic beverages. Valid government-issued photo identification is
            required upon delivery.
          </p>
        </div>

        <p>
          <strong>Lux Liquor</strong> is a Zimbabwean on-demand delivery
          marketplace connecting customers with licensed independent liquor
          retailers, bottle stores, and verified courier partners in major urban
          centres, including Harare, Bulawayo, and surrounding areas.
        </p>
      </section>

      <section>
        <h2>How It Works</h2>
        <ol>
          <li>
            <strong>Browse &amp; Order:</strong> Open the Lux Liquor mobile
            application, explore menus from licensed bottle stores in your area,
            and select your favourite beers, wines, spirits, ciders, and mixers.
          </li>
          <li>
            <strong>Secure Payment:</strong> Pay conveniently using local and
            international payment methods, including EcoCash, InnBucks, Zipit,
            Visa, Mastercard, or approved Cash on Delivery.
          </li>
          <li>
            <strong>Dispatch &amp; Track:</strong> A nearby verified courier
            partner collects your packaged order from the licensed retailer and
            delivers it directly to your doorstep with real-time GPS tracking.
          </li>
          <li>
            <strong>Age Verification:</strong> Present your national ID,
            passport, or driver&apos;s licence to the delivery driver to verify you
            are 18 years of age or older before handing over the package.
          </li>
        </ol>
      </section>

      <section>
        <h2>Legal &amp; Policy Centre</h2>
        <p>
          Review our official policies governing app usage, data protection,
          customer rights, and regulatory compliance:
        </p>
        <ul>
          <li>
            <Link href="/privacy">
              <strong>Privacy Policy</strong>
            </Link>
            <br />
            Learn how we collect, process, store, and protect your personal
            information, location data, and identity records under the Zimbabwean
            Cyber and Data Protection Act [Chapter 12:07].
          </li>
          <li>
            <Link href="/terms">
              <strong>Terms of Use (Terms of Service)</strong>
            </Link>
            <br />
            Read the terms governing customer accounts, liquor purchases, 18+
            verification obligations under the Liquor Act [Chapter 14:12],
            delivery refusal, and cancellations.
          </li>
          <li>
            <Link href="/delete-account">
              <strong>Account &amp; Data Deletion</strong>
            </Link>
            <br />
            Instructions and self-service options to permanently delete your Lux
            Liquor account and associated personal data in compliance with Google
            Play and Apple App Store developer policies.
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2>Customer Support &amp; Enquiries</h2>
        <p>
          If you have any questions, feedback, or require assistance with an
          existing order or account, please contact our team:
        </p>
        <ul>
          <li>
            <strong>General Support:</strong>{" "}
            <a href="mailto:support@luxliquor.co.zw">support@luxliquor.co.zw</a>
          </li>
          <li>
            <strong>Privacy &amp; Legal:</strong>{" "}
            <a href="mailto:privacy@luxliquor.co.zw">privacy@luxliquor.co.zw</a>
          </li>
          <li>
            <strong>WhatsApp Helpline:</strong> +263 77 000 0000
          </li>
          <li>
            <strong>Operating Hours:</strong> Monday &ndash; Sunday: 10:00 AM
            &ndash; 10:00 PM (CAT)
          </li>
          <li>
            <strong>Operating Location:</strong> Harare, Zimbabwe
          </li>
        </ul>
      </section>
    </>
  );
}
