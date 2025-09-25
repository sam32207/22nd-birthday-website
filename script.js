const envelope = document.querySelector(".envelope");
const papers = document.querySelector(".papers");
const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next-btn");

let currentPage = 0;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => {
    envelope.style.display = "none";
    papers.style.display = "block";
  }, 1200); // wait until flap animation ends
});

nextBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    pages[index].style.transform = "rotateY(-180deg)";
    currentPage++;
  });
});
