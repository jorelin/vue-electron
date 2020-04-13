<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Layout from "./views/Layout/Layout.vue";
export default {
  name: "App",
  components: {
    Layout
  }
};
</script>