<!--
 * @Author: shiyuanyuan
 * @Date: 2020-04-03 16:46:35
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-13 15:26:22
 * @Description: 
 -->

<template>
  <div>
    <h1>This is an form validation</h1>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
   
    <p>{{ msss }}</p>
    <a-button type="primary" @click="show">Primary</a-button>
    <!-- <Button type="primary" @click="show">验证</Button> -->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Button } from 'ant-design-vue';
interface Person {
  name: string;
  age: number;
  
}
Vue.use(Button);
@Component
export default class AboutVue extends Vue {
  @Prop({ type: Object }) readonly comp!: { key: number; name: string };
  private message = "www";
  private msss = 1999;
  private person: Person = {
    name: "dddd",
    age: 10
  };
  show(): boolean {
    this.msss++;
    console.log(this.msss, this.person.name, this.comp.key);
    return this.msss > 0;
  }
}
</script>
