const bulb = document.querySelector(".bulb");
const button = document.querySelector("button");

// let flag =true;
// button.addEventListener("click",()=>{
//     if(flag){
//     bulb.style.backgroundColor = "yellow";
//     button.textContent = "OFF";
//     flag= false;
//     }else{
//         bulb.style.backgroundColor = "transparent";
//         button.textContent = "ON"
//         flag=true;
//     }
// });

// doing this with class
button.addEventListener("click",()=>{
   if(bulb.classList.toggle("lightup")){
    button.textContent = "off";
   }else{
    button.textContent="ON"
   }

});


