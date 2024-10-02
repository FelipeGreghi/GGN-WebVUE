<template>
  <a
    :href="link"
    class="card"
    target="_blank"
    data-aos="zoom-in"
    data-aos-duration="1200"
  >
    <img :src="image" alt="plant image" class="card-image" />
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </a>
</template>
  
  <script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  height: 400px;
  width: 330px;
  padding: 16px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05) !important;
}

.card-image {
  width: 100%;
  height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.card-title {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
}
.card-description {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
</style>
  