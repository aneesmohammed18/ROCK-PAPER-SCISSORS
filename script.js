
let userinput="";
let options = [ "rock" , "paper" , "scissor"];
let stats=document.getElementById("stats");
let userscoreDisplay=document.getElementById("yourscore");
let agentscoreDisplay=document.getElementById("agentscore");
agentscore=0;
userscore=0;
let userchoiceimg = document.getElementById("displayuserchoice");
let agentchoiceimg = document.getElementById("displayagentchoice");


 

function agent() {
    let agentrandom=Math.floor(Math.random()*options.length);
         agentselection=options[agentrandom];
         if (agentrandom=='0') {
        agentchoiceimg.src='ASSETS/rock.png'
         }
         
         if (agentrandom=='1') {
            agentchoiceimg.src='ASSETS/paper.png'
             }
             
         if (agentrandom=='2') {
            agentchoiceimg.src='ASSETS/scissors.png'
             }
}

let rock=document.getElementById("rock");
rock.addEventListener("click",function(){
    userinput="rock";
    userchoiceimg.src= 'ASSETS/rock.png'
    agent();
    declare();
    win();
   

})
let paper=document.getElementById("paper");
paper.addEventListener("click",function(){
    userinput="paper";
    userchoiceimg.src= 'ASSETS/paper.png'
    agent();
    declare();
    win();
    

    
})
let scissor=document.getElementById("scissor");
scissor.addEventListener("click",function(){
    userinput="scissor";
    userchoiceimg.src= 'ASSETS/scissors.png'
    agent();
    declare();
    win();
})




function declare(){
    //ROCK//
    if ( userinput==="rock" && agentselection==="paper") {
        agentscore++;
        stats.innerHTML="AGENT WON THIS ROUND";
    }
    if ( userinput==="rock" && agentselection==="scissor") {
        userscore++;
        stats.innerHTML="YOU WON THIS ROUND "
     

    }
    if ( userinput==="rock" && agentselection==="rock") {
        stats.innerHTML="ROUND DRAW "

        
    }
    //paper//
    if ( userinput==="paper" && agentselection==="rock") {
        userscore++;
        stats.innerHTML="USER WON THIS ROUND"
      
    }
    if ( userinput==="paper" && agentselection==="scissor") {
        agentscore++;
        stats.innerHTML="AGENT WON THIS ROUND "
       

    }
    if ( userinput==="paper" && agentselection==="paper") {
        stats.innerHTML="ROUND DRAW "
        
        
    }
    //scissor//

     if ( userinput==="scissor" && agentselection==="paper") {
        userscore++;
        stats.innerHTML="USER WON THIS ROUND"
       
    }
    if ( userinput==="scissor" && agentselection==="rock") {
        agentscore++;
        stats.innerHTML="AGENT WON THIS ROUND "
        

    }
    if ( userinput==="scissor" && agentselection==="scissor") {
        stats.innerHTML="ROUND DRAW "
       
        
    }
    agentscoreDisplay.innerHTML=agentscore;
    userscoreDisplay.innerHTML=userscore;
}

function win(){
     if(userscore===5){
         stats.innerHTML= "HURRAY! YOU HAVE WON THE GAME";
         confetti({particleCount:100 ,spread:200});
         rock.disabled=true;
         paper.disabled=true;
         scissor.disabled=true;
         reset();
     }
     if(agentscore===5){
        stats.innerHTML="OOPS! YOU LOSE ";
        stats.style.color="red";
        rock.disabled=true;
        paper.disabled=true;
        scissor.disabled=true;
        reset();
     }
}



function reset(){

    setTimeout( ()=>{
        agentscore=0;
        userscore=0;
        agentscoreDisplay.innerHTML=0;
        userscoreDisplay.innerHTML=0;
        stats.innerHTML="PLAYER WHO WINS 5 TIMES FIRST IS DECLARED WINNER";
        stats.style.color="white";
    } , 1000)
}




