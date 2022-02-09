
// h1 tag color change 
const allH1 = document.getElementsByTagName('h1');

for (const h1 of allH1) {
    h1.style.color = 'red';
}

// card style 
const items = document.getElementById("items");
items.style.backgroundColor = 'DeepPink';
items.style.color = 'white';
items.style.padding = '10px';
items.style.marginBottom = '20px';

const cards = document.getElementsByClassName('panda-card');
for (const card of cards) {
    // card.style.backgroundColor = 'DeepPink';
    card.style.borderRadius = "15px";
}

// submit button console text 
document.getElementById('panda-submit').addEventListener('click', function () {
    const customarGmail = document.getElementById('gmail');
    console.log(customarGmail.value);
    customarGmail.value = '';
});

// remove buy now button 
const buyButtons = document.getElementsByClassName('btn-container');
for (const buyButton of buyButtons) {
    buyButton.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}

// keyup if input value == mosheur you can submited else submit button disable
document.getElementById('gmail').addEventListener('keyup', function (event) {
    const submitBtn = document.getElementById('panda-submit');
    if (event.target.value == 'mosheur') {
        submitBtn.removeAttribute('disabled');
        submitBtn.style.backgroundColor = 'green';
        submitBtn.style.color = 'white';
        submitBtn.style.padding = '7px 15px';
        submitBtn.style.borderRadius = "15px";
    }
    else {
        submitBtn.setAttribute('disabled', true);
        submitBtn.style.backgroundColor = 'red';
        submitBtn.style.color = 'white';
        submitBtn.style.padding = '7px 15px';
        submitBtn.style.borderRadius = "15px";
    }
});

// mouseover card bg color change
const imgItems = document.getElementsByClassName('item-img');
for (const imgItem of imgItems) {
    imgItem.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'red';
    });
}

//  dblclick change bacground
document.getElementById('change-footer-color').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'green';
})
