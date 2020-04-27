<!--
 * @Author: shiyuanyuan
 * @Date: 2020-04-22 17:58:31
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-27 18:37:00
 * @Description: 
 -->
<template>
  <div class="login-vue" :style=" `background: ${backgroundImage}` ">
    <div class="container">
      <p class="title">WELCOME</p>
      <div class="input-c">
        <Input
          prefix="ios-contact"
          v-model="account"
          placeholder="用户名"
          clearable
          @on-blur="verifyAccount"
        />
        <p class="error">{{accountError}}</p>
      </div>
      <div class="input-c">
        <Input
          type="password"
          v-model="pwd"
          prefix="md-lock"
          placeholder="密码"
          clearable
          @on-blur="verifyPwd"
        />
        <p class="error">{{pwdError}}</p>
      </div>
      <p>{{Account.userInfo.pwd}}</p>
      <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登陆</Button>
      <Button type="primary" @click="changeTest">change</Button>
      <p class="account">
        <span @click="register">注册账号</span> |
        <span @click="forgetPwd">忘记密码</span>
      </p>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { AuthState } from '@/store/types/interfaceState';
import "./style.scss";

@Component({
  components: {}
})
export default class Login extends Vue {
  @State(state => state.Account) Account!: AuthState;
  // @State(({ Account:{ userInfo, name } }) => ({userInfo, name})) 
  //   Account!: AuthState;

  account: string = "admin";
  pwd: string = "admin";
  accountError: string = "";
  pwdError: string = "";
  isShowLoading: boolean = false;
  backgroundImage = "";
  created() {
    this.backgroundImage = `url(${require("../../public/assets/bg0" + new Date().getDay() + ".jpg")})`;
    console.log(this.Account)
  }
  verifyAccount(): void {
    if (this.account !== "admin") {
      this.accountError = "账号为admin";
    } else {
      this.accountError = "";
    }
  }
  verifyPwd(): void {
    if (this.pwd !== "admin") {
      this.pwdError = "密码为admin";
    } else {
      this.pwdError = "";
    }
  }
  register(): void {}
  forgetPwd(): void {}
  submit(): void {
    if (this.account !== "admin") {
      this.accountError = "账号为admin";
    }
    if (this.pwd !== "admin") {
      this.pwdError = "密码为admin";
    }
    // this.$router.push({ path: this.redirect || "/home" });
  }
  changeTest(): void {
    this.$store.commit({
      type: "Account/SAVE_USERINFO",
      payload: { pwd: "20" }
    });
  }
}

</script>

