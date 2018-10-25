// problem - allow user to press MINUS once after an operator!!! to add/multiply/divide by a minus numb...

// problem - contain long numbers within the display...

// make trees disappear at break point (or shrink?)

let calcArray = [];
let displayNumb = [];
let parsed = 0;
let operatorLastClick = false;
let operatorThenMinus = false;

function makeNumber(key){
  displayNumb.push(key);
  document.getElementById("display").innerHTML= displayNumb.join("");
  parsed = parseFloat(displayNumb.join(""), 10);
  operatorLastClick == false;
}

function operatorClick(clicked){
  if(operatorLastClick == false){
    calcArray.push(parsed);
    calcArray.push(clicked.id);
    document.getElementById("display").innerHTML = clicked.innerHTML;
    displayNumb = [];
    operatorLastClick = true;
  } else if(operatorLastClick == true){
      console.log("second operator click");
      if(clicked.innerHTML == "-" && operatorThenMinus == false){
        let operatorThenMinus = true;
        console.log("plus, div or multiply followed by minus");
        makeNumber(clicked.innerHTML);
        operatorLastClick == true;
        console.log(operatorLastClick);
        console.log(operatorThenMinus);
      } else if (operatorThenMinus = true || operatorLastClick = true) {
        console.log("stop bogus clicking!");
      }
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
  } else if(t.target.id == "clear"){
    clearClick();
  } else if(t.target.id == "equals"){
    equalsClick();
  } else if(t.target.className == "operator"){
    operatorClick(t.target);
  } else {
  console.log("you didn't click a button");
  }
}

document.getElementById("keyboard").addEventListener("click", myClick, false);
