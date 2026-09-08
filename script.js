const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalClose = document.querySelector("[data-modal-close]");
const privacyButton = document.querySelector("[data-privacy]");
const privacyModal = document.querySelector("[data-privacy-modal]");
const privacyClose = document.querySelector("[data-privacy-close]");

const galleryItems = [
  {
    src: "img/fachada-drogaria-mais-saude.jpg",
    alt: "Fachada da Drogaria Mais Saúde em Uberlândia",
  },
  {
    src: "img/prateleiras-medicamentos.jpg",
    alt: "Prateleiras com medicamentos e produtos da Drogaria Mais Saúde",
  },
  {
    src: "img/interior-drogaria.jpg",
    alt: "Interior da Drogaria Mais Saúde com corredores de produtos",
  },
];

function setModalState(element, isOpen) {
  element.hidden = !isOpen;
  document.body.classList.toggle("modal-open", isOpen);
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = galleryItems[Number(button.dataset.gallery)];
    modalImage.src = item.src;
    modalImage.alt = item.alt;
    setModalState(modal, true);
  });
});

modalClose?.addEventListener("click", () => setModalState(modal, false));
modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    setModalState(modal, false);
  }
});

privacyButton?.addEventListener("click", () => setModalState(privacyModal, true));
privacyClose?.addEventListener("click", () => setModalState(privacyModal, false));
privacyModal?.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    setModalState(privacyModal, false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (!modal.hidden) {
    setModalState(modal, false);
  }

  if (!privacyModal.hidden) {
    setModalState(privacyModal, false);
  }
});
