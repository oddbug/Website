function show(elementID) {
    // find the requested page and alert if it's not found
    const ele = document.getElementById(elementID);
    if (!ele) {
        alert("Page does not exist");
    }

    // get all pages, loop through them and hide them
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // then show the requested page
    ele.style.display = 'block';
}