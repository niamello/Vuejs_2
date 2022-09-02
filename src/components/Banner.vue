<template>
  <div class="hero">
    <h1>Lorem ipsum dolor sit, consectetur adipiscing elit.</h1>
    <h3>Consequat leo, nec, sit sociis tellus ut amet</h3>
    <button class="hero-button">Button</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background-size: cover;
  min-height: 75vh;
  color: white;
  display: flex;
  flex-direction: column;
  background-color: DimGray;
  padding: 40px 235px;
  align-items: flex-start;
}

.hero h1 {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 90px;
  display: flex;
}

.hero h3 {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: normal;
  font-size: 20px;
}

.hero-button {
  flex-direction: row;
  align-items: center;
  padding: 24px 32px;
  gap: 8px;
  background: black;
  border-radius: 100px;
}

@media (max-width: 700px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h3 {
    font-size: 1.5rem;
  }
}
</style>