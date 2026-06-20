// Event Listners
// addEventlistner(event,callback,{option})

// there are multiple type of events
// 1.Mouse event
// 2. Pointer event
// 3. Keyboard event
// 4. Inputs event
// 5. Submit event


// const button = document.querySelector("button");
// button.addEventListener("click",(events)=>{
//     console.log(events)
// })
// abhi milega pointer event


// const button = document.querySelector("button");
// button.addEventListener("dblclick",(events)=>{
//     console.log(events);
// })
// ab milega mouse event


// const button = document.querySelector("button");
// button.addEventListener("mouseleave",(events)=>{
//     console.log(events)
// })
// ab milega mouse event



// window.addEventListener("keypress",(events)=>{
//     console.log(events)
// })
// keyBoard event ayega


// window.addEventListener("keydown",(events)=>{
//     console.log(events)
// })
// keyBoard event ayega


// window.addEventListener("keyup",(events)=>{
//     console.log(events)
// })
// keyBoard event ayega


// EVENT PROPOGATION {EVENT TRAVERSAL}


// const button = document.querySelector("button");
// const main = document.querySelector("main");
// const div = document.querySelector("div");
// const body = document.body;



// CAPTURE PROCESS

// button.addEventListener("click",(events)=>{
//     console.log("button triggered...")
// },
// {capture:true}
// )


// body.addEventListener("click",(events)=>{
//     console.log("body triggered...")
// },{capture:true}
// )


// div.addEventListener("click",(events)=>{
//     console.log("div triggered...")
// },{capture:true}
// )


// main.addEventListener("click",(events)=>{
//     console.log("main triggered...")
// },{capture:true}
// )

// ye sab bubbling process mein humko dikhte hai yaani jo target ho rkha hai wha se upar window tk jayega 
// agr hume window se target tk chaiye toh capture: true krna hoga kyuki by default ye false hota hai

// BUBBLING PROCESS

// button.addEventListener("click",(events)=>{
//     console.log("button triggered...")
// })


// body.addEventListener("click",(events)=>{
//     console.log("body triggered...")
// })


// div.addEventListener("click",(events)=>{
//     console.log("div triggered...")
// })


// main.addEventListener("click",(events)=>{
//     console.log("main triggered...")
// })


// SUBMIT EVENTS

// const form = document.querySelector('form');
// const inp1 = document.querySelector("#name");
// const inp2 = document.querySelector("#email");

// form.addEventListener('submit',(events)=>{
//     events.preventDefault()

//     // console.log(name.value);
//     // console.log(email.value);

//     // console.log(events.target[0].value);
//     // console.log(events.target[1].value);

//     let name = inp1.value;
//     let email = inp2.value;
//     console.log(name,email);

//     // inputs ko jb automatic khaali krna ho
//     // inp1 = "";
//     // inp2 = "";

//     // better option
//     form.reset();
    

// })
// jo ye form hai ye by default browser ko reload krwati hai.
// preventDfault() page ko reload hone se rokti hai



// ADD TO ARRAY AND DISPLAY IN UI 
const form = document.querySelector('form');
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");


let usersData = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "dob": "1998-04-12"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "image": "https://randomuser.me/api/portraits/women/22.jpg",
    "dob": "1995-09-28"
  },
  {
    "id": 3,
    "name": "Rahul Mehta",
    "email": "rahul.mehta@example.com",
    "image": "https://randomuser.me/api/portraits/men/35.jpg",
    "dob": "2000-01-15"
  },
  {
    "id": 4,
    "name": "Sneha Kapoor",
    "email": "sneha.kapoor@example.com",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "dob": "1997-07-03"
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "email": "vikram.singh@example.com",
    "image": "https://randomuser.me/api/portraits/men/58.jpg",
    "dob": "1993-12-19"
  }
];

const ui = ()=>{
        users.innerHTML = "";

    usersData.forEach((elem,index)=>{
    users.innerHTML +=`<div class="user_card">
                        <div class="img_box">
                        <img src="${elem.image}" alt="image here">
                            </div>
                        <div class="text">
                         <h3>Name = ${elem.name}</h3>
                         <p>Email = ${elem.email}</p>
                            </div>
                            <div class="actions">
                            <button id="edit">Edit</button>
                            <button onclick="deleteCard(${index})" id="delete">Delete</button>
                            </div>
                            </div>`
});
};

ui(); // starting ke 5 cards show kr diye


form.addEventListener("submit",(events)=>{
    events.preventDefault();  // page ko reload hone se rokti hai
    let name = inp1.value;
    let email = inp2.value;
    let imageUrl = url.value; 

    if(name.trim() === "" && email.trim() === "" && image.trim() === "") return ;

    // users.innerHTML +=  `<div class="user_card">
    //                     <div class="img_box">
    //                     <img src="${imageUrl}" alt="image here">
    //                         </div>
    //                     <div class="text">
    //                      <h3>Name = ${name}</h3>
    //                      <p>Email = ${email}</p>
    //                         </div>
    //                         </div>`
// A GOOD CODER DOES NOT REPEAT IT SELF DRY FOLLOW KRTA HAI

    usersData.push({
        name:name,
        email:email,
        image: imageUrl
    });

    ui(); // humne jb khud se ui mein add kra 


    form.reset();  // inputs ko jb automatic khaali krna ho
});



let deleteCard = (index)=>{
    usersData.splice(index,1);
    ui(); // delete krne ke baad ui mein changes show kra
}