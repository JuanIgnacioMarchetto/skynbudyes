window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);
    var dress=document.getElementById("clothes");
    if(state.i===0){
    dress.setAttribute("class","dress1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    dress.setAttribute("class","dress2");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===2){
    dress.setAttribute("class","dress3");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===3){
    dress.setAttribute("class","dress4");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===4){
    dress.setAttribute("class","dress5");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===5){
    dress.setAttribute("class","dress6");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===6){
    dress.setAttribute("class","dress7");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===7){
    dress.setAttribute("class","dress8");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===8){
    dress.setAttribute("class","dress9");
         state.i++;
         console.log(state.i);
    }
  else
     if(state.i===9){
    dress.setAttribute("class","dress10");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===10){
    dress.setAttribute("class","dress11");
         state.i=0;
    }
    
}

function nextaccessory()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("accessory");
    if(state.j===0){
    shoe.setAttribute("class","accessory1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","accessory2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","accessory3");
         state.j=0;
    }
    
}

function nexthair()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairf=document.getElementById("hairfront");
    var hairb=document.getElementById("hairback");
    hairb.setAttribute("class","hairbackdefault");
    
    
    if(state.k===0){
    hairf.setAttribute("class","hairfront1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hairf.setAttribute("class","hairfront2");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===2){
    hairf.setAttribute("class","hairfront3");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===3){
    hairf.setAttribute("class","hairfront4");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===4){
    hairf.setAttribute("class","hairfront5");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===5){
    hairf.setAttribute("class","hairfront6");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===6){
    hairf.setAttribute("class","hairfront7");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===7){
    hairf.setAttribute("class","hairfront8");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===8){
    hairf.setAttribute("class","hairfront9");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===9){
       $("#hairfront").addClass("hairfront10");
       $("#hairback").addClass("hairback10");
         state.k++;
         console.log(state.k);
     }
       else
     if(state.k===10){
    hairf.setAttribute("class","hairfront11");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===11){
    hairf.setAttribute("class","hairfront12");
         state.k++;
    }
    else
     if(state.k===12){
    hairf.setAttribute("class","hairfront13");
         state.k=0;
    }
}
