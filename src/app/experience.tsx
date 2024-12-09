"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { ComponentRef, useEffect, useRef, useState } from "react";
import { GlobalAnimations } from "./animations/global";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Experience({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ComponentRef<typeof ReactLenis>>(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
      if (!init && lenisRef.current?.lenis) {
        setInit(true);
      }
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    const mm = window.matchMedia("(min-width: 767px)");
    function handleResize(event: MediaQueryListEvent) {
      if (event.matches && lenisRef.current?.lenis) {
        lenisRef.current.lenis.options.infinite = true;
        lenisRef.current.lenis.options.syncTouch = true;
      } else if (!event.matches && lenisRef.current?.lenis) {
        lenisRef.current.lenis.options.infinite = false;
        lenisRef.current.lenis.options.syncTouch = false;
      }
    }

    if (mm.matches && lenisRef.current?.lenis) {
      lenisRef.current.lenis.options.infinite = true;
      lenisRef.current.lenis.options.syncTouch = true;
    }

    // console.log(lenisRef.current, mm.matches);

    mm.addEventListener("change", handleResize);

    return () => {
      mm.removeEventListener("change", handleResize);
    };
  }, [init]);

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
