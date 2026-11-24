document.addEventListener("DOMContentLoaded", function () {
  if (!document.body.classList.contains("no-layout")) {
    document.querySelector(".container").insertAdjacentHTML("afterbegin", headerEl);
    document.querySelector(".container").insertAdjacentHTML("beforeend", footerEl);

    const wrapperElement = document.querySelector("nav");
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", navigationEl);
    }

    initActiveLinks();
  }

  // Custom JavaScript
    
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
        <span>${monthName} ${year}</span>
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
  }
  renderCalendar();
    
  // Header quote
  const quotes = [
    "Where we curl up and wish for a new beginning",
    "I am trying to be happy", // Needy Girl Overdose anime final episode
    "Don't pity yourself. Once you go down that road, life turns into an endless nightmare." // Bungo Stray Dogs
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = randomQuote;
    
  // Time
  setInterval(showTime, 1000); // 1000 bits = 1 sec
  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let ampm = hour > 12 ? "PM" : "AM";
    let currentTime = `${hour}:${min}:${sec} ${ampm}`;

    document.getElementById('clock').innerHTML = currentTime;
  }
  showTime();
    
  // Custom JavaScript end
});

function initActiveLinks() {
  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example: <img src="${nesting}/images/example.jpg" />
 */

const headerEl = `
	<header style="grid-area: header">
        <div class="top">
            <div id="calendar"></div>
        </div>
        <div class="bottom">
            <div id="quote"></div>
            <div id="clock"></div>
        </div>
    </header>
`;

const navigationEl = `
    <h3>Navigation</h3>
        <ul>
            <li><a href="${nesting}/home.html">Home</a>
            <li><a href="${nesting}/aboutsite.html">About site</a>
            <li><a href="${nesting}/links.html">Links</a>
            <li><a href="${nesting}/sitemap.html">Sitemap</a>
            <li><a href="${nesting}/contact.html">Contact</a>
            <li><a href="https://nogood-angel.atabook.org/">Guestbook</a>
        </ul>
        <h3 class="devide">Personal</h3>
        <ul>
            <li><a href="${nesting}/aboutme.html">About me</a>
            <li><a href="${nesting}/anatomy.html">My anatomy</a>
            <li><a href="${nesting}/medialog.html">Media log</a>
            <details>
                <summary>Collections</summary>
                <ul>
                    <li><a href="${nesting}/images.html">Images</a>
                    <li><a href="${nesting}/graphics.html">Graphics</a>
                    <li><a href="https://myfigurecollection.net/profile/angelbug">Figures</a>
                </ul>
            </details>
        </ul>
        <h3>Writings</h3>
        <ul>
            <li><a href="${nesting}/journal.html">Journal</a></li>
            <li><a href="${nesting}/docs/index.html">Documentation</a></li>
        </ul>
        <h3 class="devide">Shrines</h3>
        <ul>
            <li><a href="${nesting}/shrines/milk/index.html">Milk Outside</a></li>
            <li><a href="${nesting}/shrines/guchiry/index.html">Guchiry</a></li>
        </ul>
        <h3 class="devide">For you</h3>
        <ul>
            <li><a href="${nesting}/templates/index.html">Template</a></li>
            <li><a href="${nesting}/zatoring/index.html">Z.A.T.O.ring</a></li>
        </ul>
`;

const footerEl = `
	<footer style="grid-area: footer">
        <ul class="nolist">
            <li><a href="${nesting}/sitemap.html">Sitemap</a></li>
            <li><a href="https://discord.gg/zkApGxebnK">Server</a></li>
            <li><a href="${nesting}/contact.html">Contact</a></li>
            <li><a href="https://nogood-angel.atabook.org/">Guestbook</a></li>
        </ul>
		nogood-angel.moe (c) 2024 - forever
	</footer>
`;