function exportCSV() {

    const batches = getBatches();

    if (batches.length === 0) {

        alert("No saved batches.");

        return;

    }

    let csv = "";

    csv += "Date,Time,Operator,Order,Product Batch,Recipe,Fish (kg),Marinade (kg),Loads,Cups,Salt Lot,Sugar Lot,Soy Lot,Sesame Oil Lot,White Sesame Lot,Sweet Chili Lot,Concentrate Lot\n";

    batches.forEach(item => {

        csv += [

            item.date,
            item.time,
            item.operator,
            item.order,
            item.productBatch,
            item.recipe,
            item.fish,
            item.marinade,
            item.batches,
            item.cups,
            item.lots.salt,
            item.lots.sugar,
            item.lots.soy,
            item.lots.oil,
            item.lots.sesame,
            item.lots.chili,
            item.lots.concentrate

        ].join(",");

        csv += "\n";

    });

    const blob = new Blob([csv], {

        type: "text/csv;charset=utf-8;"

    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    const now = new Date();

    const fileName =
        "MOWI_Report_" +
        now.getFullYear() +
        "-" +
        String(now.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(now.getDate()).padStart(2, "0") +
        ".csv";

    link.download = fileName;

    link.click();

    URL.revokeObjectURL(url);

}