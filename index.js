const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

/* Pop-up animation when elements enter the screen */
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

  /*
    Small delay so elements do not all appear at exactly the same time.
    This makes the website feel smoother and more professional.
  */
  element.style.transitionDelay = `${Math.min(index * 0.03, 0.35)}s`;
});

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
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