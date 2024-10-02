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
          title: "Dashboard de Vendas",
          image: require("@/assets/portfolio/portifolioDashVendas.jpg"),
          description:
            "Criação de um painel para analisar indicadores como faturamento, margem bruta e quantidade vendida. Inclui comparações com metas, desempenho por produto e um ranking de vendedores, facilitando a visualização dos resultados e suporte para decisões estratégicas de vendas.",
          link: "https://app.powerbi.com/view?r=eyJrIjoiMjE1MTNlNDgtYjdjOS00NDkwLWJmZWQtMjA1NTU5ODQwM2I2IiwidCI6ImUxYWFhM2NmLTI5MjItNDEyYy04MDE1LWRlZTEyZDg1MTJmYSJ9",
        },
        {
          title: "Dashboard de Recursos Humanos",
          image: require("@/assets/portfolio/portifolioDashRH.jpg"),
          description:
            "Criação de um dashboard interativo, focado em análises de contratações, demissões e indicadores de desempenho de uma empresa. As informações são apresentadas de maneira intuitiva, facilitando a tomada de decisões estratégicas e gestão eficiente de pessoas.",
          link: "https://app.powerbi.com/view?r=eyJrIjoiZjJlNWIwMjktMzNkYi00YzNkLWI4NTgtNTEyZDQzZWUyMmY0IiwidCI6ImUxYWFhM2NmLTI5MjItNDEyYy04MDE1LWRlZTEyZDg1MTJmYSJ9",
        },
        {
          title: "Dashboard Imobiliário",
          image: require("@/assets/portfolio/portifolioDashImobiliaria.jpg"),
          description:
            "Painel para análise de vendas e locações de imóveis, com visualizações de faturamento, funil de negócios, origem dos leads e desempenho por vendedor. Facilita o acompanhamento de metas e a análise geográfica das vendas para suporte a decisões estratégicas.",
          link: "https://app.powerbi.com/view?r=eyJrIjoiZGM3NzA2Y2UtZmU1My00NzljLTg1N2QtNmIwNDdiMGQ5NTJjIiwidCI6ImUxYWFhM2NmLTI5MjItNDEyYy04MDE1LWRlZTEyZDg1MTJmYSJ9",
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
  