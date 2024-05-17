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

function loadRandomVideo() {
    var randomIndex = Math.floor(Math.random() * videoLinks.length);
    var randomLink = videoLinks[randomIndex];
    loadVideo(randomLink);
    setButtonLabels(randomIndex);
    currentLanguageIndex = randomIndex;
}

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
        alert("Invalid YouTube video link!");
    }
}

function extractVideoId(url) {
    var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    var match = url.match(regExp);
    return match && match[1];
}

function setButtonLabels(correctIndex) {
    var buttons = document.querySelectorAll('#button1, #button2, #button3, #button4');
    var labels = [...languageNames];
    var correctLabel = labels.splice(correctIndex, 1)[0];

    // Shuffle the remaining labels
    for (let i = labels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [labels[i], labels[j]] = [labels[j], labels[i]];
    }

    // Choose a random button to be the correct one
    var correctButtonIndex = Math.floor(Math.random() * buttons.length);
    buttons.forEach((button, index) => {
        if (index === correctButtonIndex) {
            button.textContent = correctLabel;
            button.onclick = function () {
                loadRandomVideo();
            };
        } else {
            button.textContent = labels.pop();
            button.onclick = function () {
                showAlert();
            };
        }
    });
}

function showAlert() {
    alert("Try again!");
}
