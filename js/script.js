const links = document.querySelectorAll("nav a");
const currentPath = window.location.pathname;

links.forEach(link => {
  if (link.pathname === currentPath) {
    link.classList.add("active");
  }
});
