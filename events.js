var daisy = document.getElementById("Daisy")
console.log("daisy", daisy);

var dogFunction = function(){
  return console.log("invoked dog function")
}

daisy.addEventListener("click", () => console.log("hiiiii"))

