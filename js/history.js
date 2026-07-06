const HISTORY_KEY = "mowi_history";

function saveHistory(record) {

    let history =
        JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

    history.unshift(record);

    if (history.length > 50) {
        history = history.slice(0, 50);
    }

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );

    renderHistory();
}

function loadHistory() {

    renderHistory();

}

function renderHistory() {

    const container =
        document.getElementById("historyList");

    if (!container)
        return;

    const history =
        JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

    const t = TRANSLATIONS[currentLanguage];

    if (history.length === 0) {

        container.innerHTML = `

        <div class="card">

            ${t.noHistory}

        </div>

        `;

        return;

    }

    let html = "";

    history.forEach((item,index)=>{

        html += `

        <div class="batchCard">

            <h3>

                #${index+1}

            </h3>

            <div class="batchRow">

                <span>📅</span>

                <span>${item.date}</span>

            </div>

            <div class="batchRow">

                <span>🐟 Fish</span>

                <span>${item.fish.toFixed(2)} kg</span>

            </div>

            <div class="batchRow">

                <span>🥣 Marinade</span>

                <span>${item.marinade.toFixed(2)} kg</span>

            </div>

            <div class="batchRow">

                <span>🪣 Cups</span>

                <span>${item.cups.toFixed(1)}</span>

            </div>

            <div class="batchRow">

                <span>📦 Batches</span>

                <span>${item.batches}</span>

            </div>

            <div class="batchRow">

                <span>📋 Recipe</span>

                <span>${item.recipe}</span>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}

function clearHistory(){

    if(confirm("Clear history?")){

        localStorage.removeItem(HISTORY_KEY);

        renderHistory();

    }

}