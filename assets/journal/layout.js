// Thanks Petrapixel again. I'm sorry.
document.addEventListener("DOMContentLoaded", function () {
  if (!document.body.classList.contains("no-layout")) {

    const leftSection = document.querySelector(".left");
    if (leftSection) {
      leftSection.insertAdjacentHTML("afterbegin", calendarEl);
      leftSection.insertAdjacentHTML("beforeend", navEl)
    }

    const centerSection = document.querySelector(".center");
    if (centerSection) {
      centerSection.insertAdjacentHTML("beforeend", commentsEl);
    }

    initActiveLinks();
  }

  // add your own javascript code here...
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

const calendarEl = `
  <div id="calendar" class="box">
    <div class="head">Calendar</div>
    <div class="inner"></div>
  </div>
`;

const navEl = `
  <div id="nav" class="box">
    <div class="head">Navigation</div>
    <div class="inner"></div>
  </div>
`;

const commentsEl = `
  <div id="comments" class="box">
    <div class="head">Comments</div>
    <div class="inner"></div>
  </div>
`;