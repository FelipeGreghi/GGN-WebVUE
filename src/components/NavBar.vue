<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar-logo">
      <img src="@/assets/logo.png" alt="Nylas Logo" />
    </div>

    <!-- Links de navegação -->
    <ul class="navbar-links">
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Solutions</a>
      </li>
      <li>
        <a href="#">Developers</a>
      </li>
      <li>
        <a href="#">Resources</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
    </ul>

    <!-- Ações à direita -->
    <ul class="navbar-actions">
      <li>
        <a href="#" class="btn primary-btn">Contact Sales</a>
      </li>
    </ul>
  </nav>
</template>
  
  <script>
export default {
  name: "NavBar",
};
</script>
  
  <style scoped>
/* Estilos principais da navbar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #444;
}

/* Logo */
.navbar-logo img {
  height: 80px;
}

/* Links de navegação */
.navbar-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.navbar-links li a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: large;
}

.navbar-links li a:hover {
  color: #24bacb;
}

/* Ações à direita */
.navbar-actions {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.btn {
  padding: 16px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
}

.primary-btn {
  background-color: #24bacb;
  color: white;
}

.primary-btn:hover {
  background-color: #3d7177;
}
</style>
  