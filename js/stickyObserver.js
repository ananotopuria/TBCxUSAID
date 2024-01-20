export function initStickyObserver(selector) {
  const sectionStickyEl = document.querySelector(selector);
  if (!sectionStickyEl) {
    console.error(`Element with selector "${selector}" not found.`);
    return;
  }
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);
      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }
      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionStickyEl);
}
