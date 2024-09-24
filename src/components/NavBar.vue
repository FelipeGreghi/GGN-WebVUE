<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar-logo" @click="handleClick($event, 'home')">
      <img src="@/assets/logo.png" alt="Nylas Logo" />
    </div>

    <i class="fa-solid fa-bars" @click="toggleMenu"></i>
    <ul :class="['navbar-links', { 'navbar-links-active': isMenuActive }]">
      <li @click="closeMenu">
        <a @click="handleClick($event, 'home')">Home</a>
      </li>
      <li @click="closeMenu">
        <a @click="handleClick($event, 'about')">About Us</a>
      </li>
      <li @click="closeMenu">
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
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    handleClick(event, sectionId) {
      event.preventDefault();
      this.scrollToSection(sectionId);
    },
    closeMenu() {
      this.isMenuActive = false;
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
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
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
  padding: 10px 5%;
  background-color: #1e1e1e;
  border-bottom: 1px solid #444;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Logo */
.navbar-logo img {
  height: 50px;
  cursor: pointer;
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

.fa-bars {
  display: none;
}

@media (max-width: 1024px) {
  .fa-bars {
    display: block;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
  .navbar-links {
    display: none;
    flex-direction: column;
    gap: 1em;
    background-color: #1e1e1e;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  .navbar-links-active {
    display: flex;
    justify-content: center;
  }
  .navbar-links li {
    margin: 1rem 0;
    text-align: center;
  }

  .navbar-actions {
    display: none;
  }

  .navbar-logo img {
    height: 35px;
  }
}
</style>
  