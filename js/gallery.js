function tabs() {
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".flex button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Oculta todos los contenidos de las pestañas
        tabContents.forEach((content) => {
          content.classList.add("hidden");
        });

        // Muestra el contenido de la pestaña actual
        tabContents[index].classList.remove("hidden");
      });
    });
  });
}

tabs();

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".h-gallery0ne img");

  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImage.src = this.src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
