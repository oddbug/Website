// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
      
    document.querySelector("main").insertAdjacentHTML("beforebegin", headerEl);
    document.querySelector("main").insertAdjacentHTML("afterend", footerEl);

    const wrapperElement = document.querySelector("aside"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
    }

    initActiveLinks();
  }

  // CUSTOM JAVASCRIPT
    
  // CALENDAR
  const calendarEl = document.getElementById("calendar");
  let current = new Date();

  function renderCalendar() {
    const year = current.getFullYear();
    const month = current.getMonth();

    const today = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthName = current.toLocaleString('default', { month: 'long' });

    let html = `
        <div class="cal-header">
            <button id="prev">⟵</button>
            <span>${monthName} ${year}</span>
            <button id="next">⟶</button>
        </div>

        <div class="cal-grid">
            <div>S</div><div>M</div><div>T</div><div>W</div>
            <div>T</div><div>F</div><div>S</div>
    `;

    for (let i = 0; i < firstDay; i++) {
      html += `<div></div>`;
    }
      
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
        
      if (dayNum === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        html += `<div class="current-day">${dayNum}</div>`;
      } else {
        html += `<div>${dayNum}</div>`;
      }
    }


    html += `</div>`;
    calendarEl.innerHTML = html;

    document.getElementById("prev").onclick = () => {
      current.setMonth(current.getMonth() - 1);
      renderCalendar();
    };

    document.getElementById("next").onclick = () => {
      current.setMonth(current.getMonth() + 1);
      renderCalendar();
    };
  }
  renderCalendar();
    
    // HEADER QUOTE
    const quotes = [
        "Where we curl up and wish for a new beginning",
        "I am trying to be happy"
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote;
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

const headerEl = `
	<header>
        <div id="banner">
            <div id="calendar"></div>
            <div class="inner">
                <span id="quote"></span>
            </div>
        </div>
    </header>
`;

const sidebarEl1 = `
    <div class="sideHead">
        <h2>Navigation</h2>
        <img src="${nesting}/images/cross.png">
    </div>
    <nav>
        <div class="menu">
            <span>Sitely</span>
            <div class="menuContent">
                <a href="${nesting}/home.html">Home</a>
                <a href="${nesting}/aboutsite.html">About site</a>
                <a href="${nesting}/links.html">Links</a>
                <a href="${nesting}/sitemap.html">Sitemap</a>
                <a href="${nesting}/contact.html">Contact</a>
                <a href="https://nogood-angel.atabook.org/">Guestbook</a>
            </div>
        </div>
        <div class="menu">
            <span>Personal</span>
            <div class="menuContent">
                <a href="${nesting}/webmaster.html">Webmaster</a>
                <a href="${nesting}/medialog.html">Media log</a>
            </div>
        </div>
        <div class="menu">
            <span>Writings</span>
            <div class="menuContent">
                <a href="${nesting}/journal.html">Journal</a>
                <a href="${nesting}/docs/index.html">Documentation</a>
            </div>
        </div>
        <div class="menu">
            <span>Shrines</span>
            <div class="menuContent">
                <a href="${nesting}/shrines/milk/index.html">Milk Outside</a>
                <a href="${nesting}/shrines/guchiry/index.html">Guchiry</a>
                <a href="${nesting}/shrines/genshin/index.html">Genshin Impact</a>
                <a href="${nesting}/shrines/needygirl/index.html">Needy Girl Overdose</a>
            </div>
        </div>
        <div class="menu">
            <span>Collections</span>
            <div class="menuContent">
                <a href="${nesting}/graphics.html">Graphics</a>
                <a href="https://myfigurecollection.net/profile/angelbug">Figure</a>
            </div>
        </div>
        <div class="menu">
            <span>For you</span>
            <div class="menuContent">
                <a href="${nesting}/templates/index.html">Templates</a>
                <a href="${nesting}/zatoring/index.html">Z.A.T.O.ring</a>
            </div>
        </div>
    </nav>
`;

const footerEl = `
	<footer>
        <ul>
            <li><a href="${nesting}/sitemap.html">Sitemap</a></li>
            <li><a href="${nesting}/contact.html">Contact</a></li>
            <li><a href="https://nogood-angel.atabook.org/">Guestbook</a></li>
        </ul>
        nogood-angel.moe © 2024 - Forever | ver 0.1.7
    </footer>
`;