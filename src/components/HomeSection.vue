<template>
  <div class="homepage">
    <div class="overlay">
      <div class="content" data-aos="fade-up" data-aos-duration="1500">
        <h1>DATA ANALYSIS <br />AUTOMATION & CONSULTING</h1>
        <p>
          With over 3 years of expertise, we empower businesses by offering
          innovative data-driven solutions, automation strategies, and
          comprehensive consulting services.
        </p>
        <div class="buttons" data-aos="fade-up" data-aos-duration="1500">
          <button class="learn-more">Learn More</button>
          <button class="contact">Contact</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Homepage",
};
</script>
  
  <style scoped>
.homepage {
  height: calc(100vh - 108px);
  padding: 5% 0 0 10%;
  box-sizing: border-box;
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
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 1.5em;
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
</style>