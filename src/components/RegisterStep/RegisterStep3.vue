<template>
  <html>
    <body>
      <header>
        <nav class="navigation-bar">
          <img
            class="navbar-image"
            src="@/img/arrow.png"
            @click="goBack"
            alt="Tecla de voltar"
          />
          <h4 class="navbar-title">Formulário</h4>
        </nav>
      </header>
      <div class="main">
        <form class="form" id="app">
          <div class="container">
            <img
              class="navigation-three"
              src="@/img/navigation_three.png"
              alt="Etapa 3 da Navegação"
            />
            <img
              class="container-check"
              src="@/img/check.jpg"
              alt="Cadastro finalizado"
            />
            <div class="container-title">
              <h3>Cadastro finalizado</h3>
              <p class="container-text">
                Caso deseja retornar à página inicial clique no botão a baixo
              </p>
            </div>
            <router-link to="/" class="navbar-button">Continuar</router-link>
          </div>
        </form>
        <img class="sideimg" src="@/img/felipe.jpg" alt="Imagem lateral" />
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "RegisterStep3",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
.main {
  display: flex;
}

.form {
  margin-top: 40px;
  width: 65%;
}

.navigation-bar {
  position: fixed;
  top: 0;
  background-color: rgb(224, 43, 87);
  width: 100%;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: flex;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
  color: white;
  text-transform: uppercase;
}

.container {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  color: black;
  padding: 30px;
  margin: 0 auto;
}

.navbar-image {
  left: 10px;
  position: fixed;
  cursor: pointer;
}

.container-check {
  margin: 0px auto;
  width: 62px;
  height: 62px;
}

.container-title {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}

.navigation-three{
  width: 460px;
  margin-bottom: -25px;
  margin-top: -80px;
}

.navbar-button {
  background-color: black;
  width: 130px;
  border: 0;
  border-radius: 8px;
  color: white;
  margin: 10px auto;
  font-weight: 800;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
}

.container-text {
  font-size: 15px;
  margin-top: 20px;
  font-weight: 500;
  text-align: center;
}

.sideimg {
  margin-top: 40px;
  width: 35%;
}

.sideimg div {
  padding: 8px;
  font-size: 24px;
  display: block;
}
</style>