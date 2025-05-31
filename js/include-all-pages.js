document.addEventListener("DOMContentLoaded", function() {
    fetch("/partials/siteNav.html")
        .then(res => res.text())
        .then(
            data => {
                document.getElementById("site-nav").innerHTML = data
        });
});