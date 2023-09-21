
const container = document.querySelector("#container");
for (let i = 0; i < 16;i++) {
    let div = document.createElement("div");
    div.classList.add("divs");
    div.dataset.mainDiv = i;
    container.appendChild(div);
}
const divs = document.querySelectorAll(".divs");
for (const parent of divs) {
    for (let i = 0; i < 16;i++) {
    let smallDiv = document.createElement("div");
    smallDiv.classList.add("smallDiv");
    smallDiv.dataset.smallDiv = i;
    parent.appendChild(smallDiv);
    }
};
const body = document.querySelector("body");
function hover() {
    body.addEventListener("mouseover", function (e) {
        let mainId = e.target.parentElement.dataset.mainDiv;
        let childId = e.target.dataset.smallDiv;
        console.log(mainId);
        console.log(childId);
        let child = document.querySelector(`[data-main-div ="${mainId}"] > [data-small-div= "${childId}"]`);
        console.log(child);
        child.style.cssText = "background-color: black";
})}
body.addEventListener("click",hover);