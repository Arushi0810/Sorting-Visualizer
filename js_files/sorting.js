function swap(el1, el2) {
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
createBars();
function createBars() {
   const heights = [];
    for (let index = 0; index < 100; index++) {
        heights[index] = Math.floor(100 * Math.random());
    }
    for (let index = 0; index < 100; index++) {
        var bar = document.createElement("DIV");              
       document.getElementById("bar-cont").appendChild(bar); 
       var element = document.getElementById("bar-cont").getElementsByTagName("div")[index];
    element.classList.add("bars");
    }
    
    
    var bars = document.getElementsByClassName("bars");
    for (let index = 0; index < heights.length; index++) {
        bars[index].style.height = (5*heights[index])+"px";
    }  
}

document.getElementsByClassName("new array")[0].addEventListener("click", createBars);


