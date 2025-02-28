console.log("index.js is working");

const profile = document.querySelector(".profile");

profile.addEventListener("click", (e) => {
  profile.classList.toggle("clicked");

  setTimeout(() => {
    window.location.href = "Personal-Portfolio/htmls/home.html";
  }, 100);
});
