<template>
  <main class="highlights">
    <section class="highlights-main">
      <div class="highlights-main-box-grey"></div>
      <div class="highlights-main-written">
        <h1 class="highlights-main-title">Lorem ipsum</h1>
        <h2 class="highlights-main-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna blandit
          urna sit in dictum aliquam. Tempus, viverra tincidunt risus eget
          aliquam ipsum.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Urna blandit urna sit in dictum aliquam. Tempus, viverra
          tincidunt risus eget aliquam ipsum.
        </h2>
        <button class="highlights-main-botton">Button</button>
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

.highlights-main {
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
}

.highlights-main-box-grey {
  width: 300px;
  height: 500px;
  background-color: #d4d4d4;
}

.highlights-main-written {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.highlights-main-title {
  font-size: 2rem;
  color: black;
}

.highlights-main-subtitle {
  color: black;
}

.highlights-main-botton {
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

.highlights-main-botton:hover{
  background-color: grey;
  cursor: pointer;
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

.highlights-secondary-botton:hover{
  background-color: grey;
  cursor: pointer;
}
</style>