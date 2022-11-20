class jason {
  constructor(name, pv) {
    this.name = name
    this.pv = pv
  }
}
class personnage {
  constructor(nom , roles, probOfDeath, probOfDammage, ProbOfdeathAndDamage) {
    this.name = nom

    this.roles = roles
    this.POD = probOfDeath
    this.PODA = probOfDammage
    this.lPOdeathAndDamage = ProbOfdeathAndDamage
  }


}
function cpersonnage(np){
  return Math.floor(Math.random() * np)
}





finalGirl = new personnage("sarah" ,  "final girl" , 0.3 ,0.60 , 0.1)
nerd = new personnage("henry" , "nerd" , 0.5 ,0.20 , 0.30)
gigaChad = new personnage(" Ernest Khalimov" , "GIGA CHAD" ,0.5 ,0.3 ,0.2)
blonde = new personnage("kimberly" , "blonde",0.70 ,0.1 ,0.2)
smart = new personnage("Laura" , "smart",0.3 ,0.3 ,0.4)
sportif = new personnage("Mike" ,  "sportif" , 0.6 ,0.2 ,0.2)
traitre = new personnage("zack" , "traitre",0.40 , 0.1 ,0.5)

jason = new jason("JASON " , 100)


listeUser =[finalGirl , nerd , gigaChad , blonde , smart , sportif , traitre]
finalList=[]
for (i = 1 ; i != 6 ; i++){
  index = Math.floor(Math.random() * 7)

  let selectedUser = listeUser[index];
  finalList.push(selectedUser)
  listeUser.splice(index , 1)



}



console.log(jason.pv > 0 && finalList.length > 0)


while (jason.pv > 0 && listeUser.length > 0){
  console.log(listeUser )
  let CP = cpersonnage(listeUser.length)
  let perso = listeUser[CP]
  chance = Math.random();
    if(chance < perso.POD){
      listeUser.splice(CP , 1)
      console.log(listeUser)
      console.log(perso.name + " est mort ")
    }else if (chance < perso.PODA + perso.POD ){
      jason.pv -= 10
      console.log(perso.name + " a infligé 10 de dégats a Jason et a survécu")
    }else{
      jason.pv -= 15
      // jason meurt et perd 15 pv
      listeUser.splice(CP , 1)
      console.log(perso.name + " est mort et a infligé 15 de dammage a jason ")
      console.log(jason.pv)
    }





}
if (jason.pv <= 0 ){
  console.log("jason est mort cette merde ")
}else{
  console.log("jason a gagné ")
}


