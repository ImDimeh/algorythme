class Pokemon {
  constructor(name, attack , defense , hp , luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp
    this.luck = luck
  }
}

let pokemon1 = new Pokemon("pikachu", 50, 10, 70, 0.60)
let axoloto = new Pokemon("axoloto", 45, 15, 80, 0.50);

function dammage(attack, defense) {
  return attack - defense;
}

let d = dammage(70, 15)





  function tour(attackPKM, defensePKM) {
    if (Math.random() < attackPKM.luck) {
      console.log(
        "vous avez infligée " +
          dammage(attackPKM.attack, defensePKM.defense) +
          " dégats à " +
          defensePKM.name
      );
      defensePKM.hp =
        defensePKM.hp - dammage(attackPKM.attack, defensePKM.defense);
      if (defensePKM.hp != 0) {
            console.log(
              defensePKM.name + " à  " + defensePKM.hp + " point de vie "
            );
            
          } else {
            console.log( attackPKM.name + " A GAGNé le combat gg à lui")
          }
    } else {
      console.log("attack ratée de " + attackPKM.name);
    }
  }





while (pokemon1.hp != 0 && axoloto.hp != 0) {
  
  console.log(tour(pokemon1, axoloto));
  console.log(tour(axoloto, pokemon1));
}

