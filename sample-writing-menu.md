html example
```html
<main class="writing-layout">
  <nav class="writing-menu" id="writingMenu">
    <ul>
      <li><a href="#section1">Intro</a></li>
      <li><a href="#section2">Concepts</a></li>
      <li><a href="#section3">Conclusion</a></li>
    </ul>
  </nav>

  <button class="menu-toggle" id="menuToggle">☰ Show Menu</button>

  <article class="writing-content">
    <!-- Your writing goes here -->
  </article>
</main>
```

CSS
```css
/* Layout */
.writing-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.menu-toggle {
  display: none;
  margin-bottom: 1rem;
}

/* Responsive behavior */
@media (max-width: 768px) {
  .writing-layout {
    display: block;
  }

  .writing-menu {
    display: none;
    margin-bottom: 1rem;
  }

  .writing-menu.open {
    display: block;
  }

  .menu-toggle {
    display: inline-block;
  }
}
```
JavaScript
```JS
<script>
  const menu = document.getElementById('writingMenu');
  const toggle = document.getElementById('menuToggle');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.textContent = menu.classList.contains('open') ? '✖ Hide Menu' : '☰ Show Menu';
  });
</script>
```