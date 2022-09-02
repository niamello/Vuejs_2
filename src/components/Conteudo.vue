<template>
  <main class="conteudo">
    <section class="conteudo-principal">
      <div class="conteudo-principal-caixa-cinza"></div>
      <div class="conteudo-principal-escrito">
        <h1 class="conteudo-principal-titulo">Lorem ipsum</h1>
        <h2 class="conteudo-principal-subtitulo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna blandit
          urna sit in dictum aliquam. Tempus, viverra tincidunt risus eget
          aliquam ipsum.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Urna blandit urna sit in dictum aliquam. Tempus, viverra
          tincidunt risus eget aliquam ipsum.
        </h2>
        <button class="conteudo-principal-botao">Button</button>
      </div>
    </section>
    <section class="conteudo-secundario">
      <div class="conteudo-secundario-escrito">
        <h1 class="conteudo-secundario-titulo">Lorem ipsum</h1>
        <h2 class="conteudo-secundario-subtitulo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna blandit
          urna sit in dictum aliquam. Tempus, viverra tincidunt risus eget
          aliquam ipsum.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Urna blandit urna sit in dictum aliquam. Tempus, viverra
          tincidunt risus eget aliquam ipsum.
        </h2>
        <button class="conteudo-secundario-botao">Button</button>
      </div>
      <div class="conteudo-secundario-caixa-cinza"></div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.conteudo {
  margin-bottom: 5px;
}

.conteudo-principal {
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
}

.conteudo-principal-caixa-cinza {
  width: 300px;
  height: 500px;
  background-color: #d4d4d4;
}

.conteudo-principal-escrito {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.conteudo-principal-titulo {
  font-size: 2rem;
  color: black;
}

.conteudo-principal-subtitulo {
  color: black;
}

.conteudo-principal-botao {
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

.conteudo-secundario {
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
}

.conteudo-secundario-caixa-cinza {
  width: 300px;
  height: 500px;
  background-color: #d4d4d4;
}

.conteudo-secundario-escrito {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.conteudo-secundario-titulo {
  font-size: 2rem;
  color: black;
}

.conteudo-secundario-subtitulo {
  color: black;
}

.conteudo-secundario-botao {
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