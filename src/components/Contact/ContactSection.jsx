import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

const ContactSection = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-30 flex items-center justify-center flex-col gap-[34px] px-6 md:px-10 ">
        <h2 className="font-onest text-[48px] md:text-[52px] lg:text-[60px] font-medium leading-[115%] tracking-normal text-center text-black">
          Let's Start the
          <br />
          <span className="text-[#0085F6]">Right</span> Work.
        </h2>
        <button
          // onClick={() => navigate("/contact")}
          onClick={() => setOpen(true)}
          className="relative w-[210px] h-[45px] mt-8 flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[50px] bg-[#021933] text-white hover:bg-[#0085F6] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group hover:scale-105"
        >
          <span className="pointer-events-none absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-700"></span>

          <span className="relative z-10 font-onest text-[19px] font-medium leading-[130%] tracking-normal text-white">
            Get in Touch
          </span>
        </button>
      </div>
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default ContactSection;
