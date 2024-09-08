let container =document.querySelector(".contanier");
let images =document.querySelectorAll(".images1");
let scoreY =document.querySelector("#scoreY");
let scoreC =document.querySelector("#scoreC");
let win =document.querySelector("#winn");
let rock = document.querySelector("#rock");
let paper =document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let compImg1 = document.querySelector("#paper1");
let compImg2 = document.querySelector("#rock1");
let compImg3 = document.querySelector("#scissor1");

let game =["rock","paper","scissor"];
let you =0;
let comp =0;
console.log(compImg1)


rock.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    compChoice(a);
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
})
paper.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    compChoice(a);
    if (game[a]==="rock"){
        win.innerHTML=`you win the game, you choose 'paper' computer chose ,${game[a]}`
        win.classList.add("win-color")
        win.classList.remove("lose-color")
        console.log("you win the game, you choose 'paper' computer chose",game[a])
        you++;
        scoreY.innerHTML=`${you}`
    }
    else if (game[a]==="paper"){
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
})
scissor.addEventListener("click",()=>{
    let a =Math.floor(Math.random()*3);
    compChoice(a);
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
})
 compChoice =(max)=>{
        if (max==0){
        compImg2.classList.add("comp-brcolor")
        compImg1.classList.remove("comp-brcolor")
        compImg3.classList.remove("comp-brcolor")
    }  else if (max==1){
            compImg2.classList.remove("comp-brcolor")
            compImg1.classList.add("comp-brcolor")
            compImg3.classList.remove("comp-brcolor")
        } else if (max==2){
            compImg2.classList.remove("comp-brcolor")
            compImg1.classList.remove("comp-brcolor")
            compImg3.classList.add("comp-brcolor")
        } 
}