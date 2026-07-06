function initRecipes() {

    const page = document.getElementById("recipesPage");

    page.innerHTML = `

    <div class="card">

        <h1>Recipes</h1>

        <div class="recipeGrid">

            ${recipeCard("classic","🥣","Classic")}
            ${recipeCard("sesame","🌾","Sesame")}
            ${recipeCard("teriyaki","🍯","Teriyaki")}
            ${recipeCard("spicy","🌶","Spicy")}

        </div>

    </div>

    `;

    document.querySelectorAll(".recipeButton").forEach(btn=>{

        btn.addEventListener("click",()=>{

            currentRecipe=btn.dataset.recipe;

            localStorage.setItem(
                "recipe",
                currentRecipe
            );

            highlightRecipe();

            calculate();

        });

    });

    const saved=localStorage.getItem("recipe");

    if(saved && RECIPES[saved]){

        currentRecipe=saved;

    }

    highlightRecipe();

}

function recipeCard(id,icon,title){

    return `

    <div class="recipeButton"

         data-recipe="${id}">

        <div class="recipeIcon">

            ${icon}

        </div>

        <div class="recipeTitle">

            ${title}

        </div>

    </div>

    `;

}

function highlightRecipe(){

    document
    .querySelectorAll(".recipeButton")
    .forEach(card=>{

        card.classList.remove("selectedRecipe");

        if(card.dataset.recipe===currentRecipe){

            card.classList.add("selectedRecipe");

        }

    });

}