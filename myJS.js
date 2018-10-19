// function func(e){
//   if(e.target){
//     document.getElementById("display").innerHTML = e.target.innerHTML;
//   }
// }

// ADDITION LOGIC
// intialise accumulatingValue as 0
// accumulate button clicks into a number
// add currentValue to accumulatingValue when + clicked
let displayNumb = [];
function func2(t){
  console.log(t.target.innerHTML);
  console.log(typeof t.target.innerHTML);
  if(t.target.innerHTML.charCode > 47 || t.target.innerHTML.charCode < 58){
    console.log("you clicked a number");
    displayNumb.push(t.target.innerHTML);
    console.log(displayNumb);
  }
  console.log("you didn't click a number");
}

document.getElementById("keyboard").addEventListener("click", func2, false);
