async function partition(special ,l , r){
    let i = l-1 ;
    //pivot
    special[r].style.background = "red";
    for(let j = l; j<=r-1;j++){
        //current index
        special[j].style.background = "yellow";
        await new Promise(resolve => { 
            setTimeout(() => { resolve('') }, 10); 
        }) ;

        if(parseInt(special[j].style.height)<parseInt(special[r].style.height)){
            i++;
            swap(special[i],special[j]);
            //swapping
            special[i].style.background = 'orange';
            special[j].style.background = 'orange';await new Promise(resolve => { 
                setTimeout(() => { resolve('') }, 10); 
            }) ;
        }else{
            //not less than pivot
            special[j].style.background = 'pink';
        }
    }
    i++;await new Promise(resolve => { 
        setTimeout(() => { resolve('') }, 10); 
    }) ;
    swap(special[i],special[r]);
    
    special[r].style.background = 'pink';
    special[i].style.background = 'green';
    await new Promise(resolve => { 
        setTimeout(() => { resolve('') }, 10); 
    }) ;
    for(let k = 0; k < special.length; k++){
        if(special[k].style.background != 'green')
            special[k].style.background = 'cyan';
    }
    return i;
}
async function quick( special, l ,r ) {
    let j ; 
    if(l<r){
        j = await partition(special,l,r);
        await quick(special,l,j-1);
        await quick(special,j+1,r);
    }else{
        if(l >= 0 && r >= 0 && l <special.length && r <special.length){
            special[r].style.background = 'green';
            special[l].style.background = 'green';
        }
  }
}
  document.getElementsByClassName("quick sort")[0].addEventListener("click", async function (){
    const special = document.getElementsByClassName("bars");
    let l = 0;
    let r = special.length - 1;
    await quick(special,l,r);
});