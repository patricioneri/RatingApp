//I toggle the class of the rate buttons
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

const btn1Clicked = () => {
    btn1.classList.toggle('buttonRateClicked');
}
const btn2Clicked = () => {
    btn2.classList.toggle('buttonRateClicked');
}
const btn3Clicked = () => {
    btn3.classList.toggle('buttonRateClicked');
}
const btn4Clicked = () => {
    btn4.classList.toggle('buttonRateClicked');
}
const btn5Clicked = () => {
    btn5.classList.toggle('buttonRateClicked');
}

btn1.addEventListener('click', btn1Clicked);
btn2.addEventListener('click', btn2Clicked);
btn3.addEventListener('click', btn3Clicked);
btn4.addEventListener('click', btn4Clicked);
btn5.addEventListener('click', btn5Clicked);


// I add the numbers container to a variable
const numberContainer = document.querySelector('.rateContainer');


// I define a function that save the number of the button 
const rate = (event) => {
    numberSelected = event.target.innerText;
    if(numberSelected > 0 || numberSelected <= 5 ) {
        form.addEventListener('submit', submit)
    }
}

numberContainer.addEventListener('click', rate);


// I add the card node and the form to varaibles
const cardContainer = document.getElementById('cardContainer');
const form = document.querySelector('form');

// define a function that changes the card container and render the selected number
const submit = () => {
    cardContainer.innerHTML = `
        <div class="thanksContainer">
            <img class="thanksImg" src="./images/illustration-thank-you.svg" >
            <p class="rateP">You selected <span class="rateNumber"></span> out of 5</p>
            <h4>Thank you!</h4>
            <p class="thanksP">
                We appreciate you taking the time to give a rating. <br>
                If you ever need more support, don’t hesitate <br> to get in touch!
            <p>
        </div>
    `
    const rateNumber = document.querySelector('.rateNumber')
    rateNumber.innerText = numberSelected;
}

