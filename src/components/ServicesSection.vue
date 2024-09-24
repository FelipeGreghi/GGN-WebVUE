<template>
  <div class="services">
    <div class="separator" data-aos="fade" data-aos-duration="1500"></div>
    <h2 data-aos="fade" data-aos-duration="1500">Our Service</h2>
    <div class="service-container">
      <div
        class="service-card financial-planning"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <i class="fas fa-chart-line"></i>
        <h3>Financial Planning</h3>
        <p>
          We are specialists in this field with over 100 experiments. What it
          means you will get the right solution, please find our service.
        </p>
      </div>
      <div
        class="service-card insurance"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <i class="fas fa-shield-alt"></i>
        <h3>Insurance</h3>
        <p>
          We are specialists in this field with over 100 experiments. What it
          means you will get the right solution, please find our service.
        </p>
      </div>
      <div
        class="service-card tax-planning"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <i class="fas fa-file-alt"></i>
        <h3>Tax Planning</h3>
        <p>
          We are specialists in this field with over 100 experiments. What it
          means you will get the right solution, please find our service.
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
  width: 20rem;
  border-top: 3px solid #24bacb;
}
.services {
  text-align: center;
  min-height: calc(100vh - 78px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5%;
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

.financial-planning {
  background-color: #24bacb;
  color: #fff;
}

.financial-planning i {
  font-size: 2rem;
  margin-bottom: 15px;
}

.insurance {
  background-color: #ecf0f1;
  color: #3d7177;
}

.insurance i {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #3d7177;
}

.insurance p {
  color: #3d7177;
}

.tax-planning {
  background-color: #24bacb;
  color: #fff;
}

.tax-planning i {
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
    height: 200px;
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
  