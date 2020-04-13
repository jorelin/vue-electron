<!--
 * @Author: shiyuanyuan
 * @Date: 2020-04-13 15:27:12
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-13 16:44:16
 * @Description: 
 -->

<template>
  <div>
    <a-menu :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" mode="inline" theme="dark">
      <a-menu-item key="1">
        <router-link to="/">
          <a-icon type="pie-chart" />
          <span>Home</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/about">
          <a-icon type="desktop" />
          <span>About</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="mail" />
          <span>Navigation One</span>
        </span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" />
          <span>Navigation Two</span>
        </span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
          <a-menu-item key="13">Option 11</a-menu-item>
          <a-menu-item key="14">Option 12</a-menu-item>
          <a-menu-item key="15">Option 11</a-menu-item>
          <a-menu-item key="16">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";
import { Menu, Icon } from "ant-design-vue";
Vue.use(Menu);
Vue.use(Icon);
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {}
};
</script>