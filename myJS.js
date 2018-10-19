function func(e){
  if(e.target){
    alert(e.target.innerHTML);
  }
}

document.getElementById("keyboard").addEventListener("click", func, false);
