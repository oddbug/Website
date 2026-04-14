document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("no-layout")) return;
    document.body.insertAdjacentHTML("afterbegin", headerEl);
    document.body.insertAdjacentHTML("beforeend", footerEl);

    initActiveLinks();
    
    // add your own JavaScript code here...
    
    // Quote
    const quotes = [
        'Why do you long for such terrible things?',
        '.-.- - . -... .-.- .-.. ..-- -... .-.. ..--',
        'Scratch, kick. Let gravity win like',
        '"That bird has no idea what he\'s looking at."'
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quote = "<div>" + randomQuote + "</div>";
    document.getElementById("quote").innerHTML = quote;
    
    // Clock
    setInterval(showTime, 1000); // 1000 bits = 1 sec

    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        let currentTime = hour + ":" + min + ":" + sec;

        document.getElementById("clock").innerHTML = currentTime;
    }

    showTime();
});

/* FUNCTIONS */

function initActiveLinks() {
    const pathname = window.location.pathname;
    [...document.querySelectorAll("a")].forEach((el) => {
        const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

        if (pathname == "/") {
            if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
        } else {
            if (window.location.href.includes(elHref)) el.classList.add("active");
        }
    });
}

function getNestingString() {
    const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
    const numberOfSlahes = currentUrl.split("/").length - 1;
    if (numberOfSlahes == 1) return ".";
    if (numberOfSlahes == 2) return "..";
    return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* HTML*/

const nesting = getNestingString();

// How to use the nesting variable: <img src="${nesting}/images/example.jpg" />

const headerEl = `
	<header>
        <nav>
            &#10022;
            <a href="index.html">Home</a>
            <a href="profile.html">Profile</a>
            <a href="blog/index.html">Blog</a>
            <a href="links.html">Links</a>
            <div class="menu">
                <span>Writings</span>
                <div class="menuContent">
                    <a href="journal/index.html">Journal</a>
                </div>
            </div>
            <div class="menu">
                <span>Shrines</span>
                <div class="menuContent">
                    <a href="shrines/genshin/index.html">Genshin Impact</a>
                    <a href="shrines/guchiry.html">Guchiry</a>
                    <a href="shrines/milk.html">Milk Outside a Bag of Milk</a>
                </div>
            </div>
            <div class="menu">
                <span>For you</span>
                <div class="menuContent">
                    <a href="templates.html">Templates</a>
                    <a href="zatoring/index.html">Z.A.T.0.ring</a>
                </div>
            </div>
            <a href="https://nogood-angel.atabook.org/">Guestbook</a>
            <div class="menu">
                <span>Find me elsewhere</span>
                <div class="menuContent">
                    <a href="https://x.com/user_333143">Twitter</a>
                    <a href="https://www.youtube.com/@user33143">Youtube</a>
                    <a href="https://user333143.tumblr.com/">Tumblr</a>
                    <a href="https://ko-fi.com/user333143">Ko-fi</a>
                </div>
            </div>
        </nav>
        <div id="quote"></div>
        <div id="clock"></div>
    </header>
`;

const footerEl = `
    <footer>nogood-angel.org © 2024 - Forever</footer>
`;