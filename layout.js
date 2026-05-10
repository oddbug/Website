// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.querySelector('.container').insertAdjacentHTML("afterbegin", headerEl);
    document.querySelector('.container').insertAdjacentHTML("beforeend", footerEl);

    initActiveLinks();
  }

  // add your own javascript code here...
});

/* FUNCTIONS */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* HTML */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl = `
	<header></header>
    <nav>
        <a href="${nesting}/home.html">Home</a>
        <a href="${nesting}/webmaster.html">Webmaster</a>
        <a href="${nesting}/links.html">Links</a>
        <div class="menu">
            <span>Writings</span>
            <div class="menuContent">
                <a href="${nesting}/journal.html">Journal</a>
            </div>
        </div>
        <div class="menu">
            <span>Shrines</span>
            <div class="menuContent">
                <a href="${nesting}/shrines/milk/index.html">Milk Outside</a>
                <a href="${nesting}/shrines/guchiry/index.html">Guchiry</a>
                <a href="${nesting}/shrines/genshin/index.html">Genshin Impact</a>
            </div>
        </div>
        <div class="menu">
            <span>Collections</span>
            <div class="menuContent">
                <a href="https://myfigurecollection.net/profile/angelbug" target="_blank">Figures</a>
            </div>
        </div>
        <div class="menu">
            <span>For you</span>
            <div class="menuContent">
                <a href="${nesting}/templates/index.html">Templates</a>
                <a href="${nesting}/zatoring/index.html">Z.A.T.O.ring</a>
            </div>
        </div>
        <div class="menu">
            <span>Outlinks</span>
            <div class="menuContent">
                <a href="https://nogood-angel.atabook.org/" target="_blank">Guestbook</a>
            </div>
        </div>
    </nav>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
	<footer>
        <ul>
            <li><a href="mailto:nogoodangel@proton.me" title="Serious inquiries only">Contact</a></li>
            <li><a href="${nesting}/sitemap.html">Sitemap</a></li>
        </ul>
		nogood-angel.moe © 2024 - Forever ver 0.1.0
	</footer>
`;