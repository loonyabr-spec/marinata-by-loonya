function calculate() {

    const fish =
        parseFloat(document.getElementById("fishWeight").value);

    if (isNaN(fish) || fish <= 0) {

        document.getElementById("ingredients").innerHTML = "";
        document.getElementById("batches").innerHTML = "";

        return;

    }

    let batchCount =
        parseInt(document.getElementById("batchCount").value);

    if (isNaN(batchCount) || batchCount < 1)
        batchCount = 1;

    // Автоматически увеличиваем количество загрузок,
    // если получается больше 100 кг на одну машину

    while ((fish / batchCount) > 100) {

        batchCount++;

    }

    document.getElementById("batchCount").value = batchCount;

    const cup =
        parseFloat(document.getElementById("cupSize").value);

    const recipe =
        RECIPES[currentRecipe];

    const t =
        TRANSLATIONS[currentLanguage];

    /* ---------------- INGREDIENTS ---------------- */

  let ingredientsHTML = "";

recipe.ingredients.forEach(item=>{

    let name=item.name;

    switch(item.id){

        case "salt": name=t.salt; break;
        case "sugar": name=t.sugar; break;
        case "soy": name=t.soy; break;
        case "sesameOil": name=t.sesameOil; break;
        case "whiteSesame": name=t.whiteSesame; break;
        case "sweetChili": name=t.sweetChili; break;
        case "concentrate": name=t.concentrate; break;

    }

    const value=(fish*item.coef).toFixed(2);

    ingredientsHTML+=`

    <tr>

        <td>${name}</td>

        <td>${value} kg</td>

    </tr>

    `;

});

const marinade=fish*recipe.marinadeCoef;

const cups=marinade/cup;

ingredientsHTML+=`

<tr class="totalRow">

<td>

🥣 ${t.totalMarinade}

</td>

<td>

${marinade.toFixed(2)} kg

</td>

</tr>

<tr class="totalRow">

<td>

🪣 ${t.cups}

</td>

<td>

${cups.toFixed(1)}

</td>

</tr>

`;

document.getElementById("ingredients").innerHTML=ingredientsHTML;
        renderDashboard(
            
            

    fish,

    marinade,

    cups,

    batchCount

);

    /* ---------------- BATCHES ---------------- */

    const fishBatch =
        fish / batchCount;

    const marinadeBatch =
        marinade / batchCount;

    const cupBatch =
        cups / batchCount;

    let batchesHTML = "";

    for (let i = 1; i <= batchCount; i++) {

        batchesHTML += `

        <div class="batchCard">

            <h3>

                ${t.batch} ${i}

            </h3>

            <div class="batchRow">

                <span>🐟 Fish</span>

                <strong>${fishBatch.toFixed(2)} kg</strong>

            </div>

            <div class="batchRow">

                <span>🥣 Marinade</span>

                <strong>${marinadeBatch.toFixed(2)} kg</strong>

            </div>

            <div class="batchRow">

                <span>🪣 Cups</span>

                <strong>${cupBatch.toFixed(1)}</strong>

            </div>

        </div>

        `;

    }

    document.getElementById("batches").innerHTML =
        batchesHTML;

   function saveHistory(record){

    let history =
        JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

    history.unshift({

        ...record,

        operator:
            document.getElementById("operator").value,

        order:
            document.getElementById("orderNumber").value,

        productBatch:
            document.getElementById("productBatch").value,

        lots:{

            salt:
                document.getElementById("lotSalt").value,

            sugar:
                document.getElementById("lotSugar").value,

            soy:
                document.getElementById("lotSoy").value,

            oil:
                document.getElementById("lotOil").value,

            sesame:
                document.getElementById("lotSesame").value,

            chili:
                document.getElementById("lotChili").value,

            concentrate:
                document.getElementById("lotConc").value

        }

    });

    if(history.length>100){

        history.length=100;

    }

    localStorage.setItem(

        HISTORY_KEY,

        JSON.stringify(history)

    );

    renderHistory();

}

}