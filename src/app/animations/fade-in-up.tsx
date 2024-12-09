import gsap from "gsap";
import { Animation } from "./classes/animation";

export class FadeInUp extends Animation {
  constructor({ element }: { element: HTMLElement }) {
    super({ element, elements: {} });

    gsap.set(this.element, { autoAlpha: 0 });
  }
  animateIn(): void {
    gsap.to(this.element, { autoAlpha: 1 });
  }

  animateOut(): void {}
}
