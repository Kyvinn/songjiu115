document.getElementById('tunnel').addEventListener('click', () => {
  const tunnelText = document.querySelector('.tunnel-text');
  const background = document.querySelector('.background');
  const tunnel = document.getElementById('tunnel');

  tunnelText.style.transform = 'scale(0.1)';
  tunnelText.style.opacity = '0';

  background.style.opacity = '0.1';

  setTimeout(() => {
    tunnel.style.display = 'none';
    document.getElementById('website').classList.remove('hidden');
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    window.scrollTo(0, 0);
    AOS.init();
  }, 1500);
});

  document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  const updatePositions = () => {
    boxes.forEach((box) => {
      const position = box.dataset.position;
      box.classList.remove("left", "middle", "right");
      box.classList.add(position);
    });
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const clickedPosition = box.dataset.position;

      if (clickedPosition === "left") {
        boxes.forEach((b) => {
          if (b.dataset.position === "left") b.dataset.position = "middle";
          else if (b.dataset.position === "middle") b.dataset.position = "right";
          else if (b.dataset.position === "right") b.dataset.position = "left";
        });
      } else if (clickedPosition === "right") {
        boxes.forEach((b) => {
          if (b.dataset.position === "right") b.dataset.position = "middle";
          else if (b.dataset.position === "middle") b.dataset.position = "left";
          else if (b.dataset.position === "left") b.dataset.position = "right";
        });
      }

      updatePositions();
    });
  });

  updatePositions();
});

document.addEventListener("DOMContentLoaded", () => {
  const webhideElements = document.querySelectorAll(".webhide");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animate;

          // Trigger animation
          entry.target.classList.add(animationType);
          entry.target.style.opacity = "1";

          // Stop observing the element to prevent retriggering
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  webhideElements.forEach((el) => observer.observe(el));
});