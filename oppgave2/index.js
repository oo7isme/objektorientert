class Dinalder {
  constructor(navn, birthYear) {
    this.navn = navn;
    this.birthYear = birthYear;
    this.age = new Date().getFullYear() - this.birthYear;
  }
  getAgeText() {
    if (this.age < 0) {
      return "Fødselsåret ditt kan ikke være i fremtiden";
    }
    if (this.age < 15) {
      return "Du er under den kriminelle lavalderen";
    } else if (this.age < 18) {
      return "Du er over den kriminelle lavalderen";
    } else {
      return "Du er over den kriminelle lavalderen, og du har stemmerett";
    }
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
  let ageText = ola.getAgeText();

  document.getElementById("navn").textContent = "Hei," + " " + ola.navn + "!";
  document.getElementById("alder").textContent =
    "Du er " + ola.age + "år gammel";
  document.getElementById("alert").textContent = ageText;
});
