
// --- DOM ELEMENTS ---
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("button");


for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        
        gridContainer.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.style.backgroundColor = "blue";
        });
        
    }
}

resetBtn.addEventListener("click", () => {
    const divs = document.querySelectorAll(".grid-div");
    
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});