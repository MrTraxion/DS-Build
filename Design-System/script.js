// Fetch all classes named "dynamic"
const dynamics = document.querySelectorAll('.dynamic');
const subLinks = document.getElementsByClassName('sub-links')[0];
// Fetch the "mobile-menu" element
const menuButton = document.getElementsByClassName("mobile-menu")[0];


// Add class named "active" to all elements in dynamics
function openMenu() {
  for (const dynamic of dynamics) {
    dynamic.classList.add('active');
  }
}

// remove class named "active" from all elements in dynamics
function closeMenu() {
    for (const dynamic of dynamics) {
      dynamic.classList.remove('active'); 
  }
}

// Find current page and add a class named active-link" to it
function highlightCurrent() {
  const currentPage = document.URL;
  const links = document.getElementsByClassName('link');

  for (let link of links) {
    if (link.firstChild.href == currentPage) {
      link.classList.add("active-link");
      if (link.classList.contains("dropdown")) {
      subLinks.classList.add("visible");
      }console.log(subLinks)
      
    }
  }
}

// Call Highlight function when the document is loaded.
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent()
  }
}

// Call open or close function based on the current width of the screen
window.onresize = function() {
  if (window.innerWidth >= 760) {
    openMenu();
    } else {
    closeMenu();   
    };
}

// Listen for clicks and set the variable ignore to the navigation element
document.addEventListener('click', function(event) {
  const ignore = document.getElementsByClassName("navigation")[0];
  
  // Check if the window size is below 760px and check if the click happened outside of the navigation element and outside of the button element, if true call closeMenu()
  if (window.innerWidth <= 759 && !ignore.contains(event.target) && !menuButton.contains(event.target) && dynamics[0].classList.contains('active')) {
closeMenu();
  }
});

// Add a class named "active" to all elements in dynamics
menuButton.addEventListener("click", function() {
for (const dynamic of dynamics) {
  dynamic.classList.add('active');
}
});