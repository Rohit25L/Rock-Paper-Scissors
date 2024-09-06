let container =document.querySelector(".contanier");
let images =document.querySelectorAll(".images1");
let scoreY =document.querySelector("#scoreY");
let scoreC =document.querySelector("#scoreC");
let win =document.querySelector("#winn");
let rock = document.querySelector("#rock");
let paper =document.querySelector("#paper");
let scissor=document.querySelector("#scissor");


let game =["rock","paper","scissor"];
let you =0;
let comp =0;


rock.addEventListener("click",()=>{
    // console.log(game[0])
    let a =Math.floor(Math.random()*3);
    console.log(a)
    if (game[a]==="scissor"){
        console.log("you win the game, you choose 'Rock' computer chose",game[a])
        you ++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="rock"){
        console.log("draw")
    }
    else{
        console.log("you loose! your is Rock and,computer chose",game[a])
        comp++;
        scoreC.innerHTML=`${comp}`
    }
    console.log(comp,you)
})
paper.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    console.log(a)
    if (game[a]==="rock"){
        console.log("you win the game, you choose 'paper' computer chose",game[a])
        you++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="paper"){
        console.log("draw")
    }
    else{
        console.log("you loose! your is Paper and,computer chose",game[a])
        comp++;
        scoreC.innerHTML=`${comp}`
    }
    console.log(comp,you)
})
scissor.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    console.log(a)
    if (game[a]==="paper"){
        console.log("you win the game, you choose 'scissor' computer chose",game[a])
        you++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="scissor"){
        console.log("draw")
    }
    else{
        console.log("you loose! your is scissor and,computer chose",game[a])
        comp++;
        scoreC.innerHTML=`${comp}`
    }
    console.log(comp,you)
})