"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { FadeIn } from "./fade-in";
import { FadeInUp } from "./fade-in-up";

export function GlobalAnimations() {
  useEffect(() => {
    const fadeInUps = gsap.utils.toArray('[data-animation="fade-in-up"]');
    fadeInUps.forEach((el: any) => {
      new FadeInUp({ element: el });
    });

    const fadeIns = gsap.utils.toArray('[data-animation="fade-in"]');
    fadeIns.forEach((el: any) => {
      new FadeIn({ element: el });
    });
  }, []);

  return null;
}
