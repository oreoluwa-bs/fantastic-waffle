"use client";

import gsap from "gsap";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { ComponentRef, useEffect, useRef } from "react";

export function Experience({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ComponentRef<typeof ReactLenis>>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
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
        infinite: true,
        syncTouch: true,

      }}
    >
      {children}
    </ReactLenis>
  );
}
