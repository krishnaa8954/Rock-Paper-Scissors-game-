let  userscore = 0;
let  computerscore  = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
let userscorepara = document.querySelector("#user");
let compscorepara = document.querySelector("#Computer");
let gencomputerchoice = ()=>{
    const option = ["rock","paper","scissors"];
    const rdnid =    Math.floor(Math.random()*3);
        return option[rdnid];
}
const draw =()=>{
    msg.innerHTML="Game Draw . Play again.";
     msg.style.backgroundColor="#081b31";
}
const showwinner =(userwin , userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML=userscore;
      msg.innerHTML=`🎉 🎊 You win!!!!  Your ${userchoice} beats ${compchoice}` ;
      msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        compscorepara.innerHTML=computerscore;
        msg.innerHTML=`😞 You lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = ( userchoice)=>{ 
    console.log("user choice = ", userchoice);
    const compchoice= gencomputerchoice();
    console.log("comp choice = ", compchoice);
    if(userchoice === compchoice){
        draw();
    } else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
             userwin=compchoice==="scissors"?false:true;
        }
        else{
             userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin ,userchoice,compchoice);
    }

}
choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userchoice= choice.getAttribute("id")
        playgame(userchoice);
    });
});
