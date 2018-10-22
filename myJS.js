// ADDITION LOGIC
// intialise accumulatingValue as 0
// accumulate button clicks into a number
// add currentValue to accumulatingValue when + clicked
let displayNumb = [];
let parsed = 0;
function func2(t){
  if(t.target.className == "numb"){
    makeNumber(t.target.innerHTML);
  } else if(t.target.id == "clear"){
    clearClick();
  } else if(t.target.id == "subtract"){
    subtractClick(t.target.innerHTML);
  } else if(t.target.id == "equals"){
    equalsClick();
  } else if(t.target.id == "add"){
    addClick(t.target.innerHTML);
  } else {
  console.log("you DIDN'T click a number");
  }
}

let accumulatingValue = 0;

function addClick(){
  accumulatingValue += parsed;
  console.log(accumulatingValue);
  // document.getElementById("display").innerHTML = accumulatingValue;
  displayNumb = [];
  parsed = 0;
}

function subtractClick(){
  accumulatingValue -= parsed;
  // document.getElementById("display").innerHTML = accumulatingValue;
  displayNumb = [];
  parsed = 0;
}

function clearClick(){
  displayNumb = [];
  parsed = 0;
  accumulatingValue = 0;
  document.getElementById("display").innerHTML = accumulatingValue;
}

function equalsClick(){
  document.getElementById("display").innerHTML = accumulatingValue;
}

document.getElementById("keyboard").addEventListener("click", func2, false);
