<template>
  <div class="services">
    <div class="separator" data-aos="fade" data-aos-duration="1500"></div>
    <h2 data-aos="fade" data-aos-duration="1500">Nossos Serviços</h2>
    <div class="service-container">
      <div
        class="service-card web-desing"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <i class="fas fa-paint-brush"></i>
        <h3>Web Design</h3>
        <p>
          Criamos interfaces web intuitivas e eficazes, focadas em proporcionar
          uma experiência de usuário agradável, com design moderno e compatível
          com todas as plataformas.
        </p>
      </div>
      <div
        class="service-card automacao"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <i class="fas fa-cogs"></i>
        <h3>Automação de Dados</h3>
        <p>
          Nossa equipe é especialista em automatizar processos complexos,
          otimizando fluxos de trabalho e integrando diversas plataformas para
          garantir que seus dados estejam sempre atualizados e prontos para uso.
        </p>
      </div>
      <div
        class="service-card dashboard"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <i class="fas fa-chart-bar"></i>
        <h3>Criação de Dashboards</h3>
        <p>
          Desenvolvemos dashboards dinâmicos e responsivos, que oferecem
          visualizações claras e objetivas, permitindo a tomada de decisões
          rápidas e embasadas com informações precisas.
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ServicesComponent",
};
</script>
  
<style scoped>
.separator {
  margin: 0 auto 30px;
  width: 30%;
  border-top: 3px solid #24bacb;
}
.services {
  text-align: center;
  min-height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 5%;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.service-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 90%;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.service-card {
  background-color: #f7f8fa;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
}

.service-card:hover {
  transform: translateY(15px) !important;
  transition: transform 0.5s ease-in-out !important;
}

.service-card h3 {
  font-size: 1.25rem;
  margin: 15px 0;
}

.service-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #fff;
}

.web-desing {
  background-color: #24bacb;
  color: #fff;
}

.web-desing i {
  font-size: 2rem;
  margin-bottom: 15px;
}

.automacao {
  background-color: #ecf0f1;
  color: #3d7177;
}

.automacao i {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #3d7177;
}

.automacao p {
  color: #3d7177;
}

.dashboard {
  background-color: #24bacb;
  color: #fff;
}

.dashboard i {
  font-size: 2rem;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .service-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .separator {
    margin-top: 30px;
  }

  .service-card {
    width: 80%;
    margin-bottom: 20px;
  }

  .service {
    margin-bottom: 20px;
    padding: 5% 5%;
  }

  h2 {
    font-size: 1.5rem;
  }

  .service-card h3 {
    font-size: 1rem;
  }

  .service-card p {
    font-size: 0.9rem;
  }
}
@media (max-width: 480px) {
  .service-container {
    gap: 5px;
  }

  .separator {
    margin-top: 20px;
  }

  .service-card {
    width: 90%;
    margin-bottom: 15px;
  }

  .service {
    margin-bottom: 15px;
    padding: 10% 5%;
  }

  h2 {
    font-size: 1.2rem;
  }

  .service-card h3 {
    font-size: 0.9rem;
  }

  .service-card p {
    font-size: 0.8rem;
  }
}
</style>
  