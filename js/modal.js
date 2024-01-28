export const openModalWindow = function () {
  const modal = document.querySelector('.modal');
  const overlayy = document.querySelector('.overlayy');
  const openModal = document.querySelectorAll('.open-modal');
  for (let i = 0; i < openModal.length; i++) {
      openModal[i].addEventListener('click', function () {
          modal.classList.remove('hidden');
          overlayy.classList.remove('hidden');
          modal.classList.add('slide-in');
      });
  }
};

export const closeModalWindow = function () {
  document.addEventListener('click', function (event) {
      const btnClose = event.target.closest('.close-modal');
      const modal = document.querySelector('.modal');
      const overlayy = document.querySelector('.overlayy'); 
      if (btnClose || event.target === overlayy) {
          event.preventDefault();
          modal.classList.remove('slide-in');
          modal.classList.add('hidden');
          overlayy.classList.add('hidden');
      }
  });
};

export const overlayModal = function () {
  const modal = document.querySelector('.modal');
  const overlayy = document.querySelector('.overlayy');
  overlayy.addEventListener('click', function () {
      modal.classList.remove('slide-in');
      modal.classList.add('hidden');
      overlayy.classList.add('hidden');
  });
};
