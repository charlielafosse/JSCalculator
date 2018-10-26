// problem, if hit minus loads, and then a number, cant add other operators...
// strange, as operatorLastClick should be at false after the makeNumber func.
 // Maybe move the two booleans inside up to top??
 // cant start an equation with a minus number


// problem - contain long numbers within the display...

// make trees disappear at break point (or shrink?)

let calcArray = [];
let displayNumb = [];
let parsed = 0;
let operatorLastClick = false;
let operatorThenMinus = false;
let beginning = true;

function makeNumber(key){
  // operatorLastClick == false;
  // operatorThenMinus == false;
  displayNumb.push(key);
  document.getElementById("display").innerHTML= displayNumb.join("");
  parsed = parseFloat(displayNumb.join(""), 10);
  operatorLastClick = false;
}

function operatorClick(clicked){
  if(beginning == true && clicked.innerHTML == "-"){
    console.log("negative number at beginning");
    if(clicked.innerHTML == "-" && operatorThenMinus == false){
      operatorThenMinus = true;
      console.log("plus, div or multiply followed by minus");
      makeNumber(clicked.innerHTML);
      // operatorThenMinus = true;
      operatorLastClick == true;
      console.log(operatorLastClick);
      console.log(operatorThenMinus);
    } else if(operatorThenMinus == true || operatorLastClick == true) {
      console.log("stop bogus clicking!");
    }
    // maybe it fulfils other if statements after it executes this one?
    // PROBLEM - minus now works as subtract, but negative number at beg. no work
  } else if(operatorLastClick == false){
    console.log("minus as subtract (NOT neg numb)");
    calcArray.push(parsed);
    calcArray.push(clicked.id);
    document.getElementById("display").innerHTML = clicked.innerHTML;
    displayNumb = [];
    // this is the problem here ^. Sets displaynumb to empty...
    // write an if statement to check if there's something that comes before?
    // actually the problem is when you hit minus, calcArray = [0, "subtract"]
    operatorLastClick = true;
  } else if(operatorLastClick == true){
      console.log("second operator click");
      if(clicked.innerHTML == "-" && operatorThenMinus == false){
        operatorThenMinus = true;
        console.log("plus, div or multiply followed by minus");
        makeNumber(clicked.innerHTML);
        // operatorThenMinus = true;
        operatorLastClick == true;
        console.log(operatorLastClick);
        console.log(operatorThenMinus);
      } else if(operatorThenMinus == true || operatorLastClick == true) {
        console.log("stop bogus clicking!");
      }
    }
}

function clearClick(){
  beginning = true;
  displayNumb = [];
  parsed = 0;
  document.getElementById("display").innerHTML = 0;
  calcArray = [];
  operatorLastClick = false;
  operatorThenMinus = false;
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
  operatorThenMinus = false;
}

function myClick(t){
  if(t.target.className == "numb"){
    operatorLastClick == false;
    operatorThenMinus == false;
    beginning = false;
    makeNumber(t.target.innerHTML);
  } else if(t.target.id == "clear"){
    clearClick();
  } else if(t.target.id == "equals"){
    beginning = false;
    equalsClick();
  } else if(t.target.className == "operator"){
    beginning = false;
    operatorClick(t.target);
  } else {
  console.log("you didn't click a button");
  }
}

document.getElementById("keyboard").addEventListener("click", myClick, false);


// old code
// if(calcArray = [] && clicked.innerHTML == "-"){
//   console.log("beginning with a negative numb");
//   if(clicked.innerHTML == "-" && operatorThenMinus == false){
//     operatorThenMinus = true;
//     console.log("plus, div or multiply followed by minus");
//     makeNumber(clicked.innerHTML);
//     // operatorThenMinus = true;
//     operatorLastClick == true;
//     console.log(operatorLastClick);
//     console.log(operatorThenMinus);
// } else
