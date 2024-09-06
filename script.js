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
        win.innerHTML=`you win the game, you choose 'Rock' computer chose ,${game[a]}`
        console.log("you win the game, you choose 'Rock' computer chose",game[a])
        win.classList.add("win-color")
        win.classList.remove("lose-color")
        you ++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="rock"){
        console.log("draw")
        win.classList.remove("win-color")
        win.classList.remove("lose-color")
        win.innerHTML=`Its a draw , computer picked ${game[a]}`
    }
    else{
        console.log("you loose! your is Rock and,computer chose",game[a])
        win.innerHTML=`you loose! your is Rock and,computer chose,${game[a]}`
        win.classList.add("lose-color")
        win.classList.remove("win-color")
        comp++;
        scoreC.innerHTML=`${comp}`
    }
    console.log(comp,you)
})
paper.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    console.log(a)
    if (game[a]==="rock"){
        win.innerHTML=`you win the game, you choose 'paper' computer chose ,${game[a]}`
        win.classList.add("win-color")
        win.classList.remove("lose-color")
        console.log("you win the game, you choose 'paper' computer chose",game[a])
        you++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="paper"){
        console.log("draw")
        win.classList.remove("win-color")
        win.classList.remove("lose-color")
        win.innerHTML=`Its a draw , computer picked ${game[a]}`
    }
    else{
        console.log("you loose! your is Paper and,computer chose",game[a])
        win.innerHTML=`you loose! your is Paper and,computer chose,${game[a]}`
        win.classList.add("lose-color")
        win.classList.remove("win-color")
        comp++;
        scoreC.innerHTML=`${comp}`
    }
    console.log(comp,you)
})
scissor.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    console.log(a)
    if (game[a]==="paper"){
        win.innerHTML=`you win the game, you choose 'scissor' computer chose ,${game[a]}`
        win.classList.add("win-color")
        win.classList.remove("lose-color")
        console.log("you win the game, you choose 'scissor' computer chose",game[a])
        you++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="scissor"){
        console.log("draw")
        win.classList.remove("win-color")
        win.classList.remove("lose-color")
        win.innerHTML=`Its a draw , computer picked ${game[a]}`
    }
    else{
        console.log("you loose! your is scissor and,computer chose",game[a])
        win.innerHTML=`you loose! your is scissor and,computer chose,${game[a]}`
        win.classList.add("lose-color")
        win.classList.remove("win-color")
        comp++;
        scoreC.innerHTML=`${comp}`
    }
    console.log(comp,you)
})