<template>
  <div class="about">
    <router-link to="/">Home</router-link>
    <AboutVue :comp="compData" />
  </div>
</template>

<script lang="ts">
import AboutVue from "@/container/About/About.vue";
import { Component, Vue } from "vue-property-decorator";
import { PropData } from "./views";

@Component({
  components: {
    AboutVue
  }
})
export default class About extends Vue {
  comp = "about";
  public compData: PropData = {
    msg: "this is home",
    key: 2
  };
}
</script>
