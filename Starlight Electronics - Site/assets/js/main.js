function showSidebar() {
  document.querySelector(".sidebar").classList.add("active");
  document.querySelector(".sidebar-overlay").classList.add("active");
}

function hideSidebar() {
  document.querySelector(".sidebar").classList.remove("active");
  document.querySelector(".sidebar-overlay").classList.remove("active");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideSidebar();
  }
});