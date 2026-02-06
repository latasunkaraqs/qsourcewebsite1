import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

const ContactSection = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full py-30 px-20 flex items-center justify-center flex-col gap-[34px]">
        <h2 className="font-onest text-[60px] font-medium leading-[100%] tracking-[-0.03em] text-center text-black">
          Let's start a <span className="text-[#0085F6]">great</span>
          <br />
          work right now
        </h2>
        <button
          // onClick={() => navigate("/contact")}
          onClick={() => setOpen(true)}
          className="relative w-[210px] h-[45px] mt-8 flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[50px] bg-[#021933] text-white hover:bg-[#0085F6] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group hover:scale-105"
        >
          <span className="pointer-events-none absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-700"></span>

          <span className="relative z-10 font-onest text-[19px] font-medium leading-[130%] tracking-[-0.05rem] text-white">
            Get in Touch
          </span>
        </button>
      </div>
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default ContactSection;
