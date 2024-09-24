<template>
  <section class="welcome-section">
    <div class="content" data-aos="fade-up" data-aos-duration="1500">
      <h1>Bem-vindo à GGN</h1>
      <p>
        Na nossa empresa, somos especialistas em transformar dados em soluções poderosas e visuais. Com 3 anos de experiência no mercado, ajudamos empresas a automatizar processos, criar dashboards dinâmicos e responsivos, e desenvolver interfaces web intuitivas e eficazes.
       </p>
      <p>
        Nosso foco é entregar resultados que realmente fazem a diferença, simplificando operações e fornecendo insights visuais claros para que você possa tomar decisões informadas e rápidas. Seja para otimizar fluxos de trabalho ou dar vida a seus dados com dashboards multiplataforma, nossa equipe está pronta para superar expectativas.
      </p>
      <p>
        Veja nosso portfólio e descubra como podemos transformar seus desafios em oportunidades com soluções inovadoras e sob medida para o seu negócio.
      </p>
      <button class="btn">Nosso Portfólio</button>
    </div>
    <div class="image-container" data-aos="fade" data-aos-duration="1500">
      <img src="@/assets/AboutImage.png" />
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "WelcomeSection",
};
</script>
  
<style scoped>
.welcome-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10%;
  min-height: calc(100vh - 51px);
}

.content {
  padding-top: 2rem;
  margin-top: 3rem;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 3px solid #24bacb;
}

h1 {
  font-size: 2rem;
  color: #24bacb;
  margin: 1rem 0 1rem 0;
  text-align: left;
}

p {
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
  text-align: left;
}

.btn {
  background-color: #24bacb;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-start;
}

.btn:hover {
  background-color: #3d7177;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40%;
  height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 1150px) {
  .welcome-section {
    padding: 5% 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 0;
    height: auto;
  }

  .content {
    max-width: 100%;
    margin: 0;
  }

  .content {
    padding-top: 1rem;
    margin-top: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .image-container {
    display: none;
  }
}
</style>
  