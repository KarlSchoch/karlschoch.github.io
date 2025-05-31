document.addEventListener("DOMContentLoaded", function() {
    fetch("/partials/siteNav.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("site-nav").innerHTML = html;
            if (window.initNavToggle) {
                window.initNavToggle();
            }
        });
});