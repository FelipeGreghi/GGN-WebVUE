<template>
  <div class="portfolio">
    <div class="portfolio-header" data-aos="fade-up" data-aos-duration="1500">
      <h1>Nosso Portfólio de Sucesso</h1>
      <p class="subtitle">
        Explore os projetos que já transformaram <br />
        <b>negócios e ideias</b>
      </p>
    </div>
    <div class="portfolio-projects">
      <Card
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :image="project.image"
        :description="project.description"
        :link="project.link"
      />
    </div>
  </div>
</template>
  
  <script>
import Card from "./Card.vue";
export default {
  name: "Portfolio",
  components: {
    Card,
  },
  data() {
    return {
      projects: [
        {
          title: "Portfólio Web",
          image: require("@/assets/portfolio/portfolioWebProgramador.jpg"),
          description:
            "Desenvolvimento de um portfólio web responsivo com Vue.js, projetado para exibir de forma interativa as habilidades de um desenvolvedor full stack, projetos completos com links para repositórios, além de facilitar o contato para oportunidades profissionais.",
          link: "https://felipegreghi.netlify.app/",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #f7f8fa;
  min-height: calc(100vh - 60px);
  padding: 0 5%;
}

.portfolio-header {
  max-width: 800px;
}

.portfolio-header h1 {
  font-size: 3rem;
  color: #333;
  font-weight: 800;
}

.subtitle {
  font-size: 1.5rem;
  color: #333;
}

.portfolio-projects {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 90%;
  margin-top: 2rem;
}
@media (max-width: 768px) {
  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .portfolio-projects {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .portfolio {
    padding: 5% 5%;
  }
}

@media (max-width: 480px) {
  .portfolio-header h1 {
    font-size: 2.3rem;
  }
  .subtitle {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
}
</style>
  