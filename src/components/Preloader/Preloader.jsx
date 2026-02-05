import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import loading from "../../assets/loading.svg";

const Preloader = ({ onDone }) => {
  const wrapRef = useRef();

  useEffect(() => {
    // entrance (optional subtle pop)
    gsap.fromTo(
      wrapRef.current,
      { scale: 1, opacity: 1 },
      { scale: 1, opacity: 1 },
    );

    // exit animation trigger after delay
    const t = setTimeout(() => {
      gsap.to(wrapRef.current, {
        scale: 6,
        opacity: 0,
        duration: 1,
        ease: "power3.in",
        onComplete: onDone, // tell App to unmount
      });
    }, 500);

    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <img
        src={loading}
        alt="loading"
        className="w-[100px] h-[100px] spin-slow"
      />
    </div>
  );
};

export default Preloader;
