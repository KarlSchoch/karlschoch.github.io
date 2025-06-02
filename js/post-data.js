const currentUrl = window.location.href;
const parsedUrl = currentUrl.split('/')
let targetUrl = parsedUrl[parsedUrl.length - 1]
if (targetUrl) {
    if (targetUrl === 'writing.html') {
        fetch('/writing/landingPage.html')
            .then(res => res.text())
            .then(html => {
                document.getElementById('writing-content').innerHTML = html;
            })
    } else {
        // Manipulate targetUrl to point to the correct page
        const date = parsedUrl[parsedUrl.length - 2].split('=');
        targetUrl = `/writing/${date[date.length - 1]}/post.html`;
        // Fetch page content
        fetch(targetUrl)
            .then(res => res.text())
            .then(html => {
                document.getElementById('writing-content').innerHTML = html;
            })
    }
}