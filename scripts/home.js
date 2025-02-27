import animejs from "./anime.min.js";

console.log("home.js is working");
const anime = animejs;

const aboutme = document.querySelector("#about-me");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");

aboutme.addEventListener("click", (e) => {
  aboutme.classList.add("clicked");
  setTimeout(() => {
    window.location.href = "about-me.html";
  }, 200);
});

skills.addEventListener("click", (e) => {
  skills.classList.add("clicked");
  setTimeout(() => {
    window.location.href = "skills.html";
  }, 200);
});

projects.addEventListener("click", (e) => {
  projects.classList.add("clicked");
  setTimeout(() => {
    window.location.href = "works.html";
  }, 200);
});

anime({
  targets: "#projects",
  translateX: -500,
  duration: 500,
  opacity: 1,
  delay: anime.stagger(100), // increase delay by 100ms for each elements.
});
anime({
  targets: ".desc-container",
  translateX: 500,
  opacity: 1,
  duration: 1200,
  delay: anime.stagger(100, { start: 300, easing: "easeOutQuad" }), // increase delay by 100ms for each elements.
});

anime({
  targets: ".words, .project-label",
  opacity: 1,
  duration: 1500,
  delay: anime.stagger(150),
});

anime({
  targets: ".project-label , .words",
  textShadow: "8px 0 rgba(255, 255, 255, 0.5)",
  duration: 1500,
  delay: anime.stagger(75, { start: 950 }),
});
