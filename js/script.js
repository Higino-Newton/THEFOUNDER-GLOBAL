document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar");
});

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }
});

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
})();


//Codigos PGlogin
function Entrar() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validar campos vazios
  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos!");
    event.preventDefault();
    return false;
  }

  // Validar comprimento do username
  if (username.length < 3) {
    alert("Username deve ter pelo menos 3 caracteres!");
    event.preventDefault();
    return false;
  }

  // Validar comprimento da password
  if (password.length < 6) {
    alert("Password deve ter pelo menos 6 caracteres!");
    event.preventDefault();
    return false;
  }

  // Se passou em todas as validações, permite o envio
  return true;
}
//Codigos da PG_Seguranca
function Acessar() {
   const adminname = document.getElementById("adminname").value.trim();
   const adminpassword = document.getElementById("adminpassword").value.trim();

   // Validar campos vazios
   if (adminname === "" || adminpassword === "") {
     alert("Por favor, preencha todos os campos!");
     event.preventDefault();
     return false;
   }

   // Validar comprimento do username
   if (adminname.length < 3) {
     alert("Username deve ter pelo menos 3 caracteres!");
     event.preventDefault();
     return false;
   }

   // Validar comprimento da password
   if (adminpassword.length < 6) {
     alert("Password deve ter pelo menos 6 caracteres!");
     event.preventDefault();
     return false;
   }

   // Se passou em todas as validações, permite o envio
   return true;

}
