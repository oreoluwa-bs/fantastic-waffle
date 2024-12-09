export class Component {
  element: HTMLElement | null = null;
  elements: Record<string, NodeList | HTMLElement | null> = {};

  constructor({
    element,
    elements,
  }: {
    element: HTMLElement | string;
    elements: Record<string, HTMLElement | string>;
  }) {
    this.create(element, elements);
  }

  create(
    element: HTMLElement | string,
    elements: Record<string, HTMLElement | string>,
  ): void {
    if (element instanceof HTMLElement) {
      this.element = element;
    } else {
      this.element = document.querySelector(element);
    }

    if (Array.isArray(elements)) {
      elements.forEach((item, key) => {
        if (item instanceof HTMLElement) {
          this.elements[key] = item;
        } else {
          this.elements[key] = document.querySelectorAll(item);
        }
      });
    }
  }
}
