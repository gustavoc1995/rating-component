
const rateNumber = document.querySelector(".numbers-container");
const submitBtn = document.querySelector(".submit-button");
const submitedCard = document.querySelector(".submited-card");
const ratingCard = document.querySelector(".rating-container");
const numberSelected = document.querySelector(".number-selected")


rateNumber.addEventListener('click', (event) => {
    const number = event.target.innerText;
    numberSelected.innerText = number;
});

submitBtn.addEventListener('click', () => {
    ratingCard.style.display = 'none';
    submitedCard.style.display = 'unset';
});