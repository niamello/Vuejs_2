<template>
  <main class="highlights">
    <section class="highlights-manin">
      <div class="highlights-manin-box-grey"></div>
      <div class="highlights-manin-written">
        <h1 class="highlights-manin-title">Lorem ipsum</h1>
        <h2 class="highlights-manin-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna blandit
          urna sit in dictum aliquam. Tempus, viverra tincidunt risus eget
          aliquam ipsum.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Urna blandit urna sit in dictum aliquam. Tempus, viverra
          tincidunt risus eget aliquam ipsum.
        </h2>
        <button class="highlights-manin-botton">Button</button>
      </div>
    </section>
    <section class="highlights-secondary">
      <div class="highlights-secondary-written">
        <h1 class="highlights-secondary-title">Lorem ipsum</h1>
        <h2 class="highlights-secondary-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna blandit
          urna sit in dictum aliquam. Tempus, viverra tincidunt risus eget
          aliquam ipsum.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Urna blandit urna sit in dictum aliquam. Tempus, viverra
          tincidunt risus eget aliquam ipsum.
        </h2>
        <button class="highlights-secondary-botton">Button</button>
      </div>
      <div class="highlights-secondary-box-grey"></div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.highlights {
  margin-bottom: 5px;
}

.highlights-manin {
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
}

.highlights-manin-box-grey {
  width: 300px;
  height: 500px;
  background-color: #d4d4d4;
}

.highlights-manin-written {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.highlights-manin-title {
  font-size: 2rem;
  color: black;
}

.highlights-manin-subtitle {
  color: black;
}

.highlights-manin-botton {
  color: white;
  padding: 24px 32px;
  background: #e02b57;
  border-radius: 100px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: bold;
  max-width: 130px;
}

.highlights-secondary {
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
}

.highlights-secondary-box-grey {
  width: 300px;
  height: 500px;
  background-color: #d4d4d4;
}

.highlights-secondary-written {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.highlights-secondary-title {
  font-size: 2rem;
  color: black;
}

.highlights-secondary-subtitle {
  color: black;
}

.highlights-secondary-botton {
  color: white;
  padding: 24px 32px;
  background: #e02b57;
  border-radius: 100px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: bold;
  max-width: 130px;
}
</style>