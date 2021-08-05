'use strict';
const model = document.querySelector('.modal');
const deleteModel = document.querySelector('.close-modal');
const hiddenModel = document.querySelector('.hidden');
const overlayModel = document.querySelector('.overlay');

const showModel = document.querySelectorAll('.show-modal');

const openModel = function () {
    model.classList.remove('hidden');
    overlayModel.classList.remove('hidden');

}
const closeModel = function () {
    model.classList.add('hidden');
    overlayModel.classList.add('hidden');

}

for (let i = 0; i < showModel.length; i++) {
    showModel[i].addEventListener('click', openModel);

    deleteModel.addEventListener('click', closeModel);
    overlayModel.addEventListener('click', closeModel);

    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeModel();
        }

    })


}