const urlRandomCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const alphabet = document.querySelectorAll('.alphabet span');
const searchName = $('.searchName');
const searchIngredient = $('.searchIngredient');
const select = $("#select-cocktail");

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
    let imgDetails = jQuery(`[id='${drinkId}']`);
    imgDetails.click((event) => {
        localStorage.setItem('id', JSON.parse(event.target.id));
        window.open("cocktail-details.html");
    })
}


// Search by Name
    searchName.click(function () {
        const searchBarName = $('.searchBarName').val();
        localStorage.setItem('searchBarName', searchBarName);
        localStorage.setItem('flag', 'byName');
        window.open("cocktail-filter.html");
    })


// Search by Ingredient
searchIngredient.click(function () {
    const searchBarIngredient = $('.searchBarIngredient').val();
    localStorage.setItem('searchBarIngredient', searchBarIngredient);
    localStorage.setItem('flag', 'byIngredient');
    window.open("cocktail-filter.html");
})

// Non Alcoholic/Alcoholic
select.change(function () {
    const selectCocktail = $('#select-cocktail').val();
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