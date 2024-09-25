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
          title: "Projeto 1",
          image: "https://picsum.photos/200/300",
          description: "Descrição do Projeto 1",
        },
        {
          title: "Projeto 2",
          image: "https://picsum.photos/200/300",
          description: "Descrição do Projeto 2",
        },
        // Adicione mais projetos conforme necessário
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
  margin-bottom: 1.5rem;
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
  