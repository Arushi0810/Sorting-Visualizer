async function selection() {
    const special = document.getElementsByClassName("bars");
    for (let i = 0; i < special.length - 1 ; i++) {
        let k = i;
        special[i].style.background = "#267fc5";
      for(let j = i +1 ; j < special.length  ; j++){
           special[j].style.background="red";
        await new Promise(resolve => setTimeout(() => {resolve(), 100000}));
            if(parseInt(special[j].style.height) < parseInt(special[k].style.height)){
                if(k!== i){
                    special[k].style.background = "#11a3ae";
                }
                k = j;
            } 
            else{
                special[j].style.background = "#11a3ae";
            }              
        }
        await new Promise(resolve => setTimeout(() => {resolve(), 100000}));
        swap(special[i],special[k]);
        special[k].style.background = "#11a3ae"
        special[i].style.background = "#708d81";
    }    
    
    special[special.length].style.background = "#708d81"; 
  }
  document.getElementsByClassName("selection sort")[0].addEventListener("click", async function (){
    await selection();
});
  