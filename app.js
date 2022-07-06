// VARIABLES
const share = document.querySelector(".share-container");

function shareFunc() {
    if (share.style.display === "none") {
        share.style.display = "flex";
    } else {
        share.style.display = "none";
    }
}
