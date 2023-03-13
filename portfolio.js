const submit_btn = document.getElementById("contactme");
submit_btn.addEventListener("submit", submit);

function submit(eve)
{
    eve.preventDefault();
    let name = document.getElementById("contactname").value;
    let email = document.getElementById("mailingadd").value;
    let message = document.getElementById("message").value;

    if (!name && !email && !message)
    {
        console.warn("you must enter some data to submit this form");
    } 
    else 
    {
        if (!name) 
        {
          name = "no submission";
        }
        if (!email) 
        {
          email = "no submission";
        }
        if (!message) 
        {
          message = "no submission";
        }
        console.log("========== Form Submission ==========");
        console.log("Username: ", name);
        console.log("Email: ", email);
        console.log("Message:", message);
    }
    alert("your response is recorded")
}
