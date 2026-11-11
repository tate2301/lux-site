"use client";

import { useState } from "react";

export default function DeleteAccountForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Lux Liquor Account Deletion Request - ${phone}`
    );
    const body = encodeURIComponent(
      `ACCOUNT DELETION REQUEST\n` +
        `-------------------------\n` +
        `Full Name: ${fullName}\n` +
        `Registered Phone: ${phone}\n` +
        `Registered Email: ${email}\n` +
        `Reason: ${reason || "Not specified"}\n` +
        `Additional Notes: ${notes || "None"}\n\n` +
        `I hereby request the permanent deletion of my Lux Liquor account and associated personal data under applicable data protection policies.\n`
    );

    const link = `mailto:support@luxliquor.co.zw?subject=${subject}&body=${body}`;
    setMailtoUrl(link);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name on Account:</label>
          <input
            type="text"
            id="fullName"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g., Tendai Moyo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Registered Mobile Phone Number (Zimbabwe):
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g., +263 77 123 4567"
          />
          <div className="form-hint">
            Used to find your account and send identity verification OTP.
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Registered Email Address:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., tendai@example.co.zw"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Leaving (Optional):</label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="">Select a reason (optional)</option>
            <option value="no-longer-needed">No longer using the service</option>
            <option value="privacy-concerns">Privacy or data concerns</option>
            <option value="relocated">Relocated outside delivery area</option>
            <option value="service-experience">
              Unhappy with app or delivery service
            </option>
            <option value="other">Other reason</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Comments (Optional):</label>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional information..."
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              required
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              style={{ width: "auto", marginRight: "0.5rem" }}
            />
            I understand that deleting my account will permanently remove my
            profile, saved delivery addresses, and loyalty rewards, and that this
            action cannot be undone.
          </label>
        </div>

        <button type="submit" className="button">
          Submit Deletion Request
        </button>
      </form>

      {submitted && (
        <div className="callout callout-success" style={{ marginTop: "1.5rem" }}>
          <div className="callout-title">Request Prepared!</div>
          <p>
            Your email application has been launched with your deletion request
            details. If your email client did not open automatically, please{" "}
            <a href={mailtoUrl}>
              <strong>click here to send the pre-filled email</strong>
            </a>{" "}
            directly to support@luxliquor.co.zw.
          </p>
        </div>
      )}
    </div>
  );
}
