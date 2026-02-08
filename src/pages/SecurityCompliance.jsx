import { useEffect } from "react";

import { setNavigation } from "../utils/common";

const SecurityCompliance = () => {
  useEffect(() => {
    setNavigation();
  }, []);
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto font-onest bg-white shadow-2xl rounded-2xl border border-gray-200 p-10 space-y-8 leading-relaxed">
        <h1 className="text-4xl font-bold">Security & Compliance</h1>

        <div className="space-y-2">
          <p>
            <strong>Last Updated:</strong> February 7, 2026
          </p>
          <p>
            This document describes the control environment implemented by
            QSource Group Inc. to protect information assets and personal data.
            These controls are designed to align with the SOC 2 Trust Services
            Criteria (Security, Availability, Confidentiality, and Privacy) and
            reflect industry-recognized best practices.
          </p>
          <p>
            This document is informational and does not replace contractual
            obligations defined in executed agreements.
          </p>
        </div>

        <Section title="1. Confidentiality Controls">
          <SubSection title="1.1 Confidential Information Classification">
            <p>
              QSource Group Inc. maintains procedures to identify and classify
              confidential and sensitive information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Client proprietary data</li>
              <li>Business and financial information</li>
              <li>Intellectual property</li>
              <li>Technical and system documentation</li>
            </ul>
            <p>
              Confidential information is handled according to its
              classification and sensitivity.
            </p>
          </SubSection>

          <SubSection title="1.2 Confidentiality Obligations">
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain confidentiality of non-public information</li>
              <li>
                Use confidential information solely for authorized business
                purposes
              </li>
              <li>Protect information against unauthorized disclosure</li>
            </ul>
          </SubSection>

          <SubSection title="1.3 Non-Disclosure Agreements">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                NDAs are executed prior to or upon engagement where required
              </li>
              <li>
                NDAs define confidentiality scope, exclusions, duration, and
                remedies
              </li>
              <li>Contractual NDAs take precedence over this document</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="2. Information Security Governance">
          <SubSection title="2.1 Security Program Oversight">
            <ul className="list-disc pl-6 space-y-2">
              <li>Program is approved and supported by management</li>
              <li>Accountability for security responsibilities is assigned</li>
              <li>Program is reviewed periodically for effectiveness</li>
            </ul>
          </SubSection>

          <SubSection title="2.2 Risk Management">
            <ul className="list-disc pl-6 space-y-2">
              <li>Security risks are identified and evaluated</li>
              <li>
                Mitigation measures are implemented based on risk severity
              </li>
              <li>
                Risk considerations are incorporated into operational decisions
              </li>
            </ul>
          </SubSection>
        </Section>

        <Section title="3. Logical Access Controls">
          <SubSection title="3.1 Identity & Access Management">
            <ul className="list-disc pl-6 space-y-2">
              <li>Role-based access control (RBAC)</li>
              <li>Principle of least privilege</li>
              <li>Unique user identification and authentication</li>
            </ul>
          </SubSection>

          <SubSection title="3.2 Access Provisioning & Deprovisioning">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access is granted based on job responsibilities</li>
              <li>Access is reviewed periodically</li>
              <li>
                Access is promptly revoked upon role change or termination
              </li>
            </ul>
          </SubSection>

          <SubSection title="3.3 Privileged Access">
            <ul className="list-disc pl-6 space-y-2">
              <li>Elevated privileges are restricted and monitored</li>
              <li>Administrative access is limited to authorized personnel</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="4. Data Protection Controls">
          <SubSection title="4.1 Data Handling">
            <ul className="list-disc pl-6 space-y-2">
              <li>Logical segregation of customer data</li>
              <li>Controlled access to sensitive information</li>
              <li>Secure handling of credentials and secrets</li>
            </ul>
          </SubSection>

          <SubSection title="4.2 Encryption">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Data in transit is protected using industry-standard encryption
                protocols
              </li>
              <li>
                Secure communication channels are enforced for external data
                exchange
              </li>
            </ul>
          </SubSection>

          <SubSection title="4.3 Data Minimization">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Only data necessary to deliver services is collected and
                processed
              </li>
              <li>Personal data usage is limited to defined purposes</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="5. System Operations & Change Management">
          <SubSection title="5.1 Environment Segregation">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Development, testing, and production environments are logically
                separated
              </li>
              <li>Access to production systems is restricted</li>
            </ul>
          </SubSection>

          <SubSection title="5.2 Change Management">
            <ul className="list-disc pl-6 space-y-2">
              <li>Changes to systems are authorized prior to implementation</li>
              <li>Changes are tested and documented</li>
              <li>Emergency changes follow defined procedures</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="6. Monitoring & Incident Response">
          <SubSection title="6.1 Security Monitoring">
            <ul className="list-disc pl-6 space-y-2">
              <li>Unauthorized access attempts</li>
              <li>Operational anomalies</li>
              <li>Security-related events</li>
            </ul>
          </SubSection>

          <SubSection title="6.2 Incident Response">
            <ul className="list-disc pl-6 space-y-2">
              <li>Incident identification and classification</li>
              <li>Containment and remediation procedures</li>
              <li>Management escalation where appropriate</li>
              <li>Client notification per contractual obligations</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="7. Third-Party & Vendor Risk Management">
          <SubSection title="7.1 Vendor Due Diligence">
            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party providers are evaluated based on risk</li>
              <li>
                Contracts include confidentiality and data protection clauses
              </li>
            </ul>
          </SubSection>

          <SubSection title="7.2 Sub-Processors">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Sub-processors are engaged only to support service delivery
              </li>
              <li>Safeguards are maintained through contractual agreements</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="8. Data Privacy & Processing Controls">
          <SubSection title="8.1 Roles & Responsibilities">
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients act as Data Controllers where applicable</li>
              <li>
                QSource Group Inc. acts as Data Processor or Service Provider
              </li>
            </ul>
          </SubSection>

          <SubSection title="8.2 Processing Limitations">
            <ul className="list-disc pl-6 space-y-2">
              <li>Processed only on documented client instructions</li>
              <li>Used for defined business purposes</li>
              <li>Handled in accordance with applicable laws</li>
            </ul>
          </SubSection>

          <SubSection title="8.3 Data Subject Rights Support">
            <p>
              QSource Group Inc. supports clients in responding to data subject
              requests as contractually agreed.
            </p>
          </SubSection>

          <SubSection title="8.4 Data Retention & Disposal">
            <ul className="list-disc pl-6 space-y-2">
              <li>Data is retained only for business or legal requirements</li>
              <li>
                Secure deletion or return occurs upon termination, subject to
                obligations
              </li>
            </ul>
          </SubSection>
        </Section>

        <Section title="9. Continuous Improvement & Compliance">
          <ul className="list-disc pl-6 space-y-2">
            <li>Security and privacy controls are periodically reviewed</li>
            <li>Policies are updated for regulatory and risk changes</li>
            <li>Controls are enhanced as business and technology evolve</li>
          </ul>
        </Section>

        <Section title="10. Authority & Precedence">
          <ul className="list-disc pl-6 space-y-2">
            <li>This document does not constitute a binding agreement</li>
            <li>This document does not modify contractual obligations</li>
            <li>Executed agreements prevail in case of conflict</li>
          </ul>
        </Section>

        <Section title="11. Contact Information">
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

export default SecurityCompliance;

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
