<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Open+Sans&display=swap');

* {
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.9;
    color: white;
    justify-content: space-evenly;
    align-items: center;
}

a:hover {
    opacity: 1;
}

body {
  width: 100%;
  height: 100vh;
}

</style>
