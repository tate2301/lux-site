import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use and Conditions of Service for Lux Liquor on-demand alcohol delivery app in Zimbabwe under the Liquor Act [Chapter 14:12].",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p className="meta-date">
        Effective Date: 1 January 2026 &bull; Last Updated: 11 November 2026
      </p>

      <section>
        <p>
          Welcome to <strong>Lux Liquor</strong>. These Terms of Use (&ldquo;
          <strong>Terms</strong>&rdquo;) constitute a legally binding agreement
          between you (&ldquo;<strong>Customer</strong>&rdquo;, &ldquo;
          <strong>User</strong>&rdquo;, or &ldquo;<strong>you</strong>&rdquo;) and
          Intercept Investments (Private) Limited, trading as Lux Liquor
          (&ldquo;<strong>Lux Liquor</strong>&rdquo;, &ldquo;<strong>we</strong>
          &rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>
          &rdquo;), governing your access to and use of our mobile applications,
          website, and delivery platform services.
        </p>
        <p>
          By creating an account, accessing, or placing an order through the Lux
          Liquor platform, you explicitly agree to be bound by these Terms and
          our <Link href="/privacy">Privacy Policy</Link>. If you do not agree to
          these Terms, you may not use our services.
        </p>
      </section>

      <div className="callout callout-warning">
        <div className="callout-title">
          Critical Notice: Legal Age &amp; Proof of ID Required (18+)
        </div>
        <p>
          Under the <strong>Liquor Act [Chapter 14:12]</strong> of Zimbabwe, it
          is an offence to sell, supply, or deliver intoxicating liquor to any
          person under the age of <strong>eighteen (18) years</strong>. By
          placing an order, you warrant that you and the recipient are at least 18
          years old. A valid government photo ID must be physically produced
          upon delivery.
        </p>
      </div>

      <section>
        <h2>1. The Lux Liquor Marketplace Model</h2>
        <p>
          Lux Liquor is a technology platform that connects customers with
          independent, licensed third-party alcohol retailers (&ldquo;
          <strong>Merchant Partners</strong>&rdquo;) and independent delivery
          couriers (&ldquo;<strong>Delivery Partners</strong>&rdquo;). You
          acknowledge and agree that:
        </p>
        <ul>
          <li>
            Lux Liquor does not hold liquor licences or own the retail
            inventory. The legal sale and transfer of ownership of alcoholic
            beverages occurs at the licensed premises of the respective Merchant
            Partner.
          </li>
          <li>
            Delivery Partners operate as independent contractors responsible for
            picking up packaged orders from licensed premises and delivering them
            to your delivery location.
          </li>
          <li>
            Alcohol sales are strictly subject to statutory operational trading
            hours established by Zimbabwean liquor licensing boards and municipal
            by-laws.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Eligibility &amp; Account Registration</h2>
        <ul>
          <li>
            <strong>Age Verification:</strong> You must be at least 18 years old
            and legally competent to enter into contracts in Zimbabwe.
          </li>
          <li>
            <strong>Accurate Details:</strong> You agree to provide true,
            accurate, current, and complete information during registration,
            including your real name, valid mobile number, and delivery address.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for
            safeguarding your login credentials. Any activity conducted through
            your account will be deemed authorized by you.
          </li>
          <li>
            <strong>One Account per Person:</strong> Users may not operate
            duplicate or fraudulent accounts to circumvent promotions, limits, or
            account suspensions.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Age Verification &amp; Delivery Handover Protocol</h2>
        <p>
          To strictly comply with Zimbabwean liquor legislation and promote
          responsible consumption, the following delivery handover protocols
          apply to every order:
        </p>
        <ol>
          <li>
            <strong>Physical ID Inspection:</strong> The Delivery Partner will
            require the recipient to present an official, valid
            government-issued photo ID (Zimbabwean National Identity Card, Valid
            Passport, or Zimbabwe Driver&apos;s Licence).
          </li>
          <li>
            <strong>Name Verification:</strong> The Delivery Partner may check
            that the name on the ID matches the order details or confirms legal
            adulthood of the recipient.
          </li>
          <li>
            <strong>Mandatory Refusal:</strong> The Delivery Partner is legally
            obligated to refuse delivery and return the order if:
            <ul>
              <li>
                The recipient fails or refuses to produce a valid photo ID
                proving they are 18 years or older;
              </li>
              <li>
                The recipient appears visibly intoxicated, incapacitated, or
                under the influence of illegal substances;
              </li>
              <li>
                There is reason to believe the alcohol is being procured on
                behalf of minors (secondary supply).
              </li>
            </ul>
          </li>
          <li>
            <strong>Restocking &amp; Return Fee:</strong> If an order cannot be
            delivered due to age verification failure, recipient absence, or
            intoxication, the order will be cancelled. A non-refundable
            restocking and return delivery fee will be deducted from any
            eligible refund.
          </li>
        </ol>
      </section>

      <section>
        <h2>4. Ordering, Pricing &amp; Payments</h2>
        <ul>
          <li>
            <strong>Pricing:</strong> All prices displayed on the app reflect the
            retail price set by Merchant Partners, inclusive of applicable sales
            taxes, unless indicated otherwise.
          </li>
          <li>
            <strong>Fees:</strong> Order totals include the item prices,
            applicable delivery fees, platform service fees, and optional
            courier tips. All fees are displayed before you confirm payment.
          </li>
          <li>
            <strong>Supported Payment Methods:</strong> We accept approved
            digital payment channels in Zimbabwe, including EcoCash, InnBucks,
            Zipit/local bank transfers, Visa/Mastercard, and select
            Cash-on-Delivery options.
          </li>
          <li>
            <strong>Order Acceptance:</strong> An order is only confirmed when
            the Merchant Partner accepts the order and payment authorization is
            received. Merchant Partners reserve the right to decline or
            substitute items based on stock availability.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Cancellations, Returns &amp; Refunds</h2>
        <ul>
          <li>
            <strong>Customer Cancellations:</strong> You may cancel an order free
            of charge only before the Merchant Partner has commenced preparation
            or packaging. Once dispatched with a courier, the order cannot be
            cancelled.
          </li>
          <li>
            <strong>Non-Returnable Items:</strong> In accordance with health,
            safety, and liquor licensing regulations, alcoholic beverages,
            perishable goods, and opened bottles cannot be returned once handed
            over.
          </li>
          <li>
            <strong>Damaged or Incorrect Items:</strong> If you receive broken
            bottles, incorrect items, or incomplete orders, you must notify
            customer support via the app or email within <strong>two (2) hours</strong> of
            delivery, providing clear photographic proof. Valid claims will be
            refunded or credited.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Prohibited Activities</h2>
        <p>You agree not to engage in any of the following prohibited conduct:</p>
        <ul>
          <li>Procuring alcohol for persons under the age of 18;</li>
          <li>
            Abusing, threatening, harassing, or endangering Delivery Partners or
            customer support staff;
          </li>
          <li>
            Ordering deliveries to public schools, healthcare institutions, or
            locations prohibited by municipal liquor regulations;
          </li>
          <li>
            Falsifying identification or using stolen payment cards / mobile
            wallets;
          </li>
          <li>
            Attempting to decompile, reverse engineer, scrape, or disrupt the Lux
            Liquor application.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>To the maximum extent permitted under Zimbabwean law:</p>
        <ul>
          <li>
            Lux Liquor provides the platform on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis without warranties of any kind.
          </li>
          <li>
            Lux Liquor is not liable for delayed deliveries caused by adverse
            weather, traffic disruptions, vehicle breakdowns, fuel shortages, or
            force majeure events.
          </li>
          <li>
            Lux Liquor is not liable for health consequences resulting from
            excessive alcohol consumption. Customers are urged to drink
            responsibly and never drink and drive.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Account Termination &amp; Deletion</h2>
        <p>
          Lux Liquor reserves the right to suspend or terminate your account
          immediately if you breach these Terms, engage in fraud, or abuse our
          delivery partners. You may delete your account at any time by
          following the instructions on our{" "}
          <Link href="/delete-account">Account Deletion Page</Link> or via the
          in-app settings.
        </p>
      </section>

      <section>
        <h2>9. Governing Law &amp; Dispute Resolution</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the <strong>Republic of Zimbabwe</strong>. Any disputes arising out
          of or in connection with these Terms shall be subject to the exclusive
          jurisdiction of the competent courts of Zimbabwe in Harare.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          For questions or notices regarding these Terms of Use, please reach out
          to:
        </p>
        <ul>
          <li>
            <strong>Legal Department:</strong>{" "}
            <a href="mailto:legal@luxliquor.co.zw">legal@luxliquor.co.zw</a>
          </li>
          <li>
            <strong>General Support:</strong>{" "}
            <a href="mailto:support@luxliquor.co.zw">support@luxliquor.co.zw</a>
          </li>
          <li>
            <strong>Address:</strong> Intercept Investments (Private) Limited t/a
            Lux Liquor, Harare, Zimbabwe
          </li>
        </ul>
      </section>
    </>
  );
}
