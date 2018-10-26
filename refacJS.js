let calcArray = [];
let displayNumb = [];
let parsed = 0;
let operatorLastClick = false;

function makeNumber(key){
  displayNumb.push(key);
  document.getElementById("display").innerHTML= displayNumb.join("");
  parsed = parseFloat(displayNumb.join(""), 10);
  operatorLastClick = false;
}

function operatorClick(clicked){
  if(operatorLastClick == false){
    console.log("normal operator function")
    operatorLastClick = true;
    calcArray.push(parsed);
    calcArray.push(clicked.id);
    document.getElementById("display").innerHTML = clicked.innerHTML;
    displayNumb = [];
  } else {
    console.log("double operator click");
  }
}

function subtractClick(clicked){
  if(operatorLastClick == true || parsed == 0){
    if(displayNumb.length == 1 && displayNumb[0] == "-"){
      console.log("stop hitting minus");
    } else {
      console.log("minus as a negative number");
      displayNumb.push(clicked.innerHTML);
      document.getElementById("display").innerHTML= displayNumb.join("");
      parsed = parseFloat(displayNumb.join(""), 10);
    }
  } else {
    console.log("minus as an operator");
    calcArray.push(parsed);
    calcArray.push(clicked.id);
    document.getElementById("display").innerHTML = clicked.innerHTML;
    displayNumb = [];
    operatorLastClick = true;
  }
}

function clearClick(){
  displayNumb = [];
  parsed = 0;
  document.getElementById("display").innerHTML = 0;
  calcArray = [];
  operatorLastClick = false;
}

function equalsClick(){
  calcArray.push(parsed);
  console.log(calcArray);
  let result = calcArray[0];
  for(var i = 1; i < calcArray.length; i++){
    if(typeof calcArray[i] == "string"){
      continue;
    }
    if(calcArray[i-1] == "subtract"){
      result = (result - calcArray[i]);
    } else if (calcArray[i-1] == "add"){
      result = (result + calcArray[i]);
    } else if (calcArray[i-1] == "divide"){
      result = (result / calcArray[i]);
    } else if (calcArray[i-1] == "multiply"){
      result = (result * calcArray[i]);
    }
  }
  console.log(result);
  document.getElementById("display").innerHTML = result;
  parsed = result;
  calcArray = [];
  displayNumb = [];
  operatorLastClick = false;
}

function myClick(t){
  if(t.target.className == "numb"){
    makeNumber(t.target.innerHTML);
    operatorLastClick = false;
  } else if(t.target.id == "clear"){
    clearClick();
  } else if(t.target.id == "equals"){
    equalsClick();
  } else if(t.target.className == "operator"){
    operatorClick(t.target);
  } else if(t.target.id == "subtract"){
    subtractClick(t.target);
  } else {
  console.log("you didn't click a button");
  }
}

document.getElementById("keyboard").addEventListener("click", myClick, false);
