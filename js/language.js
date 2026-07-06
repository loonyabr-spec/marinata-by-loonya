function initLanguage(){

    const saved = localStorage.getItem("language");

    if(saved){

        currentLanguage = saved;

    }

    document.querySelectorAll(".langBtn").forEach(button=>{

        button.addEventListener("click",()=>{

            currentLanguage = button.dataset.lang;

            localStorage.setItem("language",currentLanguage);

            translate();

            calculate();

        });

    });

    translate();

}

function translate(){

    const t = TRANSLATIONS[currentLanguage];

    document.querySelector('[data-page="calculator"]').innerHTML="🧮 "+t.calculator;
    document.querySelector('[data-page="recipes"]').innerHTML="📋 "+t.recipes;
    document.querySelector('[data-page="history"]').innerHTML="🕒 "+t.history;
    document.querySelector('[data-page="settings"]').innerHTML="⚙ "+t.settings;

    document.getElementById("fishLabel").textContent=t.fishWeight;
    document.getElementById("batchLabel").textContent=t.batchCount;
    document.getElementById("cupLabel").textContent=t.cupSize;

    document.querySelector("#calculatorPage h1").textContent=t.calculator;

    document.querySelectorAll("#calculatorPage h2")[0].textContent=t.ingredients;
    document.querySelectorAll("#calculatorPage h2")[1].textContent=t.batches;

    document.querySelector("#recipesPage h1").textContent=t.recipes;
    document.querySelector("#historyPage h1").textContent=t.history;
    document.querySelector("#settingsPage h1").textContent=t.settingsTitle;

    updateThemeButton();

}