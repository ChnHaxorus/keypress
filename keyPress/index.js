const key = document.querySelector(".key");
const container = document.querySelector(".container");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  container.classList.toggle("container2");
  key.classList.toggle("key2");
});
