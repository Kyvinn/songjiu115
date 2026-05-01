const animatedElements = document.querySelectorAll(`
  .hero-content,
  .hero-content .small-title,
  .hero-content h1,
  .hero-content p,
  .hero-buttons,
  .intro,
  .intro h2,
  .intro p,
  .section-heading,
  .section-heading p,
  .section-heading h2,
  .detail-card,
  .detail-card .icon,
  .detail-card h3,
  .detail-card p,
  .reason,
  .reason-text,
  .reason-text .small-title,
  .reason-text h2,
  .reason-text p,
  .reason-text li,
  .reason-text .btn,
  .reason-image,
  .program-card,
  .program-card h3,
  .program-card p,
  .memory,
  .memory h2,
  .memory p,
  .memory .btn,
  .faq-item,
  .faq-question,
  .faq-answer p,
  footer,
  .footer-logo,
  footer p
`);

animatedElements.forEach((element, index) => {
  element.classList.add("fade-up");
  element.style.transitionDelay = `${Math.min(index * 0.03, 0.35)}s`;
});

const revealOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

animatedElements.forEach((element) => {
  revealOnScroll.observe(element);
});