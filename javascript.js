
// --- DOM ELEMENTS ---
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("button");

function generateDivs(amount) {

    dimension = 100 / amount;

    for(let i = 0; i < amount; i++){
        for(let j = 0; j < amount; j++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div");

            gridDiv.style.width = `${dimension}%`;
            gridDiv.style.height = `auto`;
            
            gridContainer.appendChild(gridDiv);

            gridDiv.addEventListener("mouseover", (e) => {
                if (e.buttons === 1) {
                    gridDiv.style.backgroundColor = "blue";
                }
            });
            
        }
    }
}

resetBtn.addEventListener("click", () => {
    let userInput = prompt("Enter the number of squares per side for the new grid (max 100)");

    if (userInput > 100) {
        userInput = 100;
    } else if (userInput > 16) {
        usedInput = 16;
    };
    
    gridContainer.innerHTML = ""

    generateDivs(userInput)
    
});

generateDivs(16);