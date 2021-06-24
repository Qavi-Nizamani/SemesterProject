// window.addEventListener("load", () => {
//   document.getElementById("submit-form").addEventListener("click", submit);
// });

// function checkName() {
//   var name_validation = document.getElementById("name").value;
//   name_len = name_validation.length;

//   if (name_len == 0) {
//     document.getElementById("name-err").innerText = "Name required";

//     return false;
//   }
//   if (name_len <= 5) {
//     document.getElementById("name-err").innerText =
//       "More than 5 character required";
//     document.getElementById("name").style.borderColor = "#DC2626";
//     return false;
//   } else {
//     document.getElementById("name-err").innerText = "";
//     return true;
//   }
// }
// function checkPassword() {
//   let password = document.getElementById("password");
//   if (password.value.length == 0) {
//     document.getElementById("password-err").innerText = "Password is required";
//     return false;
//   }
//   if (password.value.length < 8) {
//     password.style.borderColor = "#DC2626";
//     document.getElementById("password-err").innerText =
//       "Password must be 6 characters long";
//     return false;
//   } else {
//     document.getElementById("password-err").innerText = "";

//     return true;
//   }
// }
// function checkConfirmPassword() {
//   let confirm_password = document.getElementById("confirm-password");
//   let password = document.getElementById("password");
//   if (confirm_password.value.length == 0) {
//     document.getElementById("confirm-password-err").innerText =
//       "This field is required";

//     return false;
//   }
//   if (confirm_password.value !== password.value) {
//     document.getElementById("confirm-password-err").innerText =
//       "Password doesn't match!";

//     return false;
//   } else {
//     document.getElementById("confirm-password-err").innerText = "";

//     return true;
//   }
// }
// // function submit() {
// //   checkName();
// //   // checkPassword();
// //   // checkConfirmPassword();

// //   let email = document.getElementById("email");

// //   if (email.value.length == 0) {
// //     document.getElementById("email-err").innerText = "Email is required";
// //   } else {
// //     document.getElementById("email-err").innerText = "";
// //   }
// // }

// $(function () {
//   $("#submit-form").click(handleClick);
// });

function handleClick() {
  var SubmissionText = $("#SubmissionText").val("");
  SubmissionText.empty();
  $("#SubmissionText").append(
    "Thanks! Your message recorded, We will contact you back soon"
  );
}

// // Admin login form
// var modal = document.getElementById("id01");

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
