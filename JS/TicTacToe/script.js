let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let winnerText = document.querySelector(".winner")

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#2a9d8f";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#00798c";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
    for(let box of boxes){
        box.disabled = false;
        box.style.backgroundColor = "white";
        box.innerText = "";
        turnO = true;
    }
    winnerText.classList.add("hide")
}); 




const showWinner = (winner) => {
    winnerText.innerText = `Winner is ${winner}`
    winnerText.classList.remove("hide")
}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if (pos1 != "" && pos2 != "" && pos3 != "") {
        if (pos1 == pos2 && pos2 == pos3) {
            disableBoxes();
            console.log("Winner");
            boxes[pattern[0]].style.backgroundColor = "#fffd8d";
            boxes[pattern[1]].style.backgroundColor = "#fffd8d";
            boxes[pattern[2]].style.backgroundColor = "#fffd8d";
            showWinner(pos1);
        }
      }
    } 
};