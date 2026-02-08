import { useEffect } from "react";

import { setNavigation } from "../utils/common";

const TermsOfService = () => {
  useEffect(() => {
    setNavigation();
  }, []);
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto font-onest bg-white shadow-2xl rounded-2xl border border-gray-200 p-10 space-y-8 leading-relaxed">
        <h1 className="text-4xl font-bold">Terms Of Use</h1>

        <div className="space-y-2">
          <p>
            <strong>Last Updated:</strong> February 7, 2026
          </p>
          <p>
            These Terms of Service ("Terms") govern access to and use of the
            website operated by QSource Group Inc. (“QSource,” “Company,” “we,”
            “our,” or “us”). By accessing or using this website, you agree to be
            bound by these Terms. If you do not agree, you should discontinue
            use of the website.
          </p>
        </div>

        <Section title="1. Scope & Applicability">
          <p>
            These Terms apply to all visitors, users, clients, partners,
            vendors, and any other individuals or entities accessing this
            website. These Terms govern only website usage and do not replace or
            override any contractual agreements executed separately with
            QSource.
          </p>
        </Section>

        <Section title="2. Website Purpose">
          <p>
            This website is provided for general informational purposes related
            to QSource's services, solutions, industry experience, and corporate
            information. Content on this website does not constitute
            professional, legal, financial, or technical advice.
          </p>
        </Section>

        <Section title="3. Eligibility and Acceptable Use">
          <p>
            You agree to use this website only for lawful purposes and in
            compliance with all applicable laws and regulations. You must not
            misuse the website or attempt to disrupt its operation, security, or
            integrity.
          </p>
        </Section>

        <Section title="4. Intellectual Property Rights">
          <p>
            All content on this website, including text, graphics, logos, icons,
            images, layout, and design, is the property of QSource Group Inc. or
            its licensors and is protected by intellectual property laws.
            Unauthorized use, reproduction, modification, or distribution is
            prohibited without prior written consent.
          </p>
        </Section>

        <Section title="5. User Submissions">
          <p>
            Any information or materials submitted through this website must be
            accurate and lawful. By submitting information, you grant QSource
            the right to use such information for legitimate business purposes
            in accordance with the Privacy Policy.
          </p>
        </Section>

        <Section title="6. Third-Party Links">
          <p>
            This website may contain links to third-party websites for
            convenience. QSource does not control or endorse third-party content
            and is not responsible for their practices, content, or policies.
          </p>
        </Section>

        <Section title="7. Website Availability and Modifications">
          <p>
            QSource does not guarantee uninterrupted access to the website. We
            reserve the right to modify, suspend, or discontinue any part of the
            website at any time without notice.
          </p>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <p>
            The website is provided "as is" and "as available." QSource
            disclaims all warranties, express or implied, including accuracy,
            reliability, merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, QSource Group Inc. shall not
            be liable for any direct, indirect, incidental, consequential, or
            special damages arising from use of or inability to use this
            website.
          </p>
        </Section>

        <Section title="10. Indemnification">
          <p>
            You agree to indemnify and hold harmless QSource Group Inc., its
            officers, directors, employees, and affiliates from any claims or
            liabilities arising from misuse of the website or violation of these
            Terms.
          </p>
        </Section>

        <Section title="11. Security">
          <p>
            You must not attempt unauthorized access, introduce malware, or
            interfere with website systems. Violations may result in restricted
            access or legal action.
          </p>
        </Section>

        <Section title="12. Privacy">
          <p>
            Use of this website is subject to the QSource Privacy Policy, which
            describes how personal information is collected and processed.
          </p>
        </Section>

        <Section title="13. Governing Law">
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of the jurisdiction in which QSource Group Inc. is
            incorporated, without regard to conflict of law principles.
          </p>
        </Section>

        <Section title="14. Changes to Terms">
          <p>
            QSource reserves the right to update these Terms at any time.
            Continued use of the website constitutes acceptance of any revised
            Terms.
          </p>
        </Section>

        <Section title="15. Contact Information">
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

export default TermsOfService;

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
