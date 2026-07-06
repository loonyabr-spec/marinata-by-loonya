async function exportPDF() {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    const batches = getBatches();

    if (batches.length === 0) {

        alert("No saved batches.");

        return;

    }

    let y = 20;

    pdf.setFont("helvetica","bold");
    pdf.setFontSize(20);
    pdf.text("MOWI Marinade Calculator",20,y);

    y += 10;

    pdf.setFontSize(11);

    pdf.text("Daily Production Report",20,y);

    y += 15;

    let totalFish = 0;
    let totalMarinade = 0;

    batches.forEach((item,index)=>{

        if(y>260){

            pdf.addPage();

            y=20;

        }

        pdf.setFont("helvetica","bold");

        pdf.text((index+1)+". "+item.productBatch,20,y);

        y+=7;

        pdf.setFont("helvetica","normal");

        pdf.text("Order: "+item.order,25,y);

        y+=6;

        pdf.text("Operator: "+item.operator,25,y);

        y+=6;

        pdf.text("Recipe: "+item.recipe,25,y);

        y+=6;

        pdf.text("Fish: "+item.fish+" kg",25,y);

        y+=6;

        pdf.text("Marinade: "+item.marinade+" kg",25,y);

        y+=6;

        pdf.text("Loads: "+item.batches,25,y);

        y+=6;

        pdf.text("Salt Lot: "+item.lots.salt,25,y);

        y+=6;

        pdf.text("Sugar Lot: "+item.lots.sugar,25,y);

        y+=6;

        pdf.text("Soy Lot: "+item.lots.soy,25,y);

        y+=6;

        pdf.text("Sesame Oil Lot: "+item.lots.oil,25,y);

        y+=6;

        pdf.text("White Sesame Lot: "+item.lots.sesame,25,y);

        y+=6;

        pdf.text("Sweet Chili Lot: "+item.lots.chili,25,y);

        y+=6;

        pdf.text("Concentrate Lot: "+item.lots.concentrate,25,y);

        y+=10;

        totalFish+=item.fish;

        totalMarinade+=item.marinade;

    });

    if(y>240){

        pdf.addPage();

        y=20;

    }

    pdf.setFont("helvetica","bold");

    pdf.setFontSize(16);

    pdf.text("SHIFT TOTAL",20,y);

    y+=10;

    pdf.setFontSize(12);

    pdf.text("Orders: "+batches.length,20,y);

    y+=8;

    pdf.text("Fish: "+totalFish.toFixed(2)+" kg",20,y);

    y+=8;

    pdf.text("Marinade: "+totalMarinade.toFixed(2)+" kg",20,y);

    const now=new Date();

    pdf.save(

        "MOWI_Report_"+

        now.getFullYear()+"-"+

        String(now.getMonth()+1).padStart(2,"0")+"-"+

        String(now.getDate()).padStart(2,"0")+

        ".pdf"

    );

}