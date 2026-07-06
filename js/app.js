document.addEventListener("DOMContentLoaded", () => {
const exportButton = document.getElementById("exportCSVButton");

if (exportButton) {

    exportButton.onclick = exportCSV;

}
    initMenu();
    initLanguage();
    initTheme();
    initCalculator();
    initRecipes();
    loadHistory();

    calculate();

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }

});

function initMenu() {

    const buttons = document.querySelectorAll(".menuBtn");
    const pages = document.querySelectorAll(".page");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");

            const page = button.dataset.page;

            pages.forEach(p => p.classList.remove("activePage"));

            document
                .getElementById(page + "Page")
                .classList.add("activePage");

        });

    });

}

function initCalculator() {

    const fish = document.getElementById("fishWeight");
    const batch = document.getElementById("batchCount");
    const cup = document.getElementById("cupSize");

    fish.addEventListener("input", calculate);
    batch.addEventListener("input", calculate);
    cup.addEventListener("change", calculate);

}
document.addEventListener("DOMContentLoaded",()=>{

    const button=document.getElementById("saveBatchButton");

    if(button){

        button.onclick=saveBatch;

    }

});
const pdfButton=document.getElementById("exportPDFButton");

if(pdfButton){

    pdfButton.onclick=exportPDF;

}