var typed = new Typed(".auto-type", {
  strings: ["Front-end", "Criativo", "Curioso", "Diligente"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const pre = document.querySelector(".card-3d-inicio");

// Define a posição inicial
const initialOffsetX = -30.898328690807798;
const initialOffsetY = -17.701421800947866;

// Chama a função para definir a posição inicial
setInitialPosition(pre, initialOffsetX, initialOffsetY);

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 768) {
    rotateElement(e, pre);
  }
});

function setInitialPosition(element, offsetX, offsetY) {
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}

function rotateElement(event, element) {
  // Obter a posição do mouse
  const x = event.clientX;
  const y = event.clientY;

  // Obter o centro
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // Obter o deslocamento a partir do centro como porcentagem
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  // Definir a rotação
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}
