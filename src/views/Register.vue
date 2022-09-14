<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
import RegisterStep1 from "../components/RegisterStep/RegisterStep1.vue";
import RegisterStep2 from "../components/RegisterStep/RegisterStep2.vue";
import RegisterStep3 from "../components/RegisterStep/RegisterStep3.vue"

export default {
  name: "Register",
  components: {
    RegisterStep1,
    RegisterStep2,
    RegisterStep3
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>