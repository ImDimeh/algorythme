console.log("liée")
// creat element



// add element in the div
for (let i = 1 ; i < 22 ; i++){
    const para = document.createElement("div");
    para.classList.add("stick");
    const node = document.createTextNode("stick");
    para.appendChild(node);
    console.log(1)
    let container = document.getElementById("container");
    container.appendChild(para);

}


