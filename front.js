const { jsPDF } = require("jspdf");
// will automatically load the node version
const pdf = new jsPDF();

var x = 0;
var y = 60;



//***I dont think we need this section anymore***
//call this function whenever we need to add a new entry from the browswer history.
function pdfPopulator(history) {

    //Copy in the data of the new web history entry onto the PDF 

    //change the x and y coordinates for the next extry
    x = x + 10;
    y = y + 10;
}


function createInitialPDF() {

    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let studentID = document.getElementById("studentID").value;
    let assessmentCode = document.getElementById("assessmentCode").value;


    pdf.setFont("times", "bold");
    pdf.setFontSize(14);
    pdf.text("Student Assessment History Log", 10, 20);

    pdf.setFont("times", "regular");
    pdf.setFontSize(12);
    pdf.text(lname + ", ", 10, 30);
    pdf.text(fname, 30, 30);
    pdf.text(studentID, 10, 40);
    pdf.text(assessmentCode, 10, 50);
    pdf.text(startTime, 10, 60);

    pdf.save(fname.charAt(0) + lname + "_" + studentID + "_" + assessmentCode);

    //***I dont think we need this section anymore***
    for (let index = 0; index < window.history.length; index++) {
        //pdfPopulator(window.history);

    }

}


var startTime;
var flag = false;

function startSession() {
    flag = true;
    startTime = (new Date).getTime();  //Gets the start time value in milliseconds.
    //Add start time to PDF
    //Add student info to PDF
    createInitialPDF();
    console.log(startTime);
};

function stopSession() {
    flag = false;
    stopTime = (new Date).getTime(); //Gets the stop time value in milliseconds.
    //Add stoptime to PDF
    //export or download PDF file
    y = y + 10;
    pdf.text(stopTime, 10, y);
    pdf.save(fname.charAt(0) + lname + "_" + studentID + "_" + assessmentCode);

    console.log(stopTime);

}

chrome.history.onVisited.addListener(recordHistory(HistoryItem));

function recordHistory(historyItem) {

    // For each history item, get details on all visits.
    //NEED TO SEE IF THERE IS A WAY TO UNPACK THE TIME (just a really large number in miliseconds, need to convert it to be user friendly)
    var lastVisitTime = historyItem.lastVisitTime;
    if (lastVisitTime >= startTime && flag) {

        var id = historyItem.id;
        var url = historyItem.url;
        var title = historyItem.title;
        var updatedVisitCount = historyItem.visitCount;

        //add properties to PDF for the visit
        y = y + 10;
        pdf.text("-----------------------", 50, y);
        y = y + 10;
        pdf.text(id + ", ", 50, y);
        y = y + 10;
        pdf.text(url, 50, y);
        y = y + 10;
        pdf.text(title, 50, y);
        y = y + 10;
        pdf.text(lastVisitTime, 50, y);
        y = y + 10;
        pdf.text(updatedVisitCount, 50, y);

        //Does this save a new file everytime or does it replace the file?? might want to check on how pdf sacing works
        pdf.save(fname.charAt(0) + lname + "_" + studentID + "_" + assessmentCode);

    }

};