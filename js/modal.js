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
