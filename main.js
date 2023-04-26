// Estos correos ya se han apuntado a la notificación. Esto es para el ejercicio 2
const registeredEmails = [, "rosa@gmail.com", "faustino@gmail.com"];

// PASO PREVIO: Añadir un listener al formulario para el event 'submit', y ejecutar el event.preventDefault()
let button = document
  .getElementById("notify-me")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("mensaje").classList.remove("hidden");

    const email = document.querySelector(".form__input").value;
    if (registeredEmails.includes(email)) {
      document.getElementById("mensaje").textContent =
        "El usuario con el correo" + email + " ya existe en nuestro sistema.";
      document.querySelector("input").value = "";
    } else {
      // document.getElementById("mensaje").classList.remove("hidden");
      document.getElementById("mensaje").textContent =
        " Oops El usuario con el correo" +
        email +
        "NO existe en nuestro sistema. TE AVISAREMOS";
      document.querySelector(".form").style.display = "none";
    }
  });
