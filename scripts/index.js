const sectionCard = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');

const formAddCat = document.querySelector('#popup-form-cat');
const popupAddCat = new Popup("popup-add-cats");
popupAddCat.setEventListener();
// console.log({popupAddCat});





cats.forEach((cat) => {
const catN = new Card(cat, '#card-template');
const firstCat = catN.getElement();
sectionCard.append(firstCat);
// console.log({sectionCard});
});



function handleFormAddCat(e) {
    e.preventDefault()

    popupAddCat.close();
}

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);

