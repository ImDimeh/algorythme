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
   Cpersonnage(np){
    return Math.floor(Math.random() * np)
  }
 
}






finalGirl = new personnage("sarah" ,  "final girl" , 0.01 ,0.80 , 0.01)
nerd = new personnage("henry" , "nerd" , 0.75 ,0.20 , 0.60)
gigaChad = new personnage(" Ernest Khalimov" , "GIGA CHAD" ,0.5 ,0.3 ,0.2)
blonde = new personnage("kimberly" , "blonde",0.75 ,0.15 ,0.15)
smart = new personnage("Laura" , "smart",0.45 ,0.55 ,0.75)
sportif = new personnage("Mike" ,  "sportif" , 0.70 ,0.99 ,0.99)
traitre = new personnage("zack" , "traitre",0.40 , 0.65 ,0.50)

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


while (jason.pv > 0 && finalList.length > 0){
  let CP = finalList.Cpersonnage(finalList.length)
  let perso = finalList[CP]
  chance = Math.random();
    if(chance < perso.POD){
      finalList.splice(CP , 1)
      console.log(perso.name + " est mort ")
    }else if (chance < perso.PODA + perso.POD ){
      jason.pv = jason.pv -10

    }else{
      jason.pv = jason.pv -15
      // jason meurt et perd 15 pv
      finalList.splice(CP , 1)
      console.log(perso.name + " est mort ")

    }




}


