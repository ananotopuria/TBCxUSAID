// export function initStickyObserver(selector) {
//   const sectionStickyEl = document.querySelector(selector);
//   if (!sectionStickyEl) {
//     console.error(`Element with selector "${selector}" not found.`);
//     return;
//   }
//   const obs = new IntersectionObserver(
//     function (entries) {
//       const ent = entries[0];
//       console.log(ent);
//       if (ent.isIntersecting === false) {
//         document.body.classList.add("sticky");
//       }
//       if (ent.isIntersecting) {
//         document.body.classList.remove("sticky");
//       }
//     },
//     {
//       root: null,
//       threshold: 0,
//       rootMargin: "-80px",
//     }
//   );
//   obs.observe(sectionStickyEl);
// }

export function initStickyObserver(selector) {
  const sectionStickyEl = document.querySelector(selector);
  if (!sectionStickyEl) {
    console.error(`Element with selector "${selector}" not found.`);
    return;
  }

  let intersectingElementCount = 0; // Track the number of intersecting elements

  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          intersectingElementCount++;
        } else {
          intersectingElementCount--;
        }
      });

      // Update the class based on the overall intersection state
      if (intersectingElementCount > 0) {
        document.body.classList.remove("sticky");
      } else {
        document.body.classList.add("sticky");
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