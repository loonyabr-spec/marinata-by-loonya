function renderBatchList(){

    const container=document.getElementById("historyList");

    if(!container) return;

    const batches=getBatches();

    container.innerHTML="";

    batches.forEach(item=>{

        container.innerHTML+=`

        <div class="batchCard">

            <h3>

                ${item.productBatch}

            </h3>

            <div class="batchRow">

                <span>Order</span>

                <strong>${item.order}</strong>

            </div>

            <div class="batchRow">

                <span>Fish</span>

                <strong>${item.fish} kg</strong>

            </div>

            <div class="batchRow">

                <span>Marinade</span>

                <strong>${item.marinade} kg</strong>

            </div>

            <div class="batchRow">

                <span>Recipe</span>

                <strong>${item.recipe}</strong>

            </div>

            <div class="batchRow">

                <span>Operator</span>

                <strong>${item.operator}</strong>

            </div>

            <div class="batchRow">

                <span>Date</span>

                <strong>${item.date} ${item.time}</strong>

            </div>

        </div>

        `;

    });

}