//Deklarerer en klasse som heter Klassenavn
class Klassenavn {
  constructor(programfag, klassetrin) {
    this.programfag = programfag;
    this.klassetrin = klassetrin;
  }
}

//Lage en instans av klassen - opprette en klasse
let ita2 = new Klassenavn("informasjonsteknologi", "vg2");

console.table(ita2.programfag);

class Sirkel {
  constructor(radius) {
    this.radius = radius;
    this.omkrets = 2 * Math.PI * radius;
    this.areal = Math.PI * radius * radius;
  }
}

let minSirkel = new Sirkel(3);
console.log(minSirkel);

class Sylinder extends Sirkel {
  constructor(hoyde) {
    this.hoyde = hoyde;
  }
}
