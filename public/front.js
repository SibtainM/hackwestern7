const { jsPDF } = require("jspdf"); 
// will automatically load the node version
const pdf = new jsPDF();

var x = 0;
var y = 0;

//call this function whenever we need to add a new entry from the browswer history.
function pdfPopulator(history){

    //Copy in the data of the new web history entry onto the PDF 

    //change the x and y coordinates for the next extry
    x = x + 10;
    y = y + 10;
}


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

    for (let index = 0; index < window.history.length; index++) {
        //pdfPopulator(window.history);
        
    }
    
}