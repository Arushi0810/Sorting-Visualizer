async function bubble() {
  const special = document.getElementsByClassName("bars");
  for (let i = 0; i < special.length - 1 ; i++) {
    for(let j = 0 ; j < special.length - i -1  ; j++){
     
          if(parseInt(special[j].style.height) > parseInt(special[j+1].style.height)){
            special[j].style.background="#267fc5";
            special[j+1].style.background="#267fc5";
            await new Promise(resolve => setTimeout(() => {resolve(), 100000}));
              swap(special[j],special[j+1]);
          }
          special[j].style.background="#11a3ae";
          special[j+1].style.background = "#11a3ae";
      } 
      
      special[special.length-1-i].style.background = '#708d81';
    }    
    special[0].style.background = "#708d81";
}
document.getElementsByClassName("bubble sort")[0].addEventListener("click", async function (){
  await bubble();
});
