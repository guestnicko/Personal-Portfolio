import anime from "./anime.min.js";

const profile = document.querySelector(".profile");

// anime({
//   targets: ".profile",
//   duration: 1500,
//   opacity: 1,
//   translateX: -300,
//   easing: "spring(1, 80, 10, 0)",
// });

// var complete = false;
// anime({
//   targets: ".profile",
//   boxShadow: "-15px 15px 3px 3px hsl(0, 0.00%, 50.20%)",
//   duration: 1000,
//   easing: "spring(1, 80, 10, 0)",
//   delay: anime.stagger(150, { start: 350 }),
//   complete: function (anim) {
//     complete = true;
//     profile.position = "";
//     profile.style =
//       "opacity: 1; box-shadow: -15px 15px 3px 3px hsl(0, 0.00%, 50.20%); left: 0px";
//   },
// });

profile.addEventListener("click", (e) => {
  profile.classList.toggle("clicked");

  setTimeout(() => {
    window.location.href = "/htmls/home.html";
  }, 100);
});
