// Store all elements with a class named "dynamic"
const dynamics = document.querySelectorAll('.dynamic');
// Store all elements with a class named "sub-links"
const subLinks = document.getElementsByClassName('sub-links');
// Store all elements with a class named "link"
const links = document.getElementsByClassName('link');
// store the "mobile-menu" element
const menuButton = document.getElementsByClassName("mobile-menu")[0];
// store the current URL
const currentPage = document.URL;
// store the first element with a class named "navigation"
const ignore = document.getElementsByClassName("navigation")[0];

const headerTitle = document.getElementsByClassName("header-title")[0];
const subTitle = document.getElementsByClassName("header-subtitle")[0];

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





// Find current page and add a class named active-link" to it and make sublinks appear 
function highlightCurrent() {
  for (let link of links) {
    if (link.firstChild.href == currentPage) {
      link.classList.add("active-link");
    if (link.classList.contains("dropdown")) {
      headerTitle.innerHTML = link.firstChild.textContent;
      
    }
      for (let subLink of subLinks) {

        switch (link.firstChild.textContent) {
          case 'Colors':
          case 'Typography':
          case 'Design': subLinks[0].classList.add("visible")
          subTitle.innerHTML = link.firstChild.textContent;
            break;
          case 'Buttons':
          case 'Cards':
          case 'Components': subLinks[1].classList.add("visible")
          subTitle.innerHTML = link.firstChild.textContent;
            break;
        }
      }
    }
  }
  
}

// Highlight current Page element when the document is loaded. And check if the navigation needs to be open or closed 
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent();
    if (window.innerWidth >= 760) {
      openMenu();
    } else {
      closeMenu();
    };
  }
}

// Call open or close function based on the current width of the screen
window.onresize = function () {
  if (window.innerWidth >= 760) {
    openMenu();
  } else {
    closeMenu();
  };
}

// Listen for clicks and set the variable ignore to the navigation element
document.addEventListener('click', function (event) {


  // Check if the window size is below 760px and check if the click happened outside of the navigation element and outside of the button element, if true call closeMenu()
  if (window.innerWidth <= 759 && !ignore.contains(event.target) && !menuButton.contains(event.target) && dynamics[0].classList.contains('active')) {
    closeMenu();
  }
});

// Add a class named "active" to all elements in dynamics
menuButton.addEventListener("click", function () {
  for (const dynamic of dynamics) {
    dynamic.classList.add('active');
  }
});