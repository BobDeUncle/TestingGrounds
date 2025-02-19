<script>
  // No additional logic needed for now.
</script>

<div class="container">
  <aside class="sidebar">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </aside>
  <main class="content">
    <slot />
  </main>
</div>

<style>
  /* Container for the layout */
  .container {
    display: flex;
    min-height: 100vh;
    background-color: lightblue;
  }

  /* Styling the sidebar */
  .sidebar {
    width: 200px;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  /* Main content area */
  .content {
    flex: 1;
    padding: 2rem;
  }

  /* Basic styles for navigation */
  nav ul {
    list-style: none;
    padding: 0;
  }

  nav li {
    margin: 1rem 0;
  }

  nav a {
    text-decoration: none;
    color: #333;
  }

  nav a:hover {
    text-decoration: underline;
  }
</style>
