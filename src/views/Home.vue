<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AboutVue :comp="compData" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { myKey, PropData, cloneShadow } from "./views";
import HelloWorld from "@/container/Home/HelloWorld.vue";
import AboutVue from "@/container/About/About.vue";


@Component({
  components: {
    HelloWorld,
    AboutVue,
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
