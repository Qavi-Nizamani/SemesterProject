console.log("ok ok ok ");
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submitForm);
// POST request using fetch()
async function submitForm(e) {
  console.log("its me");
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("comment").value;

  let response = await fetch(
    "https://samiullah-portfolio.herokuapp.com/contact",
    {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        name,
        email,
        message,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  // Converting to JSON
  let result = await response.json();
  if (result) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("id02").style.display = "block";
  }
}
