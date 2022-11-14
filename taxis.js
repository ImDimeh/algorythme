let ListeMusic = [
  "anissa",
  "JS musique électronique ",
  "php funk",
  "html classic",
  "css  Afrotrap",
];
class personnage {
  constructor(name, santeMental) {
    this.name = name;
    this.santeMental = santeMental;
  }
}

let john = new personnage("john", 3);

let taxis = 0;

for (i = 30; i != 0; i--) {
  if (john.santeMental === 0) {
    console.log(
      "EXPLOSION DE " +
        john.name +
        " il a exploser au bout de " +
        taxis +
        " taxis  . Il lui restait " +
        i +
        " feux rouges "
    );
    break;
  } else if (john.santeMental !== 0 && i === 1) {
    console.log(
      "il est arrivé chez lui , il a du changer de taxis " + taxis + " fois "
    );
  } else {
    let randomInt = Math.floor(Math.random() * 5);

    console.log(
      " Il entend la music :  " +
        ListeMusic[randomInt] +
        " il lui reste " +
        i +
        " feux rouges"
    );

    if (ListeMusic[randomInt] === "anissa") {
      taxis += 1;
      john.santeMental = john.santeMental - 1;
      console.log("taxis numéro " + taxis);
    } else {
      console.log(" ");
    }
  }
}
