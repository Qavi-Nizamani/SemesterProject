// Get contacts and insert into admin page..
(async function getText() {
  let myObject = await fetch(
    "https://samiullah-portfolio.herokuapp.com/api/contact"
  );
  let contact = await myObject.json();
  let msgBox = document.getElementById("msgBox");
  let str = "";
  //   Iterate the contact
  contact.forEach((contact) => {
    str += `<div><b>Name:</b> ${contact.name} , <b>Email:</b> ${contact.email} \n<b>Message:</b> ${contact.message}\n</div>`;
  });
  msgBox.innerHTML = str;
})();
