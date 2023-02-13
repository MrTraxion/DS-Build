// Store all elements with a class named "dynamic"
const dynamics = document.querySelectorAll(".dynamic");
// Store all elements with a class named "sub-links"
const subLinks = document.getElementsByClassName("sub-links");
// Store all elements with a class named "link"
const links = document.getElementsByClassName("link");
// store the "mobile-menu" element
const menuButton = document.getElementsByClassName("mobile-menu")[0];
// store the current URL
const currentPage = document.URL;
// store the first element with a class named "navigation"
const ignore = document.getElementsByClassName("navigation")[0];
// store the header-title and sub-title elements
const headerTitle = document.getElementsByClassName("header-title")[0];
const subTitle = document.getElementsByClassName("header-subtitle")[0];
// store the overlay element
const overlay = document.getElementsByClassName("overlay")[0];

const codeButtons = document.getElementsByClassName("button-container");
const codeFragments = document.getElementsByClassName("code-fragment");
const html = document.getElementsByClassName("html");
const css = document.getElementsByClassName("css");
const js = document.getElementsByClassName("js");

// Add class named "active" to all elements in dynamics
function openMenu() {
  for (const dynamic of dynamics) {
    dynamic.classList.add("active");
  }
}
// remove class named "active" from all elements in dynamics
function closeMenu() {
  for (const dynamic of dynamics) {
    dynamic.classList.remove("active");
    overlay.classList.remove("active");
  }
}

// Find current page and add a class named active-link" to it
function highlightCurrent() {
  for (let link of links) {
    if (link.firstChild.href == currentPage) {
      link.classList.add("active-link");
      for (let subLink of subLinks) {
        //Make sub-links appear and set appropriate titles
        switch (link.firstChild.textContent) {
          case "Home":
            headerTitle.innerHTML = "Home";
            subTitle.innerHTML = "Introduction";
            break;
          case "Design":
            headerTitle.innerHTML = subLinks[0].classList[1];
            subLinks[0].classList.add("visible");
            subTitle.innerHTML = "Introduction";
            break;
          case "Colors":
            headerTitle.innerHTML = subLinks[0].classList[1];
            subLinks[0].classList.add("visible");
            subTitle.innerHTML = link.firstChild.textContent;
            break;
          case "Typography":
            headerTitle.innerHTML = subLinks[0].classList[1];
            subLinks[0].classList.add("visible");
            subTitle.innerHTML = link.firstChild.textContent;
            break;
          case "Components":
            subLinks[1].classList.add("visible");
            subTitle.innerHTML = "Introduction";
            headerTitle.innerHTML = subLinks[1].classList[1];
            break;
          case "Cards":
            headerTitle.innerHTML = subLinks[1].classList[1];
            subLinks[1].classList.add("visible");
            subTitle.innerHTML = link.firstChild.textContent;
            break;
          case "Buttons":
            headerTitle.innerHTML = subLinks[1].classList[1];
            subLinks[1].classList.add("visible");
            subTitle.innerHTML = link.firstChild.textContent;
            break;
            case "Icons":
              headerTitle.innerHTML = subLinks[0].classList[1];
              subLinks[0].classList.add("visible");
              subTitle.innerHTML = link.firstChild.textContent;
              break;
        }
      }
    }
  }
}

// Highlight current Page element when the document is loaded. And check if the navigation needs to be open or closed
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    highlightCurrent();
    if (window.innerWidth >= 760) {
      openMenu();
    } else {
      closeMenu();
    }
  }
};

// Call open or close function based on the current width of the screen
window.onresize = function () {
  if (window.innerWidth >= 760) {
    openMenu();
  } else {
    closeMenu();
  }
};

// Listen for clicks and set the variable ignore to the navigation element
document.addEventListener("click", function (event) {
  // Check if the window size is below 760px and check if the click happened outside of the navigation element and outside of the button element, if true call closeMenu()
  if (
    window.innerWidth <= 759 &&
    !ignore.contains(event.target) &&
    !menuButton.contains(event.target) &&
    dynamics[0].classList.contains("active")
  ) {
    closeMenu();
  }
});

// Add a class named "active" to all elements in dynamics
menuButton.addEventListener("click", function () {
  for (const dynamic of dynamics) {
    dynamic.classList.add("active");
  }
  overlay.classList.add("active");
});

// HTML CSS JS Buttons
for (i = 0; i < codeButtons.length; i++) {
  codeButtons[i].addEventListener("click", (e) => {
    const index = e.target.parentElement.id.replace(/\D/g,'');
    for(const codeFragment of codeFragments){
      codeFragment.classList.remove("active");
  
    };
      switch (e.target.textContent) {
        case "HTML":
          
          e.target.classList.add("active");
          js[index].classList.remove("active");
          css[index].classList.remove("active");
          html[index].classList.add("active");
          break;
          case "CSS":
            
            e.target.classList.add("active");
            js[index].classList.remove("active");
            html[index].classList.remove("active");
            css[index].classList.add("active");
           
            break;
            case "JS":
              
              e.target.classList.add("active");
              css[index].classList.remove("active");
              html[index].classList.remove("active");
              js[index].classList.add("active");
             
           break;
      }  
  });
}


