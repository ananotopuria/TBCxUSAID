import { initStickyObserver } from "./stickyObserver.js";
import { courseData, createCard } from "./courseCardContent.js";

initStickyObserver(".section-sticky");


const courseContainer = document.getElementById("course-container");

courseData.forEach((course) => {
  const card = createCard(course);
  courseContainer.appendChild(card);
});
