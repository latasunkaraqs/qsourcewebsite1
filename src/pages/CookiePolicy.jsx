import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { setNavigation } from "../utils/common";

const CookiePolicy = () => {
  useEffect(() => {
    setNavigation();
  }, []);
  return (
    <>
      <Helmet>
        <title>QSource Group Inc. | Cookie Policy</title>
        <meta
          name="description"
          content="Enterprise technology services and solutions for complex, regulated, and large-scale environments. We design, modernize, and operate mission-critical systems with disciplined execution and long-term business focus."
        />
        <meta
          name="keywords"
          content="enterprise technology services, enterprise IT solutions, digital transformation services, cloud infrastructure operations, data analytics AI services, application modernization, enterprise systems integration, IT consulting and delivery, regulated industry IT solutions, mission-critical systems"
        />
      </Helmet>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto font-onest bg-white shadow-2xl rounded-2xl border border-gray-200 p-10 space-y-8 leading-relaxed">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>

          <div className="space-y-2">
            <p>
              <strong>Last Updated:</strong> February 7, 2026
            </p>
            <p>
              This website uses cookies and similar technologies to ensure
              proper functionality, enhance user experience, and analyze website
              usage.
            </p>
          </div>

          <Section title="Cookie Categories">
            <p>Cookies used on this website may be categorized as follows:</p>
          </Section>

          <Section title="Essential Cookies">
            <p>
              These cookies are necessary for the website to function securely
              and correctly. They enable core features such as page navigation,
              access control, and system stability. Essential cookies cannot be
              disabled through our systems.
            </p>
          </Section>

          <Section title="Analytics & Performance Cookies">
            <p>
              These cookies help us understand how visitors interact with the
              website by collecting aggregated and anonymized information.
              Insights from these cookies are used solely to improve website
              performance and usability.
            </p>
            <p className="mt-2">
              Where required by applicable law, analytics and non-essential
              cookies are used only with user consent.
            </p>
          </Section>

          <Section title="Managing Cookie Preferences">
            <p>
              Users may manage or withdraw cookie preferences at any time
              through browser settings or available consent tools. Please note
              that disabling certain cookies may impact website functionality.
            </p>
          </Section>

          <Section title="Advertising & Data Sale Statement">
            <p>
              QSource Group Inc. does not use cookies to sell personal
              information or engage in cross-context behavioral advertising as
              defined under the California Consumer Privacy Act (CCPA).
            </p>
          </Section>

          <Section title="Related Privacy Information">
            <p>
              For additional information on how personal data is processed,
              including user rights under applicable data protection laws such
              as GDPR and CCPA, please review our Privacy Policy.
            </p>
          </Section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
