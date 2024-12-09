"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { ComponentRef, useEffect, useRef } from "react";
import { GlobalAnimations } from "./animations/global";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Experience({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ComponentRef<typeof ReactLenis>>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.options.infinite = true;
        lenisRef.current.lenis.options.syncTouch = true;
      }
    });
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        duration: 1,
        smoothWheel: true,
        autoRaf: false,
      }}
    >
      {children}
      <GlobalAnimations />
    </ReactLenis>
  );
}
