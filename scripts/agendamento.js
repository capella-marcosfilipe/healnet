// require("dotenv").config();

const form = document.getElementById("formulario");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  const formData = new FormData(form);
  event.preventDefault();

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Enviando...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (res) => {
      let json = await res.json();
      if (res.status === 200) {
        result.innerHTML = json.message;
      } else {
        console.log(res);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Algo deu errado!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var acessKeyInput = document.getElementById("accessKeyInput");
//   web3Token.value = process.env.TOKEN;
// });
