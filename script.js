console.log('hello');

window.onload = function(){
    
    let mole = document.createElement('div')
    mole.classList.add('mole');
    
    
    let timeMole = 1000;
    let moleGolpeado = true;
    let score = 0;

    function getAMole() {
        
            setInterval(function(){

            if(!moleGolpeado){
                score -= 10
            }

            timeMole = Math.floor(Math.random() * 1000);

            let index = Math.floor(Math.random() * document.querySelectorAll('.col').length)
            

                document.querySelectorAll('.col'+index).forEach(function(coll){
                    
                coll.appendChild(mole)    
            
            })

            
            }, timeMole, timeMole);
    }

    getAMole()
     
     //let columna =  document.querySelectorAll('.col')
     
     mole.onclick = function(){   
         
         score += 10
         mole.remove()
         moleGolpeado = true;
         
         updateScore()
     }
    
function updateScore() {
    
    document.getElementById("score").innerHTML = score
    
}



// columna.forEach(col => {
        
//     col.onclick = function() {
//     score -=10
    
    
//     document.getElementById("score").innerHTML = score
//     }
// })





   

     

    //  document.querySelectorAll('.col'+index).forEach(function(coll){
         
       


    //  } .onlick() = function(){

    //     mole.removeChild(div.mole)
    





    
    
 
    console.log(document.getElementById('game-board'))














}// end window onload