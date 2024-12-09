import { Component } from "./component";

export class Animation extends Component {
  observer: IntersectionObserver | null = null;
  observerOptions: IntersectionObserverInit;

  constructor({
    element,
    elements,
    observerOptions,
  }: {
    element: HTMLElement | string;
    elements: Record<string, HTMLElement | string>;
    observerOptions?: IntersectionObserverInit;
  }) {
    super({ element, elements });

    this.observerOptions = {
      threshold: 1,
      ...observerOptions,
    };

    this.createObserver();
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    }, this.observerOptions);

    if (this.element) {
      this.observer.observe(this.element);
    }
  }

  animateIn() {}

  animateOut() {}
}
