var player = 1;
var countTurn=0;
            function clickBtn(btn1){
                
                if (player === 1){
                    document.getElementById(btn1).value="X";
                    document.getElementById(btn1).disabled="disabled";
                    player -= 1;
                    
                    countTurn = countTurn +1;
                    checkCatsGame();
                    winner();
                    
                }
                else {
                    document.getElementById(btn1).value="O";
                    document.getElementById(btn1).disabled="disabled";
                    player+=1;
                    
                    countTurn = countTurn +1;
                    checkCatsGame();
                    winner();
                    
                };

            }
            function disableBox(){
                document.getElementById("btn1").disabled ="disabled";
                document.getElementById("btn2").disabled ="disabled";
                document.getElementById("btn3").disabled ="disabled";
                document.getElementById("btn4").disabled ="disabled";
                document.getElementById("btn5").disabled ="disabled";
                document.getElementById("btn6").disabled ="disabled";
                document.getElementById("btn7").disabled ="disabled";
                document.getElementById("btn8").disabled ="disabled";
                document.getElementById("btn9").disabled ="disabled";
                
            }
            
            var word = document.getElementById("words").innerHTML;
            
            function checkCatsGame() {
                if (countTurn === 9){
                    document.getElementById("words").innerHTML="Cats Game";
                }
            }
            function winner() {
                
                
                if (
                    document.getElementById("btn1").value === "X" &&
                     document.getElementById("btn2").value === "X" &&
                      document.getElementById("btn3").value === "X"
                    ){
                        document.getElementById("words").innerHTML="Winner is X"
                    
                        disableBox();
                    }
                else if (
                    document.getElementById("btn4").value ==="X" &&
                    document.getElementById("btn5").value ==="X" &&
                    document.getElementById("btn6").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    }
                else if (
                    document.getElementById("btn7").value ==="X" &&
                    document.getElementById("btn8").value ==="X" &&
                    document.getElementById("btn9").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    }
                else if (
                    document.getElementById("btn1").value ==="O" &&
                    document.getElementById("btn2").value ==="O" &&
                    document.getElementById("btn3").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn4").value ==="O" &&
                    document.getElementById("btn5").value ==="O" &&
                    document.getElementById("btn6").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    
                        
                    }
                    else if (
                    document.getElementById("btn7").value ==="O" &&
                    document.getElementById("btn8").value ==="O" &&
                    document.getElementById("btn9").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn1").value ==="O" &&
                    document.getElementById("btn5").value ==="O" &&
                    document.getElementById("btn9").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn3").value ==="O" &&
                    document.getElementById("btn5").value ==="O" &&
                    document.getElementById("btn7").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn1").value ==="X" &&
                    document.getElementById("btn5").value ==="X" &&
                    document.getElementById("btn9").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    }
                    else if (
                    document.getElementById("btn3").value ==="X" &&
                    document.getElementById("btn5").value ==="X" &&
                    document.getElementById("btn7").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    }
                    else if (
                    document.getElementById("btn1").value ==="O" &&
                    document.getElementById("btn4").value ==="O" &&
                    document.getElementById("btn7").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn2").value ==="O" &&
                    document.getElementById("btn5").value ==="O" &&
                    document.getElementById("btn8").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn3").value ==="O" &&
                    document.getElementById("btn6").value ==="O" &&
                    document.getElementById("btn9").value ==="O" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is O"
                    }
                    else if (
                    document.getElementById("btn1").value ==="X" &&
                    document.getElementById("btn4").value ==="X" &&
                    document.getElementById("btn7").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    }
                    else if (
                    document.getElementById("btn2").value ==="X" &&
                    document.getElementById("btn5").value ==="X" &&
                    document.getElementById("btn8").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    }
                    else if (
                    document.getElementById("btn3").value ==="X" &&
                    document.getElementById("btn6").value ==="X" &&
                    document.getElementById("btn9").value ==="X" 
                    ){
                        disableBox();
                        document.getElementById("words").innerHTML="Winner is X"
                    
                    }
                
            }
            
            
 