
window.onload = function () {
    loadRandomVideo();
};


var videoLinks = [
    "https://www.youtube.com/watch?v=Vbpr0ryoroA",
    "https://www.youtube.com/watch?v=HHjmbeH7iM8",
    "https://www.youtube.com/watch?v=qJVY25bli80",
    "https://www.youtube.com/watch?v=N4RMhrlk60E"
];

var languageNames = [
    "Estonian",
    "Macedonian",
    "Catalan",
    "Basque"
];

var currentLanguageIndex = 0;

//function loadRandomVideo() {
//    var randomIndex = Math.floor(Math.random() * videoLinks.length);
//    var randomLink = videoLinks[randomIndex];
 //   loadVideo(randomLink);
 //   updateButtonLabel(languageNames[randomIndex]); // Update button text with language at the same index as the video
 //   currentLanguageIndex = randomIndex;
//}

function loadRandomVideo() {
    var randomIndex = Math.floor(Math.random() * videoLinks.length);
    var randomLink = videoLinks[randomIndex];
    loadVideo(randomLink);
    updateButtonLabel(languageNames[randomIndex]);
    currentLanguageIndex = randomIndex;
}

function refreshPage() {
    location.reload();
}

// Get all buttons by their IDs
var buttons = document.querySelectorAll('#button1, #button2, #button3, #button4');

// Choose a random button index
var randomButtonIndex = Math.floor(Math.random() * buttons.length);

// Assign the loadRandomVideo function to the chosen button's onclick event
buttons[randomButtonIndex].onclick = function () {
    loadRandomVideo();
    refreshPage(); // Refresh the page after clicking the correct button
};

function loadVideo(videoLink) {
    var videoId = extractVideoId(videoLink);
    if (videoId) {
        var embedUrl = "https://www.youtube.com/embed/" + videoId;
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", embedUrl);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        document.getElementById("video-container").innerHTML = "";
        document.getElementById("video-container").appendChild(iframe);
    } else {
        alert("Invalid YouTube video link!");//will try another if not found
    }
}

function extractVideoId(url) {
    var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    var match = url.match(regExp);
    return match && match[1];
}

function updateButtonLabel(languageName, index) {
    var loadButton = document.getElementById("loadButton");
    loadButton.textContent = languageName;
}
//change here
function showAlert() {
    alert("You Lose!");
}


// Define the loadRandomVideo function
//function loadRandomVideo() {
 //   var randomIndex = Math.floor(Math.random() * videoLinks.length);
 //   var randomLink = videoLinks[randomIndex];
  //  loadVideo(randomLink);
 //   updateButtonLabel(languageNames[randomIndex]);
 //   currentLanguageIndex = randomIndex;
//}

// Get all buttons by their IDs
//var buttons = document.querySelectorAll('#button1, #button2, #button3, #button4');

// Choose a random button index
//var randomButtonIndex = Math.floor(Math.random() * buttons.length);

// Assign the loadRandomVideo function to the chosen button's onclick event
//buttons[randomButtonIndex].onclick = loadRandomVideo;
