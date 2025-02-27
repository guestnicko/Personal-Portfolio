import anime from "./anime.min.js";

anime({
  targets: ".grid .card",
  opacity: 1,
  duration: 650,
  easing: "linear",
  background: "#1b1a55",
  delay: anime.stagger(100, { start: 100 }),
});
