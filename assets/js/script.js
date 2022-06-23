window.onscroll = function () {
  scrollHeader();
  cssScrollToTop();
};

// Shrink font-size di header

function scrollHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.fontSize = "0.9em";
  } else {
    document.querySelector("header").style.fontSize = "1em";
  }
}

// Scroll to top button

function cssScrollToTop() {
  const btToTop = document.querySelector("#toTop");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btToTop.style.display = "block";
  } else {
    btToTop.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dark Mode YGY

function darkMode() {
  const body = document.body;
  const icon = document.querySelector(".btDarkMode");
  body.classList.toggle("darkBody");

  if (document.body.className == "darkBody") {
    icon.innerHTML =
      '<svg fill="white" viewBox="0 0 24 24" stroke="#e2e6e9" stroke-width="2" width="20"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>';
    icon.setAttribute("title", "Light Mode");
  } else {
    icon.innerHTML =
      '<svg viewBox="0 0 20 20" fill="#1e1e1c" width="20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>';
    icon.setAttribute("title", "Dark Mode");
  }
}
