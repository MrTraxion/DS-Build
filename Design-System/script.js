
// Find Current Page

function highlightCurrent() {
  const currentPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == currentPage) {
      link.classList.add("active-link");
    }
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent()
  }
};


//document.getElementsByClassName("navigation")[0].style.width = "250px";
//document.getElementsByClassName("main")[0].style.marginLeft = "250px";


