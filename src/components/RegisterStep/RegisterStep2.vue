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
        <form class="form" id="app" @submit.prevent="checkForm">
          <div class="container">
            <div class="container-title">
              <h3 class="subtitle">Dados pessoais</h3>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
                volutpat in iaculis nec nibh sinsl tellus.
              </p>
            </div>

            <div class="input-group">
              <div class="input">
                <label for="country">País onde reside</label>
                <input
                  id="country"
                  v-model="country"
                  type="text"
                  name="country"
                />
                <p v-if="errorCountryEmpty" class="textError">
                  País não pode ser vazio
                </p>
              </div>
              <div class="input">
                <label for="city">Cidade</label>
                <input id="city" v-model="city" type="text" name="city" />
                <p v-if="errorCityEmpty" class="textError">
                  Cidade não pode ser vazio
                </p>
              </div>
            </div>

            <div class="input-group">
              <div class="input">
                <label for="cep">CEP</label>
                <input id="cep" v-model="cep" type="text" name="cep" />
                <p v-if="errorCepEmpty" class="textError">
                  CEP não pode ser vazio
                </p>
              </div>
              <div class="input">
                <label for="address">Endereço</label>
                <input
                  id="address"
                  v-model="address"
                  type="text"
                  name="address"
                />
                <p v-if="errorAddressEmpty" class="textError">
                  Endereço não pode ser vazio
                </p>
              </div>
            </div>

            <div class="number">
              <label for="number">Number</label>
              <input id="number" v-model="number" type="text" name="number" />
              <p v-if="errorNumberEmpty" class="textError">
                Endereço não pode ser vazio
              </p>
            </div>

            <router-link to="step3" class="form-button" click="checkForm"
              >Continuar</router-link
            >
          </div>
        </form>
        <img class="sideimg" src="@/img/felipe.jpg" alt="Imagem lateral" />
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "RegisterStep2",
  data() {
    return {
      errorCountryEmpty: false,
      errorCityEmpty: false,
      errorCepEmpty: false,
      errorAddressEmpty: false,
      errorNumberEmpty: false,
      country: null,
      city: null,
      cep: null,
      address: null,
      number: null,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    checkCountry() {
      if (!this.country) {
        this.errorCountryEmpty = true;
        return false;
      } else {
        this.errorCoutryEmpty = false;
        return true;
      }
    },
    checkCity() {
      if (!this.city) {
        this.errorCityEmpty = true;
        return false;
      } else {
        this.errorCityEmpty = false;
        return true;
      }
    },
    checkCep() {
      if (!this.cep) {
        this.errorCepEmpty = true;
        return false;
      } else {
        this.errorCepEmpty = false;
        return true;
      }
    },
    checkAddress() {
      if (!this.address) {
        this.errorAddressEmpty = true;
        return false;
      } else {
        this.errorAddressEmpty = false;
        return true;
      }
    },
    checkNumber() {
      if (!this.number) {
        this.errorNumberEmpty = true;
        return false;
      } else {
        this.errorNumberEmpty = false;
        return true;
      }
    },
    checkForm() {
      const isCountryCorrect = this.checkCountry();
      const isCityCorrect = this.checkCity();
      const isCepCorrect = this.checkCep();
      const isAddressCorrect = this.checkAddress();
      const isNumberCorrect = this.checkNumber();
      if (
        isCountryCorrect &&
        isCityCorrect &&
        isCepCorrect &&
        isAddressCorrect &&
        isNumberCorrect
      );
    },
  },
};
</script>

<style scoped>
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

.input {
  display: flex;
  flex-direction: column;
  width: calc(50% - 8px);
}

.input:first-child {
  margin-right: 16px;
}

.input-group {
  display: flex;
  margin-top: 20px;
}

input {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid black;
}

label {
  font-size: 13px;
}

.number {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.navbar-image {
  left: 10px;
  position: fixed;
  cursor: pointer;
}

.container-title {
  display: flex;
  flex-direction: column;
}

.subtitle {
  font-size: 25px;
  margin-top: 35px;
  font-weight: 800;
}

.text {
  font-size: 15px;
  margin-top: 20px;
  font-weight: 500;
}

.form-button {
  background-color: rgb(224, 43, 87);
  width: 120px;
  border: 0;
  border-radius: 8px;
  color: white;
  margin-top: 30px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 0px;
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