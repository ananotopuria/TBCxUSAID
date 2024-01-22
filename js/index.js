import { initStickyObserver } from "./stickyObserver.js";
import { courseData, createCard } from "./courseCardContent.js";
import { slider } from "./slider.js";

initStickyObserver(".section-sticky");
slider();

const courseContainer = document.getElementById("course-container");

courseData.forEach((course) => {
  const card = createCard(course);
  courseContainer.appendChild(card);
});
