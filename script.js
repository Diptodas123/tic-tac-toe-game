const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector("#msg");
const newGameBtn = document.querySelector("#new-btn");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

const showWinner = (winner) => {
    disableBoxes();
    msg.innerText = "Player " + winner + " is the winner";
    msgContainer.hidden = false;
    msgContainer.style.display = 'flex';
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);

            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        box.innerText = turnO ? 'O' : 'X';
        turnO = turnO ? false : true;
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    enableBoxes();
    turnO = true;
    msgContainer.hidden = true;
    msgContainer.style.display = 'none';
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);