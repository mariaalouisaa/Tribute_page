function askUser(event) {
  let answer = document.querySelector("input").value;
  if (answer < 5) {
    alert("Damn, that's harsh.");
  } else {
    if (answer <= 10) {
      alert("We've found a fan!");
    } else {
      alert("Are you sure you typed that right?");
    }
  }
}

let form = document.querySelector("#question");
form.addEventListener("submit", askUser);
