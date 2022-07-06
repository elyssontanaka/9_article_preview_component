// VARIABLES
const share = document.querySelector(".share-container");
const shareBtn = document.querySelector(".share-icon");
const shareIcon = document.querySelector(".fa-share");

function shareFunc() {
    if (share.style.display === "flex") {
        share.style.display = "none";
        shareBtn.style.background = "var(--light-grayish-blue)";
        shareIcon.style.color = "var(--desaturated-dark-blue)";
    } else {
        share.style.display = "flex";
        shareBtn.style.background = "var(--desaturated-dark-blue)";
        shareIcon.style.color = "var(--light-grayish-blue)";
    }
}
