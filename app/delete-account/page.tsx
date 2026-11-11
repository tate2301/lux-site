import type { Metadata } from "next";
import DeleteAccountForm from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Request Account Deletion",
  description:
    "Request the permanent deletion of your Lux Liquor account and associated personal data under Google Play, Apple App Store, and Zimbabwean data protection rules.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <h1>Request Account &amp; Data Deletion</h1>
      <p className="meta-date">
        Google Play &amp; Apple App Store Compliant Deletion Portal &bull; Updated:
        November 2026
      </p>

      <section>
        <p>
          At <strong>Lux Liquor Zimbabwe</strong>, we respect your right to
          control your personal data. In accordance with Google Play Developer
          Policies, Apple App Store Review Guidelines, and the Zimbabwean{" "}
          <em>Cyber and Data Protection Act [Chapter 12:07]</em>, you can
          request the permanent deletion of your Lux Liquor account and
          associated personal data at any time.
        </p>
      </section>

      <section>
        <h2>Method 1: Delete Your Account Within the Mobile App (Instant)</h2>
        <p>
          If you still have the Lux Liquor app installed on your Android or iOS
          device, this is the quickest method:
        </p>
        <ol>
          <li>
            Open the <strong>Lux Liquor</strong> mobile app.
          </li>
          <li>
            Tap on <strong>Account / Profile</strong> in the bottom navigation
            bar.
          </li>
          <li>
            Select <strong>Settings</strong> &rarr;{" "}
            <strong>Privacy &amp; Security</strong>.
          </li>
          <li>
            Scroll down and tap <strong>Delete Account</strong>.
          </li>
          <li>
            Read the confirmation prompt and confirm by entering the one-time
            verification code (OTP) sent to your registered phone number or
            email.
          </li>
        </ol>
        <p>
          Upon confirmation, your session is immediately terminated, and your
          account enters the 30-day permanent deletion queue.
        </p>
      </section>

      <section>
        <h2>Method 2: Web Deletion Request (If App is Uninstalled)</h2>
        <p>
          If you have uninstalled the app or no longer have access to your
          device, submit your deletion request using the form below, or send an
          email directly to{" "}
          <a href="mailto:support@luxliquor.co.zw?subject=Account%20Deletion%20Request">
            support@luxliquor.co.zw
          </a>{" "}
          with the subject line <em>&ldquo;Account Deletion Request&rdquo;</em>.
        </p>

        <div className="callout">
          <div className="callout-title">Identity Verification Requirement</div>
          <p>
            To prevent unauthorized or fraudulent account deletions, our
            customer support team will send a verification SMS or email to the
            registered phone number/email before final deletion is processed.
          </p>
        </div>

        <DeleteAccountForm />
      </section>

      <section>
        <h2>What Data Is Deleted?</h2>
        <p>
          When your account deletion is finalized, we permanently remove or
          irreversibly anonymize the following data:
        </p>
        <ul>
          <li>
            <strong>Personal Profile Data:</strong> Full name, email address,
            phone number, and password hashes.
          </li>
          <li>
            <strong>Saved Locations:</strong> All saved delivery addresses,
            apartment numbers, notes, and GPS coordinates.
          </li>
          <li>
            <strong>Payment Tokens:</strong> All stored payment method tokens and
            wallet associations.
          </li>
          <li>
            <strong>Marketing &amp; Notification Data:</strong> Push notification
            tokens, SMS subscription logs, and marketing preferences.
          </li>
          <li>
            <strong>In-app Messages:</strong> Chat logs between you and delivery
            drivers or customer support.
          </li>
        </ul>
      </section>

      <section>
        <h2>What Data Is Retained &amp; Why?</h2>
        <p>
          In accordance with statutory legal requirements under Zimbabwean law,
          certain minimal data records cannot be immediately deleted:
        </p>
        <ul>
          <li>
            <strong>Financial &amp; Tax Records:</strong> Under Zimbabwe Revenue
            Authority (ZIMRA) regulations and the{" "}
            <em>Value Added Tax Act [Chapter 23:12]</em>, invoices, transaction
            amounts, and payment references must be retained for up to{" "}
            <strong>six (6) years</strong> for tax audits and financial
            reporting.
          </li>
          <li>
            <strong>Fraud &amp; Dispute Records:</strong> Anonymized transaction
            timestamps and delivery confirmation records may be retained for up
            to <strong>180 days</strong> to resolve pending chargebacks, bank
            disputes, or ongoing legal claims.
          </li>
        </ul>
        <p>
          Retained records are strictly quarantined and never used for
          marketing, profiling, or commercial purposes.
        </p>
      </section>

      <section>
        <h2>Processing Timeline</h2>
        <ul>
          <li>
            <strong>Immediate Action:</strong> Your account is immediately
            deactivated and logged out across all devices. You will no longer be
            able to place orders.
          </li>
          <li>
            <strong>Grace Period:</strong> We maintain a 7-day grace period
            during which you can contact support to cancel an accidental
            deletion request.
          </li>
          <li>
            <strong>Full Purge:</strong> All eligible data is permanently expunged
            from our operational databases within <strong>30 days</strong> of
            request verification.
          </li>
        </ul>
      </section>

      <section>
        <h2>Need Assistance?</h2>
        <p>
          If you experience any difficulties submitting your deletion request,
          contact us directly:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@luxliquor.co.zw?subject=Account%20Deletion%20Assistance">
              support@luxliquor.co.zw
            </a>
          </li>
          <li>
            <strong>Data Protection Officer:</strong>{" "}
            <a href="mailto:privacy@luxliquor.co.zw">privacy@luxliquor.co.zw</a>
          </li>
          <li>
            <strong>Helpline:</strong> +263 77 000 0000
          </li>
        </ul>
      </section>
    </>
  );
}
