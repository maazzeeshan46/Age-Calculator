function calculateAge() {
  // Getting elemnts
  let Name = document.getElementById("Name").value;
  let birthYear = document.getElementById("BirthYear").value;
  let currentYear = new Date().getFullYear();
  let display = document.getElementById("display");

  // calculating Age
  let age = currentYear - birthYear;

  //Appl,ying Conditions
  if (Name == "" || birthYear == "") {
    display.innerText = "Please Fill out details";
    display.classList.add("show");
  } else {
    display.innerHTML =
      "<p><strong>" +
      Name +
      "</strong> is <strong>" +
      age +
      "</strong> years old</p>";
    display.classList.add("show");
  }
}
