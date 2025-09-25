let currentPage = 0;
const pages = document.querySelectorAll(".page");
const content = document.querySelector(".content");
const envelope = document.querySelector(".envelope");

function openEnvelope() {
  envelope.classList.add("hidden");
  content.classList.remove("hidden");
  currentPage = 0;
  showPage(currentPage);
}

function showPage(n) {
  pages.forEach((p, i) => {
    p.classList.add("hidden");
    if (i === n) p.classList.remove("hidden");
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function restart() {
  content.classList.add("hidden");
  envelope.classList.remove("hidden");
}
