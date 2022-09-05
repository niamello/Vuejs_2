<template>
  <section class="strip">
    <div class="emphasis">
      <h3>Investir é sobre você</h3>
      <p>A INVESTIR EM POUCOS MINUTOS. DESCOMPLIQUE.</p>
    </div>
    <button class="btn_2">Button</button>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.strip {
  color: white;
  background-color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 50px;
}

.strip h3 {
  font-size: 2rem;
  text-align: left;
}

.strip p {
  max-width: 800px;
  color: white;
  text-align: left;
}

.strip .btn_2 {
  background-color: black;
  color: white;
  padding: 10px 30px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
}
</style>