import * as Outcomes from "./Outcomes";
import { isMobileView } from "../../utils/common";
import MobileAccordion from "./MobileAccordion";
import DesktopTab from "./DesktopTab";

const WhoWeServeSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col py-8 items-center justify-center gap-5 px-6 md:px-10 ">
      <h2 className="font-onest text-[40px] md:text-[56px] lg:text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933]">
        Who We <span className="text-[#0085F6]">Serve</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] text-center max-w-[90%]">
        Enterprises and institutions across regulated, asset-intensive, and
        growth-oriented sectors. Our industry exposure reflects deep familiarity
        with complex operations, regulatory landscapes, and large-scale business
        environments.
      </p>

      {!isMobileView() && <DesktopTab tabs={tabs} />}
      {isMobileView() && <MobileAccordion tabs={tabs} />}
    </div>
  );
};

const tabs = [
  {
    id: 1,
    backgroundImage: "src/assets/industryimage1.png",
    label: "Core Enterprise Industries",
    content:
      "Organizations operating complex, asset-intensive, and mission-critical environments where continuity, governance, and scale are non-negotiable.",
    outcomes: Outcomes.EnterpriseOutcomes,
  },
  {
    id: 2,
    backgroundImage: "src/assets/industryimage2.png",
    label: "Government & Public Sector",
    content:
      "Public institutions and agencies navigating policy-driven mandates, citizen services, national infrastructure, and long-term public accountability.",
    outcomes: Outcomes.GovernmentOutcomes,
  },
  {
    id: 3,
    backgroundImage: "src/assets/industryimage3.png",
    label: "Commercial & Growth Industries",
    content:
      "Business-driven sectors focused on expansion, customer experience, operational efficiency, and adapting to rapidly changing market dynamics.",
    outcomes: Outcomes.CommercialOutcomes,
  },
  {
    id: 4,
    backgroundImage: "src/assets/industryimage3.png", // Image Missing
    label: "Emerging & Specialized Sectors",
    content:
      "Organizations operating in evolving, purpose-driven, or innovation-led environments with unique constraints, funding models, and growth trajectories.", // Content Missing
    outcomes: Outcomes.SpecialOutcomes,
  },
];

export default WhoWeServeSection;
