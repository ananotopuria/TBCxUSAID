export const initializeToggles = () => {
  const toggles = document.querySelectorAll(".acc-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.parentNode.classList.remove("active");
        }
      });
      toggle.parentNode.classList.toggle("active");
    });
  });
};
