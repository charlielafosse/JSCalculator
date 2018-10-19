function func(e){
  if(e.target){
    document.getElementById("display").innerHTML = e.target.innerHTML;
  }
}

document.getElementById("keyboard").addEventListener("click", func, false);
