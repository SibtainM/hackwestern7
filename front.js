var name = "Empty";
var studentID = "Empty";
var assessmentCode = "Empty";

var startTime;
var flag = false;

function startSession() {
    flag = true;
    startTime = (new Date);  //Gets the start time value.

    name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    studentID = document.getElementById("studentID").value;
    assessmentCode = document.getElementById("assessmentCode").value;

    console.log(name);
    var nameElement = document.getElementById("stuName");
    var stuName = document.createTextNode(name);
    nameElement.appendChild(stuName);

    console.log(studentID);
    var idElement = document.getElementById("stuId");
    var stuId = document.createTextNode(studentID);
    idElement.appendChild(stuId);

    console.log(assessmentCode);
    var assessmentElement = document.getElementById("aCode");
    var aCode = document.createTextNode(assessmentCode);
    assessmentElement.appendChild(aCode);

    console.log(startTime);
    var startTimeElement = document.getElementById("startTime");
    var staTime = document.createTextNode(startTime);
    startTimeElement.appendChild(staTime);

};

function stopSession() {
    flag = false;
    stopTime = (new Date); //Gets the stop time value.

    console.log(stopTime);
    var stopTimeElement = document.getElementById("stopTime");
    var stoTime = document.createTextNode(stopTime);
    stopTimeElement.appendChild(stoTime);

    //Printing Static Data
    var mainDivElement = document.createElement("div");
    var mainList = document.createElement("ul");
    mainDivElement.appendChild(mainList);

    var body = document.getElementById("results");
    body.appendChild(mainDivElement);

    //Function to create a pokemon card
    for (let i = 0; i < 6; i++) {

        //Create list item
        var mainListItem = document.createElement("li");
        //Create div element
        var historyDiv = document.createElement("div");

        //Create and add specific values into element objects
        var title = document.createElement("p");
        title.append(history[i][0]);
        var url = document.createElement("p");
        url.append(history[i][1]);
        var lastVisitTime = document.createElement("p");
        lastVisitTime.append(history[i][2]);

        //Add elements to pokemon div element
        historyDiv.appendChild(title);
        historyDiv.appendChild(url);
        historyDiv.appendChild(lastVisitTime);

        //Add elements to pokemon list element
        mainListItem.appendChild(historyDiv);

        //Add main list item to the main list
        mainList.appendChild(mainListItem);

    }
};

//New array to hold each static history information
var history = []; // Create an array of arrays

//Format: (title, url, lastVisitTime)
//Populating each stsatic array element with specific title, link and date information
history[0] = new Array("why is marginal benefit downward sloping - Google Search", "www.google.com", "Sun Nov 22 2020 17:05:30 GMT-0500 (Eastern Standard Time)");
history[1] = new Array("How does marginal utility and marginal benefit differ?", "www.investopedia.com", "Sun Nov 22 2020 17:07:04 GMT-0500 (Eastern Standard Time)");
history[2] = new Array("Simply put: Marginal cost/benefit | The Incidental Economist", "theincidentaleconomist.com", "Sun Nov 22 2020 17:14:28 GMT-0500 (Eastern Standard Time)");
history[3] = new Array("Question: When A Demand Curve Is Linear, The Elasticity Is T... | Chegg.com", "www.chegg.com", "Sun Nov 22 2020 17:22:34 GMT-0500 (Eastern Standard Time)");
history[4] = new Array("Marginal Costs & Benefits | The Environmental Literacy Council", "enviroliteracy.org", "Sun Nov 22 2020 17:43:39 GMT-0500 (Eastern Standard Time)");
history[5] = new Array("Messenger", "www.messenger.com", "Sun Nov 22 2020 18:03:49 GMT-0500 (Eastern Standard Time)");


/*
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
*/