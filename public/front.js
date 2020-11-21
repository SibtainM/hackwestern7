const { jsPDF } = require("jspdf"); 
// will automatically load the node version
const pdf = new jsPDF();

function createPDF(){

    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let idnum = document.getElementById("idnumber").value;

    pdf.setFont("times", "bold");
    pdf.setFontSize(14);
    pdf.text("Exam History Log", 10, 20);

    pdf.setFont("times", "regular");
    pdf.setFontSize(12);
    pdf.text(lname + ", ", 10, 30)
    pdf.text(fname, 30, 30)
    pdf.text(idnum, 10, 40)

    pdf.save(fname.charAt(0) + "_" + lname + idnum);
    
}