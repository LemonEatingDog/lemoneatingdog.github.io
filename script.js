document.addEventListener("DOMContentLoaded", function setupShareButton() {
    const shareButton = document.getElementById("aboutShareSvg");

    if (shareButton && navigator.share) {
        shareButton.addEventListener("click", handleShareButtonClick);
    } else {
        console.log("Web Share API is not supported.");
    }
});

function handleShareButtonClick() {
    navigator.share({
        title: "Explore Ricardo's Portfolio",
        text: "Discover more about me!",
        url: window.location.href
    })
        .then(() => console.log("Successfully shared!"))
        .catch((error) => console.error("Error sharing:", error));
}