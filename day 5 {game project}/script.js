//EVENT DELEGATION
// WHEN WE HAVE LOT OF ITEMS OF SAME TYPE THEN WE SIMPLY DO THIS METHOD 
// let main = document.querySelector('main');

// main.addEventListener('click',(event)=>{
//     console.log(event.target)
// });


// MINI PROJECT

let main = document.querySelector("main");
let button = document.querySelector("button") 
// const box = document.querySelector(".box");

const box = document.createElement('div');
box.classList.add('box')

const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score")

const gameOver = document.querySelector('#overlay')

    let time = 0;
    let interval;
    let score = 0;

    const randomColor = ()=>{
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        return `rgb(${r},${g},${b})`;
    }

    const randomBox = ()=>{

        box.style.backgroundColor = randomColor();

        main.append(box);

        // for parent height 
        let mainHeight = main.clientHeight - box.offsetHeight;
        // for parent width
        let mainWidth = main.clientWidth - box.offsetWidth;

        let randomY = Math.random ()* mainHeight;
        let randomX = Math.random ()* mainWidth;

        box.style.top = `${randomY}px`;
        box.style.left = `${randomX}px`;
    };

button.addEventListener("click", ()=>{

    clearInterval(interval); // ab multiple click krne pe next interval nhi chlega

    interval = setInterval(()=> {
        randomBox();
        time += 1;
        timer.textContent = time;
    },1000);

    setTimeout(()=>{
        clearInterval(interval);
        gameOver.style.display = 'flex';
    },10000)

});



box.addEventListener('click' , ()=>{
    score +=1;
    scoree.textContent = score
})