<template>
  <section class="welcome-section">
    <div class="content" data-aos="fade-up" data-aos-duration="1500">
      <h1>Welcome To Ingoude Company</h1>
      <p>
        We are Ingoude Company, we are involved in financial advisory business.
        Our company has been moving towards 8 years, but that doesn't make us a
        barrier to success because we learn from the right people.
      </p>
      <p>
        Talking about business, we provide an opportunity to consult with us to
        provide a better future for the company.
      </p>
      <button class="btn">Know More</button>
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
  margin-left: 10%;
  height: calc(100vh - 108px);
}

.content {
  padding-top: 2rem;
  margin-top: 4rem;
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
  font-size: 1.4rem;
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
  max-width: 40%;
  height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
  