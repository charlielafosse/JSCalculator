function func(e){
  if(e.target){
    document.getElementById("display").innerHTML = e.target.innerHTML;
  }
}

document.getElementById("keyboard").addEventListener("click", func2, false);

// addition logic
// accumulate button clicks into a number
let displayNumb = [];
function func2(t){
  if(t.target.innerHTML.charCode > 47 || e.charCode < 58){
    console.log("you clicked a number");
    displayNumb.push(t.target.innerHTML);
    console.log(displayNumb);
  }
}
