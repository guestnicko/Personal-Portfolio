window.redirectUser = redirectUser;
function redirectUser(url) {
  const button = document.querySelector("#button-works");
  button.classList.add("clicked");

  setTimeout(() => {
    window.location.href = url;
  }, 500);
}
