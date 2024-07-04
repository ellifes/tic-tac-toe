let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0px";
    }
}

function checkWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for(let i = 0; i < winConditions.length; i++) {
        let b0 = boxes[winConditions[i][0]].innerHTML;
        let b1 = boxes[winConditions[i][1]].innerHTML;
        let b2 = boxes[winConditions[i][2]].innerHTML;

        if (b0 != "" && b0 == b1 && b1 == b2) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " Win";
            document.querySelector("#play-again").style.display = "inline";
            for (let k = 0; k < 3; k++) {
                boxes[winConditions[i][k]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][k]].style.style = "#000";
            
            }
        }
        

    }

}

function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false;
        })

        if (isDraw) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline";
            for (let k = 0; k < 3; k++) {
                boxes[winConditions[i][k]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][k]].style.style = "#000";
            
            }
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    
    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})