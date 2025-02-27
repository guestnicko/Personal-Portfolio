import anime from "./anime.min.js";
window.redirectUser = redirectUser;

function redirectUser(url) {
  window.location.href = url;
}
anime({
  targets: ".card",
  opacity: 1,
  duration: 450,
  easing: "linear",
  background: "#1b1a55",
  delay: anime.stagger(100, { start: 100 }),
});
