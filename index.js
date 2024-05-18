let errorMessage = document.querySelector("#error");
let countingElem = document.querySelector("#CountElem");
let buttons = document.querySelectorAll("#btns");
let clearButton = document.querySelector("#clear");

let count = 0;
console.log("js");
for(let b of buttons){
    b.addEventListener("click", handle);
}
function handle(event){
    let tar = event.target;
    let val = tar.innerText;
    if(val.toLowerCase() === "increment"){
        clearButton.style.display = "inline-block";
        count++;
        countingElem.innerText = `Your Current Count is : ${count}`;
        errorMessage.innerText = ""; 
    }else if(val.toLowerCase() === "decrement"){
        if(count == 0){
            errorMessage.innerText = "Error : cannot go below 0";   
            errorMessage.style.color = "red";
        }
        else{
            count--;
            if(count <=0)  clearButton.style.display = "none"
            countingElem.innerHTML = `Your Current Count is : ${count}`;
        }
    }else{
        clearButton.style.display = "none";
        count = 0;
        countingElem.innerText = `Your Current Count is : ${count}`;
    }
    
}