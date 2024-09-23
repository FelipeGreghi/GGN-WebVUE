<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar-logo">
      <img src="@/assets/logo.png" alt="Nylas Logo" />
    </div>

    <!-- Links de navegação -->
    <ul class="navbar-links">
      <li>
        <a @click="handleClick($event, 'home')">Home</a>
      </li>
      <li>
        <a @click="handleClick($event, 'about')">About Us</a>
      </li>
      <li>
        <a @click="handleClick($event, 'services')">Services</a>
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
  methods: {
    handleClick(event, sectionId) {
      event.preventDefault();
      this.scrollToSection(sectionId);
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      const navbar = document.querySelector(".navbar");
      if (section && navbar) {
        const navbarHeight = navbar.offsetHeight;
        const sectionPosition = section.offsetTop - navbarHeight;
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    },
  },
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
  position: fixed; /* Adicionado para fixar a navbar */
  top: 0; /* Adicionado para fixar no topo */
  width: 100%; /* Adicionado para ocupar toda a largura */
  z-index: 1000; /* Adicionado para garantir que a navbar fique acima de outros elementos */
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
  cursor: pointer;
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
  border-radius: 5px;
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
  