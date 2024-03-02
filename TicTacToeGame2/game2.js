let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-display");
let msg = document.querySelector("p");
let turn=true;
let count=0;
const WinPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn){
            box.innerText="O";
            box.style.color="blue";
            turn=false;
        }else{
            box.innerText="X";
            box.style.color="red";
            turn=true;
        }
        box.disabled = true; 
        count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});
const checkWinner=()=>{
    for(let pattern of WinPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is '${winner}'`;
    msg.style.color="#994c01";
    msgContainer.classList.remove("hide");
    disableBtn();
};
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}
const resetGame=()=>{
    turn=true;
    count=0;
    enableBtn();
};
const gameDraw = () => {
    msg.innerText = `Game was a Draw, Please Try Again!`;
    msgContainer.classList.remove("hide");
    disableBtn();
  };
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
