function loadVideo() {
    var videoLink = document.getElementById("video-link").value;
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