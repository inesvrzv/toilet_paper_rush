function calculateRolls(){
  console.log("sdf")
  console.log(event)
  const rolls = document.getElementById("rollstrange").value;
  console.log(rolls)
  const days = document.getElementById("daystrange").value;
  const people = document.getElementById("pplstrange").value;
  const rdays = document.getElementById("rdaystrange").value;
  const paperDays = rolls / people * rdays;
  event.preventDefault();
  const percent = Math.round(paperDays / days * 100);

  if (percent > 100) {
    const emoji = "😁"
    document.getElementById("survival").innerHTML = "This will last " + percent + "% of your quarantine" + emoji;
  } else {
    const emoji = "💩";
    document.getElementById("survival").innerHTML = "This will last " + percent + "% of your quarantine" + emoji;
  }

  document.getElementById("rolls").innerHTML = rolls;
  document.getElementById("days").innerHTML = "Current Value " + days;
  document.getElementById("people").innerHTML = "Current Value " + people;
  document.getElementById("rdays").innerHTML = "Current Value " + rdays;
};

var rollSlider = document.getElementById("rollstrange");
var rollOutput = document.getElementById("rolls");
rollOutput.innerHTML = rollSlider.value;
rollSlider.oninput = function() {
  rollOutput.innerHTML = this.value;
  calculateRolls();
}

var daySlider = document.getElementById("daystrange");
var dayOutput = document.getElementById("days");
dayOutput.innerHTML = daySlider.value;
daySlider.oninput = function() {
  dayOutput.innerHTML = this.value;
  calculateRolls();
}

var rdaySlider = document.getElementById("rdaystrange");
var rdayOutput = document.getElementById("rdays");
rdayOutput.innerHTML = rdaySlider.value;
rdaySlider.oninput = function() {
  rdayOutput.innerHTML = this.value;
  calculateRolls();
}

var pplSlider = document.getElementById("pplstrange");
var pplOutput = document.getElementById("people");
pplOutput.innerHTML = pplSlider.value;
pplSlider.oninput = function() {
  pplOutput.innerHTML = this.value;
  calculateRolls();
}
// const form = document.getElementById("form");
// form.addEventListener("submit", calculateRolls);

//pplstrange rdaystrange
