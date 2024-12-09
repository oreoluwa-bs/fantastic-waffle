import gsap from "gsap";
import { Animation } from "./classes/animation";

export class FadeIn extends Animation {
  constructor({ element }: { element: HTMLElement }) {
    super({ element, elements: {}, observerOptions: { threshold: 0.5 } });

    gsap.set(this.element, { autoAlpha: 0, y: 20 });
  }
  animateIn(): void {
    gsap.to(this.element, { autoAlpha: 1, y: 0 });
  }

  animateOut(): void {}
}
