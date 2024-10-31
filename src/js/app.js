const field = document.querySelector(".field");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  field.classList.toggle("expanded");
});
