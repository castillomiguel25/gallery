document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const producto = this.getAttribute("data-producto");
      const precio = parseFloat(this.getAttribute("data-precio"));

      paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: producto,
                    value: precio,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log("Pago completado", details);
              alert("¡Pago completado!");
            });
          },
          onError: function (err) {
            console.error("Error en el pago", err);
            alert("Hubo un error al procesar el pago");
          },
        })
        .render("#paypal-button-container");
    });
  });
});

function getPrecio(producto) {
  let precio = 0;

  switch (producto) {
    case "50+5":
      precio = 5;
      break;
    case "100+15":
      precio = 10;
      break;
    case "300+60":
      precio = 30;
      break;
    case "500+150":
      precio = 50;
      break;
    case "1000+500":
      precio = 100;
      break;
    default:
      precio = 0;
  }

  return precio;
}


function Pro() {
  const openModals = document.querySelectorAll('[id="openModal"]');
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("myModal");

  openModals.forEach((openModal) => {
    openModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    clearPaypalContainer();
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id === "myModal") {
      modal.classList.add("hidden");
      clearPaypalContainer();
    }
  });
  function clearPaypalContainer() {
    const paypalContainer = document.getElementById(
      "paypal-button-container"
    );
    paypalContainer.innerHTML = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggleMobileMenu = document.getElementById("toggleMobileMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    toggleMobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });
}

Pro()

function mostrarDiv() {
  const div = document.querySelector('.model-methods');
  div.style.display = 'block';
}

function copyMail() {
  var emailElement = document.getElementById("email");
  var texto = emailElement.textContent || emailElement.innerText;
  var aux = document.createElement("input");
  aux.setAttribute("value", texto);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Correo copiado: " + texto);
}

