var bubbleUp = document.querySelector(".up");
var bubbleDown = document.querySelector(".down");
var page = document.querySelector(".page");
var form = document.querySelector(".form");

function onClick(){
  bubbleUp.classList.remove("deflate-up");
  bubbleDown.classList.remove("deflate-down");
  bubbleUp.classList.add("inflate");
  bubbleDown.classList.add("inflate");
  form.classList.remove("move-down");
  setTimeout(function(){
    page.classList.remove("hide");
    form.classList.add("move-up");
  }, 2000);
}

function onClose(){
  form.classList.remove("move-up");
  form.classList.add("move-down");
  setTimeout(function(){
    page.classList.add("hide");
    bubbleUp.classList.remove("inflate");
    bubbleDown.classList.remove("inflate");
    bubbleUp.classList.add("deflate-up");
    bubbleDown.classList.add("deflate-down");
  }, 1000);
}
