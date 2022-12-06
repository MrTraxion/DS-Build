// Fetch all classes named "dynamic"
const dynamics = document.querySelectorAll('.dynamic');
// Fetch the "mobile-menu" element
const menuButton = document.getElementsByClassName("mobile-menu")[0];

// Find current page and add a class named active-link" to it
function highlightCurrent() {
  const currentPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == currentPage) {
      link.classList.add("active-link");
    }
  }
}

// Call Highlight function when the document is loaded.
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent()
  }
}

//Call open or close function based on the current width of the screen
window.onresize = function() {
  if (window.innerWidth >= 760) {
    openMenu();
    } else {
    closeMenu();
    };
}

// Add a class named "active" to all elements in dynamics
menuButton.addEventListener("click", function() {
for (const dynamic of dynamics) {
  dynamic.classList.add('active');
}
});

//add class named "active" to all elements in dynamics
function openMenu() {
  for (const dynamic of dynamics) {
    dynamic.classList.add('active');
  }
}

//remove class named "active" from all elements in dynamics
function closeMenu() {
  for (const dynamic of dynamics) {
    dynamic.classList.remove('active');
  }
}