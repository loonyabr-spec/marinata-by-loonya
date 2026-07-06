const STORAGE_KEY = "mowi_batches";

function getBatches() {

    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

}

function saveBatch() {

    const recipe = RECIPES[currentRecipe];

    const fish = parseFloat(document.getElementById("fishWeight").value);

    if (isNaN(fish) || fish <= 0) {

        alert("Enter fish weight.");

        return;

    }

    const batch = {

        id: Date.now(),

        date: new Date().toLocaleDateString(),

        time: new Date().toLocaleTimeString(),

        operator: document.getElementById("operator").value,

        order: document.getElementById("orderNumber").value,

        productBatch: document.getElementById("productBatch").value,

        recipe: recipe.name,

        fish: fish,

        marinade: +(fish * recipe.marinadeCoef).toFixed(2),

        batches: parseInt(document.getElementById("batchCount").value),

        cups: +((fish * recipe.marinadeCoef) /
            parseFloat(document.getElementById("cupSize").value)).toFixed(1),

        lots: {

            salt: document.getElementById("lotSalt").value,

            sugar: document.getElementById("lotSugar").value,

            soy: document.getElementById("lotSoy").value,

            oil: document.getElementById("lotOil").value,

            sesame: document.getElementById("lotSesame").value,

            chili: document.getElementById("lotChili").value,

            concentrate: document.getElementById("lotConc").value

        }

    };

    const data = getBatches();

    data.unshift(batch);

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );

    renderBatchList();

}