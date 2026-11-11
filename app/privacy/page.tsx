import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lux Liquor delivery mobile application and services in Zimbabwe under the Cyber and Data Protection Act [Chapter 12:07].",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="meta-date">
        Effective Date: 1 January 2026 &bull; Last Updated: 11 November 2026
      </p>

      <section>
        <p>
          Intercept Investments (Private) Limited, trading as Lux Liquor (&ldquo;
          <strong>Lux Liquor</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;,
          &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;),
          operates the Lux Liquor mobile application, website, and delivery
          marketplace service in Zimbabwe. We are committed to safeguarding the
          privacy and personal data of our customers, delivery partners, and
          merchant retailers.
        </p>
        <p>
          This Privacy Policy explains how we collect, process, share, retain,
          and protect your personal information when you access or use our
          mobile applications, website, and related delivery services. It also
          informs you of your privacy rights under applicable laws, including the{" "}
          <strong>Cyber and Data Protection Act [Chapter 12:07]</strong> of
          Zimbabwe.
        </p>
      </section>

      <div className="callout callout-warning">
        <div className="callout-title">Age Requirement Notice</div>
        <p>
          Our platform is strictly intended for individuals who are at least{" "}
          <strong>18 years of age</strong> (the legal drinking age in Zimbabwe).
          We do not knowingly collect personal data from anyone under the age of
          18.
        </p>
      </div>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, information
          collected automatically through app usage, and information from
          third-party partners:
        </p>

        <h3>A. Information You Provide Directly</h3>
        <ul>
          <li>
            <strong>Account Registration:</strong> Full name, mobile telephone
            number, email address, password, and date of birth.
          </li>
          <li>
            <strong>Delivery Details:</strong> Physical delivery address,
            residential complex/flat numbers, landmark instructions, and
            recipient contact name/number.
          </li>
          <li>
            <strong>Age Verification Records:</strong> Date of birth and, when
            required, confirmation of government-issued photo identification
            (National ID card, Driver&apos;s Licence, or Passport) shown at point
            of delivery to confirm legal age (18+).
          </li>
          <li>
            <strong>Communications:</strong> Messages sent via customer support,
            in-app driver chat, order feedback, ratings, and dispute
            submissions.
          </li>
        </ul>

        <h3>B. Information Collected Automatically</h3>
        <ul>
          <li>
            <strong>Precise Location Data:</strong> With your permission, we
            collect precise GPS coordinates from your mobile device while the
            app is running in the foreground or background to enable address
            auto-detection, order dispatch, nearby store discovery, and
            real-time courier tracking.
          </li>
          <li>
            <strong>Device &amp; Usage Information:</strong> Device model,
            operating system version, unique device identifiers (e.g., IMEI or
            advertising ID), network carrier, IP address, app crashes, and
            session timestamps.
          </li>
          <li>
            <strong>Order &amp; Transaction History:</strong> Records of items
            purchased, merchant bottle store details, order values, delivery
            times, and payment confirmations.
          </li>
        </ul>

        <h3>C. Payment Information</h3>
        <p>
          Payments are processed securely through licensed third-party payment
          gateways (including EcoCash, InnBucks, local Zimbabwean banking
          switches, and international card processors). Lux Liquor{" "}
          <strong>does not</strong> store your full payment card numbers, PINs,
          or banking passwords on our servers. We receive only transaction
          tokens, payment status, and transaction reference numbers.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use your personal data for the following lawful purposes:</p>
        <ul>
          <li>
            <strong>Order Fulfilment:</strong> Transmitting your order items to
            partner liquor retailers and dispatching independent delivery
            couriers to deliver products to your specified location.
          </li>
          <li>
            <strong>Age Compliance:</strong> Verifying that customers meet the
            statutory age threshold of 18 years under the{" "}
            <em>Liquor Act [Chapter 14:12]</em>.
          </li>
          <li>
            <strong>Real-time Tracking &amp; Logistics:</strong> Allowing you and
            the assigned delivery driver to track the delivery route and
            coordinate drop-off.
          </li>
          <li>
            <strong>Customer Care:</strong> Resolving customer complaints,
            handling refunds, missing item claims, or order disputes.
          </li>
          <li>
            <strong>Platform Security &amp; Fraud Prevention:</strong> Detecting
            fraudulent transactions, unauthorized account access, fake accounts,
            or abuse of promotion codes.
          </li>
          <li>
            <strong>Legal &amp; Tax Obligations:</strong> Maintaining statutory
            accounting, VAT, and fiscal records as required by the Zimbabwe
            Revenue Authority (ZIMRA) and other regulatory authorities.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Share Your Information</h2>
        <p>
          We do not sell your personal data. We disclose your information only
          under the following circumstances:
        </p>
        <ul>
          <li>
            <strong>With Delivery Drivers:</strong> We share your first name,
            delivery address, phone number (or masked phone number), and delivery
            instructions with the assigned courier partner strictly to complete
            your delivery.
          </li>
          <li>
            <strong>With Merchant Retailers:</strong> We share order contents and
            order reference numbers with licensed bottle stores so they can pick
            and pack your order.
          </li>
          <li>
            <strong>With Service Providers:</strong> Third-party technology
            vendors providing cloud hosting, map/routing APIs (e.g., Google
            Maps), SMS verification delivery, and payment gateway infrastructure.
          </li>
          <li>
            <strong>With Regulatory &amp; Law Enforcement Bodies:</strong> Where
            required by law, subpoena, or court order under the laws of Zimbabwe,
            including requests by the Zimbabwe Republic Police (ZRP) or POTRAZ.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account
          remains active or as needed to provide our services. If you delete
          your account:
        </p>
        <ul>
          <li>
            Your profile data, authentication credentials, and saved addresses
            are purged or irreversibly anonymized within <strong>30 days</strong>{" "}
            of confirmed deletion.
          </li>
          <li>
            Certain historical transaction records, tax invoices, and payment
            receipts are retained for up to <strong>six (6) years</strong>{" "}
            strictly to comply with Zimbabwean statutory tax (ZIMRA), audit, and
            commercial legal obligations.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard technical and organizational security
          controls to protect your data, including:
        </p>
        <ul>
          <li>
            Encryption of data in transit using Transport Layer Security
            (TLS/HTTPS).
          </li>
          <li>Hashed passwords using strong cryptographic functions.</li>
          <li>
            Role-based access controls limiting customer data access exclusively
            to authorized operational personnel.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Your Rights &amp; Choices</h2>
        <p>
          Under the <em>Cyber and Data Protection Act [Chapter 12:07]</em>, you
          have rights regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Access &amp; Rectification:</strong> You can view and update
            your account details directly within the mobile app settings.
          </li>
          <li>
            <strong>Location Permissions:</strong> You can enable or disable GPS
            location permissions at any time via your device operating system
            settings (disabling location may require manual address entry).
          </li>
          <li>
            <strong>Marketing Opt-Out:</strong> You may unsubscribe from
            promotional push notifications or marketing emails at any time.
          </li>
          <li>
            <strong>Account &amp; Data Deletion:</strong> You have the right to
            request the complete deletion of your account and associated
            personal data. Visit our{" "}
            <Link href="/delete-account">Account Deletion Page</Link> for
            complete instructions and our online deletion request form.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our operational practices or legal requirements. Material updates
          will be communicated through the Lux Liquor app or by updating the
          &ldquo;Last Updated&rdquo; date at the top of this document.
        </p>
      </section>

      <section>
        <h2>8. Contact Our Data Protection Officer</h2>
        <p>
          For any privacy-related queries, data access requests, or regulatory
          questions, please contact our team:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@luxliquor.co.zw">privacy@luxliquor.co.zw</a>
          </li>
          <li>
            <strong>Mailing Address:</strong> Intercept Investments (Private) Limited
            t/a Lux Liquor, Data Protection Office, Harare, Zimbabwe
          </li>
        </ul>
      </section>
    </>
  );
}
