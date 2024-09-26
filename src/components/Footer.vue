<template>
  <div class="footer">
    <!-- Left section -->
    <div class="left-section">
      <div class="logo">
        <h1>GGN Data Solutions</h1>
      </div>
      <p class="description">
        Nosso foco é entregar resultados que fazem a diferença, fornecendo
        insights visuais claros para decisões informadas e rápidas. Seja para
        otimizar fluxos de trabalho ou dar vida aos seus dados, estamos prontos
        para superar suas expectativas.
      </p>
      <div class="social-icons">
        <a href="#">
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="right-section">
      <p>VAMOS CONVERSAR</p>
      <h1>Tem uma Ideia?</h1>
      <button class="book-call">
        <i class="fab fa-whatsapp" aria-hidden="true"></i>Fale com nosso
        especialista
      </button>
      <p class="email-message">
        Se preferir, fique à vontade para nos enviar um e-mail. Estaremos
        prontos para ajudar!
      </p>
      <a href="mailto:hello@rsacreativestudio.com" class="email-link">
        <i class="fas fa-envelope" aria-hidden="true"></i>
        hello@teste.com
      </a>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Footer",
};
</script>
  
  <style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  color: #fff;
  min-height: calc(100vh - 60px);
}

.left-section {
  margin-top: 10%;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-flow: column;
  padding-top: 5rem;
  padding-left: 10%;
  padding-right: 10px;
  height: 50%;
}

.social-icons i {
  color: #fff;
  font-size: 2em;
}

.right-section {
  margin-top: 10%;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-flow: column;
  border-left: #fff 1px solid;
  border-top: #fff 1px solid;
  border-top-left-radius: 80px;
  padding: 5rem 2rem 10rem;
}

.logo h1 {
  font-size: 2em;
}

.description {
  max-width: 50ch;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
}

.social-icons a {
  margin-right: 30px;
}

.right-section h1 {
  color: #fff0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 70px;
  line-height: 70px;
  text-align: left;
}

.book-call {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  color: #fff;
  border: 0.5px solid #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  position: relative;
  background-color: transparent;
  cursor: pointer;
}

.email-message {
  margin-top: 20px;
  font-size: 1.1em;
  text-align: left;
}

.email-link {
  color: #ff6f61;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.email-link img {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

@media (max-width: 620px) {
  .footer {
    flex-direction: column;
  }

  .left-section {
    width: 100%;
    padding: 0 2rem;
  }

  .right-section {
    width: 100%;
    border-bottom: #fff 1px solid;
    border-right: #fff 1px solid;
    border-top-right-radius: 80px;
    padding: 4rem 2rem;
  }
}
</style>
  