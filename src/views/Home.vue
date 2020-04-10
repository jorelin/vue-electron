<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <img alt="Vue logo" src="assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AboutVue :comp="compData" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/container/Home/HelloWorld.vue";
import AboutVue from "@/container/About/About.vue";
import { Component, Vue } from "vue-property-decorator";
import { myKey, PropData, cloneShadow } from "./views";

@Component({
  components: {
    HelloWorld,
    AboutVue
  }
})
export default class Home extends Vue {
  comp = "home";
  compData: PropData = {
    name: this.comp,
    key: myKey
  };
  created() {
    const myClone = cloneShadow({ x: "1", k: "888" }, { y: "2" });
    console.log(myClone, "cloneShadow");
  }
}
</script>
