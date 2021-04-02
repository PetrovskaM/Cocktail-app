const urlRandomCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const searchName = document.querySelector('.searchName');
const searchIngredient = document.querySelector('.searchIngredient');
const select = document.querySelector("#select-cocktail");
const alphabet = document.querySelectorAll('.alphabet span');

// Eight  Random drinks
for (let i = 1; i <= 8; i++) {

    fetch(urlRandomCocktail)
        .then((resp) => resp.json())
        .then(function (data) {
            const nextDrink = data.drinks[0].strDrinkThumb;
            const imgRandomDrink = document.querySelector(`.img-${i}`);
            imgRandomDrink.innerHTML = `<div class="img-coctail"> <img src="${nextDrink}" id="${data.drinks[0].idDrink}" class="img-details"> <p class="text-white text-center fs"> ${data.drinks[0].strDrink}</p></div>`;
            detailsDrink(data.drinks[0].idDrink);

        })

        .catch(function (error) {
            console.log(error);
        });
}

// Cliked image

let detailsDrink = (drinkId) => {
    let imgDetails = document.querySelector(`[id='${drinkId}']`);
    imgDetails.addEventListener('click', (event) => {
        localStorage.setItem('id', JSON.parse(event.target.id));
        window.open("cocktail-details.html");
    })
}

// Search by Name

searchName.addEventListener('click', function () {
    const searchBarName = document.querySelector('.searchBarName').value;
    localStorage.setItem('searchBarName', searchBarName);
    localStorage.setItem('flag', 'byName');
    window.open("cocktail-filter.html");
})

// Search by Ingredient

searchIngredient.addEventListener('click', function () {
    const searchBarIngredient = document.querySelector('.searchBarIngredient').value;
    localStorage.setItem('searchBarIngredient', searchBarIngredient);
    localStorage.setItem('flag', 'byIngredient');
    window.open("cocktail-filter.html");
})

// Non Alcoholic/Alcoholic

select.addEventListener('change', function () {
    const selectCocktail = document.querySelector('#select-cocktail').value;
    localStorage.setItem('select-cocktail', selectCocktail);
    localStorage.setItem('flag', 'select');
    window.open("cocktail-filter.html");

});
 
// Search by first letter

alphabet.forEach(element => {
    element.addEventListener('click', function () {
        localStorage.setItem('letter', element.innerHTML);
        localStorage.setItem('flag', 'letter');
        window.open("cocktail-filter.html");
    })
})
