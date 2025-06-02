Folder Setup
```
writing/
├── post.html             ← The shared layout file
├── posts/
│   ├── post1.html        ← Just the content
│   └── post2.html
├── post-data.js          ← JS file with logic to load specific posts
└── writing-menu.html     ← Optional: shared menu
```

`writing/post.html` File
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Writing Post</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <div id="navbar">
    <!-- Injected via JS or just include normally -->
    <a href="/">Home</a> | <a href="/writing/index.html">Writing Home</a>
  </div>

  <div class="writing-layout">
    <nav id="sidebar">
      <!-- Optional: injected with fetch or include directly -->
    </nav>

    <main id="post-content">
      <!-- JS will inject post HTML here -->
    </main>
  </div>

  <script src="post-data.js"></script>
</body>
</html>
```

`post-data.js` File
```js
// Extract "post" query parameter from the URL
const params = new URLSearchParams(window.location.search);
const postName = params.get("post");

if (postName) {
  fetch(`/writing/posts/${postName}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("post-content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("post-content").innerHTML = "<p>Post not found.</p>";
    });
}

// Optional: Load the sidebar menu
fetch('/writing/writing-menu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById("sidebar").innerHTML = html;
  });
```

`writing/posts/post1.html` File
```html
<h1>Understanding Pipelines</h1>
<p>This post walks through data pipelines and where things go wrong.</p>
```

Linking to the Posts: `<a href="/writing/post.html?post=post1">Understanding Pipelines</a>`