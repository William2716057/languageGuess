window.onload = function () {
    loadRandomVideo();
};

function loadRandomVideo() {
    var videoLinks = [
        "https://www.youtube.com/watch?v=Vbpr0ryoroA",
        "https://www.youtube.com/watch?v=HHjmbeH7iM8",
        "https://www.youtube.com/watch?v=qJVY25bli80"
    ];
    var randomIndex = Math.floor(Math.random() * videoLinks.length);
    var randomLink = videoLinks[randomIndex];
    loadVideo(randomLink);
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