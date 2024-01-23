export const openModalWindow = function () {
  const modal = document.querySelector(`.modal`);
  const overlayy = document.querySelector(`.overlayy`);
  const openModal = document.querySelectorAll(`.open-modal`);
  for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener(`click`, function () {
      modal.classList.remove(`hidden`);
      overlayy.classList.remove(`hidden`);
    });
  }
};

// export const closeModalWindow = function(){
//     const modal = document.querySelector(`.modal`);
//     const overlayy = document.querySelector(`.overlayy`);
//     const btnClose = document.querySelector(`.close-modal`);
//     btnClose.addEventListener(`click`, function(){
//         modal.classList.add(`hidden`);
//         overlayy.classList.add(`hidden`);
//     });
// }
// export const closeModalWindow = function () {
//   const modals = document.querySelectorAll(".modal");
//   const overlays = document.querySelectorAll(".overlayy");
//   const btnCloses = document.querySelectorAll(".close-modal");
//   btnCloses.forEach((btnClose, index) => {
//     btnClose.addEventListener("click", function () {
//       modals[index].classList.add("hidden");
//       overlays[index].classList.add("hidden");
//     });
//   });
// };

export const closeModalWindow = function () {
    document.addEventListener('click', function (event) {
        const btnClose = event.target.closest('.close-modal');
        if (btnClose) {
            const modal = btnClose.closest('.modal');
            const overlayy = modal.querySelector('.overlayy');
            modal.classList.add('hidden');
            overlayy.classList.add('hidden');
        }
    });
};

export const overlayModal = function () {
  const modal = document.querySelector(`.modal`);
  const overlayy = document.querySelector(`.overlayy`);
  overlayy.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    overlayy.classList.add(`hidden`);
  });
};
