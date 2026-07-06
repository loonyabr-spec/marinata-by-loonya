function renderDashboard(fish, marinade, cups, batches) {

    const old = document.getElementById("dashboard");

    if (old) old.remove();

    const dashboard = document.createElement("div");

    dashboard.id = "dashboard";

    dashboard.className = "dashboard";

    dashboard.innerHTML = `

        <div class="dashCard">

            <div class="dashIcon">🐟</div>

            <div class="dashValue">${fish.toFixed(2)}</div>

            <div class="dashLabel">Fish (kg)</div>

        </div>

        <div class="dashCard">

            <div class="dashIcon">🥣</div>

            <div class="dashValue">${marinade.toFixed(2)}</div>

            <div class="dashLabel">Marinade (kg)</div>

        </div>

        <div class="dashCard">

            <div class="dashIcon">🪣</div>

            <div class="dashValue">${cups.toFixed(1)}</div>

            <div class="dashLabel">Cups</div>

        </div>

        <div class="dashCard">

            <div class="dashIcon">📦</div>

            <div class="dashValue">${batches}</div>

            <div class="dashLabel">Loads</div>

        </div>

    `;

    const page = document.getElementById("calculatorPage");

    page.insertBefore(
        dashboard,
        page.children[1]
    );

}