document.addEventListener("DOMContentLoaded", function() {
    fetch("/partials/postLinks.html")
        .then(res => res.text())
        .then(html => {
            const navTarget = document.getElementById("post-links-writing-nav")
            if (navTarget) navTarget.innerHTML = html;
            const landingTarget = document.getElementById("post-links-landing-page")
            if (landingTarget) landingTarget.innerHTML = html;
        });
});