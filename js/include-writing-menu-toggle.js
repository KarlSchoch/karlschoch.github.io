const currentUrlWritingMenu = window.location.href;
const parsedUrlWritingMenu = currentUrlWritingMenu.split('/')
const targetUrlWritingMenu = parsedUrlWritingMenu[parsedUrlWritingMenu.length - 1];

if (targetUrlWritingMenu === 'writing.html') {
    document.getElementById('blog-nav-toggle').style.display = 'none';
}