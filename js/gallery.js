
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

  document.addEventListener("DOMContentLoaded", function () {
    const toggleMobileMenu = document.getElementById("toggleMobileMenus");
    const mobileMenu = document.getElementById("mobileMenu");
    toggleMobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });
