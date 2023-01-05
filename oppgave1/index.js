class Dinalder {
  constructor(navn, birthYear) {
    this.navn = navn;
    this.birthYear = birthYear;
    this.age = new Date().getFullYear() - this.birthYear;
  }
}

let nameInput = document.getElementById("name");
let birthYearInput = document.getElementById("birthYear");

let nameElement = document.getElementById("navn");
let ageElement = document.getElementById("alder");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let newName = nameInput.value;
  let newAge = birthYearInput.value;
  let ola = new Dinalder(newName, newAge);

  document.getElementById("navn").textContent = "Hei," + " " + ola.navn + "!";
  document.getElementById("alder").textContent =
    "Du er " + ola.age + "år gammel";
});
