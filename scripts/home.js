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
