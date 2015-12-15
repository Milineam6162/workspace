function createGameBoard(){
    var innerhtml = "";
    for( var i = 1; i <= 8; i++ ){
        innerhtml += "<tr>";
        for( var j = 1; j <= 8; j++ ){
            //Board unique id's 
            innerhtml += " <td id = \""+ i + "_" + j + "\"";
            // Once click console.log id number
            //innerhtml += "onclick=\"userclick(\"";
            //console.log(onclick);
            //innerhtml +=  i + "_" + j + )";
            //Class name
            innerhtml += " class=\"";
            if ( j % 2 === 0){
                innerhtml += "red\">";
            }
            else {
                innerhtml += "black\">";
            }
            innerhtml += "o</td>";
        }
        innerhtml += "</tr>";
    }
    document.getElementById("mainboard").innerHTML = innerhtml;
}