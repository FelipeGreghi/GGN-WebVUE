<template>
  <div class="card" data-aos="zoom-in" data-aos-duration="1200">
    <img :src="image" alt="plant image" class="card-image" />
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
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
  height: 350px;
  width: 250px;
  padding: 16px;
}
.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.card-title {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
}
.card-description {
  font-size: 14px;
  color: #333;
}
</style>
  