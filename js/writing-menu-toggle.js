const menu = document.getElementById('blog-nav');
const toggle = document.getElementById('blog-nav-toggle');
const writingLayout = document.getElementById('writing-layout')
const postSelection = document.getElementById('post-selection')

toggle.addEventListener('click', () => {
    // Adds/removes (aka toggles) presense of "open" class
    menu.classList.toggle('open');
    writingLayout.classList.toggle('open');
    postSelection.classList.toggle('open');
    toggle.classList.toggle('open');
});