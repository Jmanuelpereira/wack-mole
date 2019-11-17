
window.onload = function(){

    let user = this.prompt("Please enter your name", "John Doe")


    document.getElementById("user").innerHTML = " " +user;
    
    // let mole = document.createElement('div')
    // mole.classList.add('mole');

    let mole = document.createElement('img');
    mole.setAttribute('src', "./topo-png.png");
    mole.style.width = "150px";
    
    
    let timeMole = 1000;
    let moleGolpeado = true;
    let score = 10;

    let dificultad = document.querySelectorAll(".btn")

    dificultad.onclick = () => {
        if(level.innerHTML === "Easy")
        return 6500
    }

    // dificultad.forEach((level)=>{

    //     level.onclick = () => {
    //         if(level.innerHTML === "Easy")
    //         return 6500
    //     }


        
     

    // })



    // dificultad.onclick = function getDificultad() {

    //     switch(level.innerHTML){

    //         case 'Easy':
    //         level.innerHTML = 6500;
    //         break;

    //         case 'Moderate':
    //         level.innerHTML = 3000;
    //         break;
                

    //         case 'Hard':
    //         level.innerHTML = 500;
    //         break;
            
    //     }

    //    if(level.innerHTML === 6500)
    //    return 6500

    //    if(level.innerHTML === 3000)
    //    return 3000

    //    if(level.innerHTML === 6500)
    //    return 6500




    // }

  

    function missMole(){

        if(!moleGolpeado){
            score -= 10
       }
       updateScore()
       mole.remove()
    }

   

    function getAMole() {
        
            setInterval(function(){

            
                missMole();
                
                
                timeMole = Math.floor(Math.random() * 3500);
                let index = Math.floor(Math.random() * document.querySelectorAll('.col').length)
                
                
                document.querySelectorAll('.col'+index).forEach(function(coll){
                    
                    coll.append(mole) 
                    moleGolpeado = false;  
                    
                })
                
            
                
            }, timeMole);

            
            
    }

    let started = document.querySelector(".start");

    started.onclick = function(){

        getAMole()
    }
     
     
     mole.onclick = function(){   
         
         score += 10
         mole.remove()
         moleGolpeado = true;
         
         
     }
    
function updateScore() {
    
    document.getElementById("score").innerHTML = score
    showStatus();
    
}

function showStatus(){

    if(score > 100)
        alert("You Win!!!")
    
    if(score <=0){

        

         window.location.reload();
         alert("Youlose!!")
        

        
    }


}





    
    
 
    console.log(document.getElementById('game-board'))














}// end window onload