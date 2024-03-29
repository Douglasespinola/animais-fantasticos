export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(
      '[data-menu="suave"] a[href^="#"]'
    );
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    console.log(this.scrollToSection.bind(this));
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    console.log(this.options);
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
