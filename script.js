let grid = 16;
const body = document.querySelector("body");
const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");

function makeSmallDivs () {
        for (let i = 0; i < grid*grid;i++) {
        let smallDiv = document.createElement("div");
        smallDiv.classList.add("smallDiv");
        smallDiv.dataset.smallDiv = i;
        let flexbasis = 100/(grid);
        container.style.flexBasis = flexbasis;
        smallDiv.style.height = `${100/grid}%`;
        smallDiv.style.width = `${100/grid}%`;
        container.appendChild(smallDiv);
        }
};
makeSmallDivs();
let smallDivs = document.querySelectorAll(".smallDiv");

function removeDivs() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

gridButton.addEventListener("click", function () {
    newGrid = prompt("Squares per side (Max 100)");
    grid = newGrid;
    removeDivs();
    makeSmallDivs();

});
smallDivs = document.querySelectorAll(".smallDiv");
function hover() {
    body.addEventListener("mouseover", function (e) {
        let mainId = e.target.parentElement.dataset.mainDiv;
        let childId = e.target.dataset.smallDiv;
        console.log(mainId);
        console.log(childId);
        let child = document.querySelector(`[data-small-div= "${childId}"]`);
        child.style.backgroundColor = "black";
})};
body.addEventListener("click",hover);