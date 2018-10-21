// ADDITION LOGIC
// intialise accumulatingValue as 0
// accumulate button clicks into a number
// add currentValue to accumulatingValue when + clicked
let displayNumb = [];
let parsed = 0;
function func2(t){
  console.log(t.target.innerHTML);
  if(t.target.className == "numb"){
    displayNumb.push(t.target.innerHTML);
    parsed = parseInt(displayNumb.join(""), 10);
    console.log(parsed);
    document.getElementById("display").innerHTML = parsed;
  } else {
  console.log("you DIDN'T click a number");
  }
}

document.getElementById("keyboard").addEventListener("click", func2, false);
