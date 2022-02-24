async function insertion() {
    const special = document.getElementsByClassName("bars");
    special[0].style.background = "#708d81";
    for (let i = 1; i < special.length ; i++) {
        let j = i - 1 ;
        let x = special[i].style.height;
        special[i].style.background = "#267fc5";
        await new Promise(resolve => setTimeout(() => {resolve(), 100000}));
        while( j > -1 && parseInt(special[j].style.height)>parseInt(x)){
          special[j].style.background="#267fc5";
          special[j + 1].style.height = special[j].style.height;
          j--;
          await new Promise(resolve => setTimeout(() => {resolve(), 100000}));
         for(let t = 0 ; t < i ; t++){
           special[t].style.background = "#708d81";
          }
        }
        special[j+1].style.height = x;
        special[special.length - 1].style.background = "#708d81";
     }
  
}
  document.getElementsByClassName("insertion sort")[0].addEventListener("click", async function (){
    await insertion();
  });
