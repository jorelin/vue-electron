<!--
 * @Author: shiyuanyuan
 * @Date: 2020-04-03 16:46:35
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-27 15:40:19
 * @Description: 
 -->

<template>
  <div>
    <h1>This is an form validation</h1>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
   
    <p>{{ msss }}</p>
    <button type="primary" @click="show">验证</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
interface Person {
  name: string;
  age: number;
}
@Component
export default class AboutVue extends Vue {
  @Prop({ type: Object }) readonly comp!: { key: number; name: string };
  @Prop({ type: String }) readonly cname!: string;
  @Watch('msss')
  onMsssChanged(){
    console.log('change mssss。。。。。')
  }
  private message = "www";
  private msss = 1999;
  private person: Person = {
    name: "dddd",
    age: 10
  };
  show(): boolean {
    this.msss++;
    console.log(this.msss, this.person.name, this.comp.key,this.$props);
    return this.msss > 0;
  }
}
</script>
