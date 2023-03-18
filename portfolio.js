var form = document.querySelector("form");
form.addEventListener("submit", submit);

function submit(eve) {
  eve.preventDefault();
  let name = form.elements[0].value;
  let email = form.elements[1].value;
  let message = form.elements[2].value;

  if (!name && !email && !message) {
    console.warn("you must enter some data to submit this form");
    alert("Please fill the form to proceed further");
  } else {
    if (!name) {
      name = "no submission";
    }
    if (!email) {
      email = "no submission";
    }
    if (!message) {
      message = "no submission";
    }
    console.log("========== Form Submission ==========");
    console.log("Username: ", name);
    console.log("Email: ", email);
    console.log("Message:", message);
    alert("Your response is recorded");
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
  }
}
