function gethigh(level) {
    let storedScore = localStorage.getItem("highScore");
    if (storedScore === null || level > parseInt(storedScore)) {
        localStorage.setItem("highScore", level);
        $("#high-score").text("HIGHEST SCORE: " + level);
    } else {
        $("#high-score").text("HIGHEST SCORE: " + storedScore);
    }
}


let outputcolor=[];
    let usercolor=[];
    let level=1;
    var colours=["green","red","yellow","blue"];
    var randomnum=0;
    let track=0;
    let start=true;
   
    function restart(){
        
    outputcolor=[];
     usercolor=[];
     level=1;
     colours=["green","red","yellow","blue"];
     randomnum=0;
     track=0;
     start=true;
     gethigh(level)
    
     $("#level-title").text("Restart press any key");

    }

    
$(document).on("keydown",play)
function playsound(color){
 
        $("#level-title").text("level "+level);

   
     $("#"+color).addClass("pressed");
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
      setTimeout(function(){
         $("#"+color).removeClass("pressed");

    },500);

}

    

function play(){
   
    
     
        gethigh(level)
     randomnum=Math.floor(Math.random()*4);
    outputcolor.push(colours[randomnum]);
   
    playsound(colours[randomnum]);
    track=0;
  
        
    
    }
    function check(click,track){
        if(click!=outputcolor[track])
           { 
                  

            
            
            playsound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
         $("body").removeClass("game-over");
         start=false
         restart();

    },2300);
  



           }
          
       

    }
    
    var click;
     $(".btn").click(function(){
         click=this.id;
       
          
           check(click,track); 
           usercolor.push(click);
            track++;
        
        playsound(click);
        if(start&&usercolor.length === outputcolor.length) {
        usercolor.length=0;
   
    setTimeout(function() {
        level++;
        play(); 
    }, 1000);
}
        
     }
       

    )
   
  


    

  
  






    // output a random colur
    // user will give exact then colout
    // if user gives exact same colour output another colur
    // if user give wrong sequence of colur then game will be over.
    


