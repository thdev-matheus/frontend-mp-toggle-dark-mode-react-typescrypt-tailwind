const theme = localStorage.getItem("@TDM-THEME");
const html = document.documentElement;

if (!theme) {
  localStorage.setItem("@TDM-THEME", "dark");
  html.classList.add("dark");
}

if (theme === "dark") {
  html.classList.add("dark");
}

if (theme === "light") {
  html.classList.remove("dark");
}

setTimeout(() => {
  const body = document.getElementsByTagName("body");

  body[0].style.transition = "500ms";
}, 1000);
