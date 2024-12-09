"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Arc() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top bottom-=800px",
          end: "+=950px",
          scrub: true,
          // markers: true,
        },
      })
      .to(".bg-arc", {
        borderRadius: 0,
        duration: 1,
      });
  }, []);

  return (
    <div className="absolute left-0 right-0 overflow-clip">
      <div className="bg-arc relative mx-auto text-center w-[120vw] -ml-[10vw] h-[100svh]">
        {/* <Image src={"/bg-arc.webp"} alt="" fill loading="lazy" /> */}
      </div>
    </div>
  );
}
