<template>
  <html>
    <body>
      <div id="app">
        <h1>{{ dados }}</h1>
        <Menu />
        <Banner />
        <Highlights />
        <Strip />
        <Footer />
      </div>
    </body>
  </html>
</template>

<script>
import Menu from "./Menu.vue";
import Banner from "./Banner.vue";
import Highlights from "./Highlights.vue";
import Strip from "./Strip.vue";
import Footer from "./Footer.vue";

export default {
  name: "Texts",
  components: {
    Menu,
    Banner,
    Highlights,
    Strip,
    Footer,
  },
  props: {
    dados: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

</style>