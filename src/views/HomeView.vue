<template>
  <html>
    <body>
      <div>
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
import Menu from "../components/Menu.vue";
import Banner from "../components/Banner.vue";
import Highlights from "../components/Highlights.vue";
import Strip from "../components/Strip.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Menu,
    Banner,
    Highlights,
    Strip,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

</style>