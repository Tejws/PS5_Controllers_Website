const { name } = require("ejs");

const openShopping =document.querySelector(".Shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quanity = document.querySelector(".quantity");

openShopping.addEventListener("click",()=>{
    body.classList.add("active")
})
closeShopping.addEventListener("click",()=> {
    body.classList.remove("active")
})

let products =[
        {
            id:1,
            name:"PRODUCT 1",
            images:"shoe1.png",
            price:3000
        },
        {
            id:2,
            name:"PRODUCT 2",
            images:"shoes.png",
            price:4000
        },
        {
            id:3,
            name:"PRODUCT 3",
            images:"shoes.png",
            price:2000
        },
        {
            id:4,
            name:"PRODUCT 4",
            images:"shoes.png",
            price:2990
        },
        {
            id:5,
            name:"PRODUCT 5",
            images:"shoes.png",
            price:1000
        },
        {
            id:6,
            name:"PRODUCT 6",
            images:"shoes.png",
            price:2030
        },

    ]

    let listCards = [];

    const initApp = () =>{
        products.forEach((value,key)=>{
            let newDiv = document.createElement("div");
            newDiv.classList.add("item");
            newDiv.innerHTML = ` <img src ="img/${value.images}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})"Add to card</button>`
            list.appendChild(newDiv)
        })
    }
    initApp()