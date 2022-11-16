console.log("liée")
// creat element
// nombre total de batton
let battontotal = 20;
// joueurs
let player = 1 ;
// nombre de batton choisit
let battonNbr = 0;

function deleteBatton(){
    console.log("hello")
    battontotal -= 1 ;
    battonNbr +=1
    if(battonNbr>= 3 ){
        console.log("au tour du joueur deux")
        player = 2
    }
    creatnew()
}

function creatnew(){
    document.body.innerHTML="";
    document.write( "<body>"
         + "<h3> liste des battons </h3>" +
        "<link rel=\"stylesheet\" href=\"style.css\">" +
        "<div className=\"container\" id=\"container\">" +
       " </div>" +
        "<script src=\"nime.js\"></script>" +
        "\"</body>\"");




    for ( let batton2 = 0 ; batton2 < battontotal ; batton2++){
        const para = document.createElement("div");
        para.setAttribute("onclick","deleteBatton()")
        para.classList.add("stick");
        const node = document.createTextNode("stick");
        para.appendChild(node);

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
    const node = document.createTextNode("stick");
    para.appendChild(node);

    let container = document.getElementById("container");
    container.appendChild(para);

}

document.write("</div>");
