<template>
  <div class="homepage">
    <div class="overlay">
      <div class="content" data-aos="fade-up" data-aos-duration="1500">
        <h1>
          ANÁLISE DE DADOS | AUTOMAÇÃO | WEB DESIGN<br />
          & CONSULTORIA
        </h1>
        <p>
          Com mais de 3 anos de experiência, impulsionamos negócios ao fornecer
          soluções inovadoras baseadas em dados, estratégias avançadas de
          automação, designs de sites modernos e serviços completos de
          consultoria.
        </p>
        <div class="buttons" data-aos="fade" data-aos-duration="1500">
          <button class="learn-more" @click="handleClick($event, 'about')">
            Learn More
          </button>
          <button class="contact">Contact</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Homepage",
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
.homepage {
  min-height: calc(100vh - 78px);
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  width: 100%;
  height: 100%;
}

.content {
  text-align: left;
  color: white;
  max-width: 70%;
}

h1 {
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 20px;
  color: #24bacb;
}

p {
  font-size: 1em;
  margin-bottom: 40px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.learn-more,
.contact {
  padding: 15px 30px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.learn-more {
  background-color: white;
  color: #3d7177;
}

.contact {
  background-color: #24bacb;
  color: white;
}

.contact:hover {
  background-color: #3d7177;
}

@media (max-width: 768px) {
  .homepage {
    padding: 5% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    max-width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.2em;
  }

  .buttons {
    flex-direction: column;
    gap: 10px;
  }

  .learn-more,
  .contact {
    width: 100%;
  }
}
</style>