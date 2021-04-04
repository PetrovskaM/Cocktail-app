const id = localStorage.getItem('id');
const urlDetails = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const mainSectionRight = $('.right');
let wraper = $('.wrapper');

// Drink details-ingredient
fetch(urlDetails)
    .then((resp) => resp.json())
    .then(function (data) {
        const drinkDetails = data.drinks[0];
        const mainSectionLeft = document.querySelector('.left');
        const ingredient = document.querySelector('.ingredient');
        const instructions = document.querySelector('.instructions');
        mainSectionLeft.innerHTML = `<div class="fw-bolder mt-4"> <p class="mb-4"> ${drinkDetails.strDrink}</p> <img src=${drinkDetails.strDrinkThumb}> </div>`;
        ingredient.innerHTML = `<p class="fw-bolder text-center mt-4"> Ingredients </p>`;
        ingredientImages(drinkDetails);
        instructions.innerHTML = `<div> <span> <strong> Instructions </strong> </span> <p class="mt-3 fs"> ${drinkDetails.strInstructions}</p> </div> <div class="mb-5"> <span> <strong > Glass </strong> </span> <br> <p class="fs"> Serve:  ${drinkDetails.strGlass}</p> </div>`;
    })
    .catch(function (error) {
        console.log(error);
    });

ingredientImages = (drinkDetails) => {
    if (drinkDetails.strIngredient1) {
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'col-md-4 text-center')
        div1.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient1}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient1} </p>`;
        wraper.append(div1);
    }
    if (drinkDetails.strIngredient2) {
        const div2 = document.createElement('div');
        div2.setAttribute('class', 'col-md-4 text-center');
        div2.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient2}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient2} </p> `;
        wraper.append(div2);
    }
    if (drinkDetails.strIngredient3) {
        const div3 = document.createElement('div');
        div3.setAttribute('class', 'col-md-4 text-center');
        div3.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient3}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient3} </p> `;
        wraper.append(div3);
    }
    if (drinkDetails.strIngredient4) {
        const div4 = document.createElement('div');
        div4.setAttribute('class', 'col-md-4 text-center');
        div4.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient4}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient4} </p> `;
        wraper.append(div4);
    }
    if (drinkDetails.strIngredient5) {
        const div5 = document.createElement('div');
        div5.setAttribute('class', 'col-md-4 text-center');
        div5.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient5}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient5} </p> `;
        wraper.append(div5);
    }
    if (drinkDetails.strIngredient6) {
        const div6 = document.createElement('div');
        div6.setAttribute('class', 'col-md-4 text-center');
        div6.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient6}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient6} </p> `;
        wraper.append(div6);
    }
    if (drinkDetails.strIngredient7) {
        const div7 = document.createElement('div');
        div7.setAttribute('class', 'col-md-4 text-center');
        div7.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient7}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient7} </p>`;
        wraper.append(div7);
    }
    if (drinkDetails.strIngredient8) {
        const div8 = document.createElement('div');
        div8.setAttribute('class', 'col-md-4 text-center');
        div8.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient8}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient8} </p>`;
        wraper.append(div8);
    }
    if (drinkDetails.strIngredient9) {
        const div9 = document.createElement('div');
        div9.setAttribute('class', 'col-md-4 text-center');
        div9.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient9}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient9} </p>`;
        wraper.append(div9);
    }
    if (drinkDetails.strIngredient10) {
        const div10 = document.createElement('div');
        div10.setAttribute('class', 'col-md-4 text-center');
        div10.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient10}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient10} </p>`;
        wraper.append(div10);
    }
    if (drinkDetails.strIngredient11) {
        const div11 = document.createElement('div');
        div11.setAttribute('class', 'col-md-4 text-center');
        div11.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient11}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient11} </p>`;
        wraper.append(div11);
    }
    if (drinkDetails.strIngredient12) {
        const div12 = document.createElement('div');
        div12.setAttribute('class', 'col-md-4 text-center');
        div12.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient12}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient12} </p>`;
        wraper.append(div12);
    }
    if (drinkDetails.strIngredient13) {
        const div13 = document.createElement('div');
        div13.setAttribute('class', 'col-md-4 text-center');
        div13.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient13}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient13} </p>`;
        wraper.append(div13);
    }
    if (drinkDetails.strIngredient14) {
        const div14 = document.createElement('div');
        div14.setAttribute('class', 'col-md-4 text-center');
        div14.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient14}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient14} </p>`;
        wraper.append(div14);
    }
    if (drinkDetails.strIngredient15) {
        const div15 = document.createElement('div');
        div15.setAttribute('class', 'col-md-4 text-center');
        div15.innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${drinkDetails.strIngredient15}-Medium.png"> <br> <p class="ingredient-name"> ${drinkDetails.strIngredient15} </p>`;
        wraper.append(div15);
    }
}