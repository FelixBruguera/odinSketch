let grid = 16;
const body = document.querySelector("body");
const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");
const clear = document.querySelector("#clearButton");
const changeColor = document.querySelector("#changeColor");
const dark = document.querySelector("#darkeningButton");
const start = document.querySelector("#start");
const title = document.querySelector("#title");

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
    };
};

gridButton.addEventListener("mouseover", function () {
    for (let i = 1; i < 65;i++) {
        let option = document.createElement("option");
        option.textContent = i;
        gridButton.appendChild(option);
    };
},{once: true});

gridButton.addEventListener("change",function (e) {
    grid = e.target.value;
    removeDivs();
    makeSmallDivs();
    smallDivs = document.querySelectorAll(".smallDiv");
});
let color = "black";
function hover() {
    container.addEventListener("mouseover", function draw (e) {
        let childId = e.target.dataset.smallDiv;
        let child = document.querySelector(`[data-small-div= "${childId}"]`);
        child.style.backgroundColor = color;
        title.style.color = "lime";
    body.addEventListener("keydown", (e) => {
        if (e.code == 'KeyS') {
            title.style.color = "white";
            container.removeEventListener("mouseover",draw)
            start.textContent = "Click to start drawing";}
    })})};
container.addEventListener("click", () => {
    hover();
    start.textContent = "Press S to stop - Press D for Darkening";
});
changeColor.addEventListener("change", function (e) {
    return color = e.target.value;
});
body.addEventListener("keydown",function (e) {
    if (e.code == "KeyD") {
        let hex = changeColor.value.slice(1);
        let rgb = [];
        for (let c = 0;c < 5;c++) {
            let col = hex.slice(c,c+2);
            col = parseInt(col,16);
            rgb.push(col);
            c++;
        };
        let percent = 9;
            container.addEventListener("mouseover", function(e) {
                if (percent > -1) {
                    dark.style.backgroundColor = "lime";
                    let childId = e.target.dataset.smallDiv;
                    let child = document.querySelector(`[data-small-div= "${childId}"]`);
                    let newRgb = [];
                    rgb.forEach((element) => newRgb.push(element*(percent/10)));
                    child.style.backgroundColor = `rgb(${newRgb[0]},${newRgb[1]},${newRgb[2]})`;
                    percent--;
                }
                else {
                    dark.style.backgroundColor = "#34421E";
                    return "";
                };
                })}
});
clear.addEventListener("click",function () {
    smallDivs.forEach(element => {
        element.style.backgroundColor = "white";
    });
})