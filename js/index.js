import { initStickyObserver } from "./stickyObserver.js";
import { courseData, createCard } from "./courseCardContent.js";
import { slider } from "./slider.js";
import { initializeToggles } from "./toggles.js";
import { openModalWindow } from "./modal.js";
import { closeModalWindow } from "./modal.js";
import { overlayModal } from "./modal.js";

initStickyObserver(".section-sticky");
slider();

const courseContainer = document.getElementById("course-container");

courseData.forEach((course) => {
  const card = createCard(course);
  courseContainer.appendChild(card);
});

initializeToggles();

openModalWindow();
closeModalWindow();
overlayModal();