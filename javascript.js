
// --- DOM ELEMENTS ---
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("button");

// LOGIC
function generateDivs(amount) {

    let dimension = 100 / amount;

    for(let i = 0; i < amount; i++){
        for(let j = 0; j < amount; j++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div");

            gridDiv.style.width = `${dimension}%`;
            gridDiv.style.opacity = 0;
            gridContainer.appendChild(gridDiv);

            gridDiv.addEventListener("mouseover", (e) => {
                if (e.buttons === 1) {
                    let currentOpacity = Number(gridDiv.style.opacity);

                    if (currentOpacity < 1) {
                    gridDiv.style.opacity = currentOpacity + 0.1;
                    gridDiv.style.backgroundColor = "black";
                    }
                }
            });
        }
    }
}

generateDivs(16);

// EVENT LISTENERS
resetBtn.addEventListener("click", () => {
    let userInput = prompt("Enter the number of squares per side for the new grid (max 100)");

    if (userInput > 100) {
        userInput = 100;
    } else if (userInput < 16) {
        userInput = 16;
    };

    gridContainer.innerHTML = ""

    generateDivs(userInput)
    
});