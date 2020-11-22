// Given URLs and html element tag, populate history item into DOM list of URLs
function htmlPopulator(div, url) {
  var htmlDiv = document.getElementById(div);

  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var a = document.createElement('a');
  
  a.href = url;
  a.appendChild(document.createTextNode(url));

  li.appendChild(a);
  ul.appendChild(li);
  htmlDiv.appendChild(ul);
};

// Search history to display in html
function displayHistory(div) {

  var startTime = (new Date).getTime();

  //Search for history items visited during session
  chrome.history.search({

    'text': '',              // Search will return every item in history
    'startTime': startTime  // Only return things accessed after start time
  
  }, function (historyItems) {

    //For every item get and display details
    for (var i = 0; i < historyItems.length; ++i) {
      var url = historyItems[i].url;
      
      //print to PDF here
      htmlPopulator(div, url);

    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  displayHistory("results");
});

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({ 'url': chrome.extension.getURL('index.html'), 'selected': true });
// });