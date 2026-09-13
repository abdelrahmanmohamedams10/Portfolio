document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const portfolio = document.querySelector(".portfolio");
  window.setTimeout(() => portfolio?.classList.add("motion-on"), 140);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -5%" });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  let frame = 0;
  const renderScroll = () => {
    const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    root.style.setProperty("--scroll-progress", String(scrollY / max));
    root.style.setProperty("--hero-shift", String(Math.min(scrollY, 900)));
    document.querySelectorAll(".parallax-media").forEach((media) => {
      const rect = media.parentElement?.getBoundingClientRect();
      if (!rect || rect.bottom < -100 || rect.top > innerHeight + 100) return;
      const progress = (innerHeight - rect.top) / (innerHeight + rect.height) - 0.5;
      media.style.setProperty("--image-shift", `${progress * 34}px`);
    });
    frame = 0;
  };
  addEventListener("scroll", () => {
    if (!frame) frame = requestAnimationFrame(renderScroll);
  }, { passive: true });
  renderScroll();

  if (matchMedia("(pointer: fine)").matches) {
    addEventListener("pointermove", (event) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      root.style.setProperty("--mouse-x", String((event.clientX / innerWidth - 0.5) * 2));
      root.style.setProperty("--mouse-y", String((event.clientY / innerHeight - 0.5) * 2));
    }, { passive: true });
  }
});

