const currentUrlWritingMenu = window.location.href;
const parsedUrlWritingMenu = currentUrlWritingMenu.split('/')
const targetUrlWritingMenu = parsedUrlWritingMenu[parsedUrlWritingMenu.length - 1];

if (targetUrlWritingMenu === 'writing.html') {
    blogNav = document.getElementById('blog-nav')
    blogNav.style.display = 'none';
    document.getElementById('writing-layout').style.display = 'block';
}