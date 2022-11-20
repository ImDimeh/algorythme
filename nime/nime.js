console.log("liée")
// creat element
// nombre total de batton
let battontotal = 20;
// joueurs
let player = 1 ;
// nombre de batton choisit
let battonNbr = 0;
// si le tour est finit
isEnd = 0
function TurnEnd(){
    IsEnd = 1

    creatnew()
    return deleteBatton()
}

function deleteBatton(){

    battontotal -= 1 ;
    battonNbr +=1

    if(isEnd ===1 && player === 1 ){
        player = 2;

        document.write("<h3> au tour du joueur "  + player  + " </h3>" );
        battonNbr = 0
        isEnd = 0
        creatnew()
    }else if (isEnd ===1 && player === 2){
        player = 1 ;

        document.write("<h3> au tour du joueur  "  + player  + " </h3>" );
        battonNbr = 0
        isEnd = 0
        creatnew()
    }else {

    }


    if(battonNbr === 3 ){

        if (player === 1 ){
            player = 2;
            console.log(player)
            document.write("<h3> au tour du joueur "  + player  + " </h3>" );
            battonNbr = 0
            isEnd = 0
        }else if (player === 2 ) {
            player = 1 ;
            console.log(player + " deux ")
            document.write("<h3> au tour du joueur  "  + player  + " </h3>" );
            battonNbr = 0
            isEnd = 0
        }else{

        }
    }


    creatnew()
}

function creatnew(){
    document.body.innerHTML="";
    document.write('<link rel="stylesheet" href="style.css">');
    document.write("<h3> au tour du joueur "  + player  + " </h3>" );
    document.write(
          "<h3> liste des battons </h3>" +

        "<div class=\"container\" id=\"container\">" +
       " </div>" +
        "<button onClick=\"deleteBatton()\"> fin de tour </button>" +
        "<script src=\"nime.js\"></script>"
       );
    if(battontotal === 1 ){
        if(player===1){
            document.write("<h3> le joueur 2 a gagné  </h3>" );
        }else if(player===2){
            document.write("<h3> le joueur 1 a gagné  </h3>" );
        }
    }else{

    }



    for ( let batton2 = 0 ; batton2 < battontotal ; batton2++){
        const para = document.createElement("div");
        para.setAttribute("onclick","deleteBatton()")
        para.classList.add("stick");


        let container = document.getElementById("container");
        container.appendChild(para);





    }

}
// add element in the div
document.write("<div>");
for ( let batton2 = 0 ; batton2 < battontotal ; batton2++){
    const para = document.createElement("div");
    para.setAttribute("onclick","deleteBatton()")
    para.classList.add("stick");


    let container = document.getElementById("container");
    container.appendChild(para);


}

document.write("</div>");
