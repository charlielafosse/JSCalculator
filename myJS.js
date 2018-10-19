function func(e){
  if(e.target){
    alert(e.target.innerHTML);
  }
}

document.querySelector("section").addEventListener("click", func, false);
