import { useEffect } from "react";

import { setNavigation } from "../utils/common";

const PrivacyPolicy = () => {
  useEffect(() => {
    setNavigation();
  }, []);
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto font-onest bg-white shadow-2xl rounded-2xl border border-gray-200 p-10 space-y-8 leading-relaxed">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <div className="space-y-2">
          <p>
            <strong>Last Updated:</strong> February 7, 2026
          </p>
          <p>
            QSource Group Inc. ("QSource," "Company," "we," "our," or "us")
            respects your privacy and is committed to protecting personal
            information collected through our website, communications, and
            business interactions. This Privacy Policy describes how personal
            information is collected, used, stored, shared, protected, and
            retained.
          </p>
          <p>
            This policy applies to visitors, business contacts, clients,
            partners, job applicants, and any individual interacting with
            QSource through digital channels.
          </p>
        </div>

        <Section title="1. Scope & Applicability">
          <ul className="list-disc pl-6 space-y-2">
            <li>Visitors to the QSource Group Inc. website</li>
            <li>Individuals submitting inquiries, forms, or communications</li>
            <li>Recruitment and employment-related interactions</li>
            <li>Marketing, sales, partnership, and vendor communications</li>
          </ul>
          <p className="mt-4 font-semibold">This policy does not apply to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client systems managed under contractual agreements</li>
            <li>
              Third-party platforms governed by their own privacy policies
            </li>
          </ul>
        </Section>

        <Section title="2. Information We Collect">
          <h3 className="text-xl font-semibold mt-4">
            2.1 Information You Provide Voluntarily
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number</li>
            <li>Company name, role, and business contact details</li>
            <li>Inquiry content and correspondence</li>
            <li>Resume, employment history, and recruitment materials</li>
            <li>
              Any information submitted via forms, email, or direct
              communication
            </li>
          </ul>
          <p className="mt-2">
            Providing information is voluntary; however, certain interactions
            may require it.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            2.2 Automatically Collected Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device and operating system</li>
            <li>Pages visited, navigation patterns, and timestamps</li>
            <li>Referring URLs</li>
          </ul>
          <p className="mt-2">
            This data supports security, analytics, and performance improvement.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            2.3 Cookies & Similar Technologies
          </h3>
          <p>
            We may use functional cookies and performance/analytics cookies.
          </p>
          <p>
            Cookies help ensure functionality, understand usage, and improve
            experience. You may manage cookies through browser settings.
          </p>
        </Section>

        <Section title="3. How We Use Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and requests</li>
            <li>Communicate regarding services, solutions, or opportunities</li>
            <li>Support recruitment and hiring</li>
            <li>Improve website content and performance</li>
            <li>Maintain security, fraud prevention, and compliance</li>
            <li>Fulfill contractual, legal, or regulatory obligations</li>
          </ul>
          <p className="mt-2">
            QSource does not sell personal information as defined under
            applicable data protection laws.
          </p>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent</li>
            <li>Legitimate business interests</li>
            <li>Contractual necessity</li>
            <li>Legal or regulatory requirements</li>
          </ul>
        </Section>

        <Section title="5. Information Sharing & Disclosure">
          <ul className="list-disc pl-6 space-y-2">
            <li>With trusted service providers supporting operations</li>
            <li>
              With professional advisors under confidentiality obligations
            </li>
            <li>When required by law or government request</li>
            <li>To protect rights, safety, or security</li>
          </ul>
          <p className="mt-2">
            All third parties must maintain appropriate safeguards.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            Information is retained only as long as necessary for stated
            purposes and to meet legal and regulatory obligations. Data is
            securely deleted or anonymized when no longer required.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We apply administrative, technical, and physical safeguards designed
            to protect information from unauthorized access, loss, or misuse. No
            system can be guaranteed completely secure.
          </p>
        </Section>

        <Section title="8. International Data Transfers">
          <p>
            Information may be processed or stored in jurisdictions where
            QSource or its service providers operate. Appropriate safeguards are
            applied where required.
          </p>
        </Section>

        <Section title="9. Individual Rights">
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to personal information</li>
            <li>Correction or updates</li>
            <li>Deletion</li>
            <li>Processing restrictions</li>
          </ul>
          <p className="mt-2">
            Requests can be submitted using the contact information below.
          </p>
        </Section>

        <Section title="10. Third-Party Links">
          <p>
            Our website may include links to external websites. QSource is not
            responsible for their privacy practices or content.
          </p>
        </Section>

        <Section title="11. Children's Privacy">
          <p>
            This website is not intended for individuals under 13 years of age.
          </p>
        </Section>

        <Section title="12. Policy Updates">
          <p>
            This Privacy Policy may be updated periodically. Changes will be
            posted with a revised date.
          </p>
        </Section>

        <Section title="13. Contact Information">
          <div className="space-y-1">
            <p className="font-semibold">QSource Group Inc.</p>
            <p>17302 House & Hahl Rd, Suite #310</p>
            <p>Cypress, Texas 77433</p>
            <p>United States</p>
            <p className="mt-2">Email: hr@qsourcegroupinc.com</p>
            <p>Phone: +1 832-400-2629</p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
