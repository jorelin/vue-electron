<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      now , write your app!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "./style.scss";
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public sss = 1111;
}
</script>
