const searchName = localStorage.getItem('searchBarName');
const searchIngredient = localStorage.getItem('searchBarIngredient');
const cocktail = $('.cocktail');
const selectCocktail = localStorage.getItem('select-cocktail');
const letter = localStorage.getItem('letter');

// Cocktail searched by Name & Ingredient

if (localStorage.getItem('flag') == 'byName') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`;
} else if (localStorage.getItem('flag') == 'byIngredient') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchIngredient}`;
}
else if(localStorage.getItem('flag') == 'select') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${selectCocktail}`;
}
else {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
}

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        const drinks = data.drinks;
        console.log(drinks)
        drinks.forEach(element => {
            const div = document.createElement('div');
            div.setAttribute('class', 'col-md-3 mt-5');
            div.innerHTML = `<img src="${element.strDrinkThumb}" id="${element.idDrink}" class="img-details"> <p class="text-white text-center fs"> ${element.strDrink}</p>`
            cocktail.append(div);
            detailsDrink(element.idDrink);
        })
    })
    .catch(function (error) {
        console.log(error);
        alert('No data');
    });


// Cliked image

let detailsDrink = (drinkId) => {
    const imgDetails = jQuery(`[id='${drinkId}']`);
    imgDetails.click((event) => {
        localStorage.setItem('id', JSON.parse(event.target.id));
        window.open("cocktail-details.html");
    })
}