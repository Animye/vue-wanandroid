<template>
  <header>
    <ul>
      <li>
        <router-link to="/" :exact="isExact?true:false">首页</router-link>
      </li>
      <li>
        <router-link to="/projectindex">项目</router-link>
      </li>
      <li>
        <router-link to="/tree">体系</router-link>
      </li>
      <li>
        <router-link to="/wxarticle/list/408/1">公众号</router-link>
      </li>
      <li>
        <router-link to="/navi">导航</router-link>
      </li>
      <li>
        <router-link to="/project">项目分类</router-link>
      </li>
      <li>
        <router-link to="/tools">工具</router-link>
      </li>
      <li>
        <router-link to="/lg/collect">{{userInfo?'收藏':''}}</router-link>
      </li>
    </ul>
    <div>
      <input type="text" v-model="sousuo">
      <router-link to="/article/query">
        <button @click="search">搜索</button>
      </router-link>
    </div>

    <p v-if="!userInfo">
      <span @click="show=!show">登录</span>
      <span @click="show2=!show2">注册</span>
    </p>
    <div v-else :style="{position:'realitive'}">
      <p class="show" @mouseenter="show1=true" @mouseleave="leave">{{userInfo}}</p>
      <div
        class="show1"
        :style="{display:show1?'flex':'none'}"
        @mouseenter="show1=true"
        @mouseleave="show1=false"
      >
        <span>用户中心</span>
        <span @click="logout">退出登录</span>
      </div>
    </div>
    <div class="box" :style="{display:show?'block':'none'}">
      <h3>
        <span>登录</span>
        <span @click="show=false">X</span>
      </h3>
      <div>
        <input type="text" placeholder="请输入用户名" v-model="zhanghao">
        <input type="text" name id placeholder="请输入密码" v-model="mima">
        <p>
          <span @click="show=false,show2=true">去注册</span>
        </p>
        <button @click="login">登录</button>
      </div>
    </div>
    <div class="box" :style="{display:show2?'block':'none'}">
      <h3>
        <span>注册</span>
        <span @click="show2=false">X</span>
      </h3>
      <div>
        <input type="text" placeholder="请输入用户名" v-model="zhanghao">
        <input type="text" name id placeholder="请输入密码" v-model="mima">
        <input type="text" name id placeholder="请再次输入密码" v-model="mimaagain">
        <p>
          <span @click="show=true,show2=false">去登录</span>
        </p>
        <button @click="register">注册</button>
      </div>
    </div>
    <div class="yinying" :style="{display:show?'block':'none'}"></div>
    <div class="yinying" :style="{display:show2?'block':'none'}"></div>
  </header>
</template>
<script>
import axios from "axios";
export default {
  name: "wanandroid-header",
  data: () => ({
    show: false,
    zhanghao: "animye",
    mima: "123456",
    mimaagain: "123456",
    show1: false,
    show2: false,
    sousuo: "bb"
  }),
  computed: {
    isExact() {
      return (
        this.$route.path.indexOf("index") === -1 ||
        this.$route.path.indexOf("project") !== -1
      );
    },
    userInfo: {
      get: function() {
        return this.$store.state.login.userInfo;
      },
      set: function() {}
    }
  },
  created() {
    if (sessionStorage.username) {
      this.login();
    }
  },
  methods: {
    search() {
      const c = this.sousuo;
      this.$store.dispatch("getSearch", c);
    },
    leave() {
      setTimeout(() => {
        this.show1 = false;
      }, 500);
    },
    login() {
      const a = this.zhanghao;
      const b = this.mima;
      this.$store.dispatch("getUserInfo", { a, b });
      this.show = false;
    },
    logout() {
      this.$store.dispatch("logout");
      sessionStorage.clear();
    },
    register() {
      const a = this.zhanghao;
      const b = this.mima;
      let qs = require("qs");
      let data = qs.stringify({
        username: a,
        password: b,
        repassword: b
      });
      axios.post("/api/user/register", data).then(() => {});
    }
  },
  watch: {
    sousuo() {
      this.search();
    }
  }
};
</script>
<style>
header {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}
header > div {
  display: flex;
  align-items: center;
}
header > div > input {
  width: 178px;
  height: 32px;
}
header > ul {
  display: flex;
}
header > ul > li {
  padding: 0 15px;
  display: flex;
}
header > ul > li > a {
  cursor: pointer;
  line-height: 60px;
  color: #276692;
  border-bottom: 2px solid #fff;
}
header > ul > li > a:hover {
  border-bottom: 2px solid #276692;
}
header > ul > li > a:hover {
  border-bottom: 2px solid #276692;
}
header > ul > li > .router-link-active {
  border-bottom: 2px solid #276692;
}
header p {
  line-height: 60px;
  margin-right: 100px;
}
header > p > span {
  cursor: pointer;
}
header > p > span + span {
  margin-left: 10px;
}
.box {
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -140px;
  margin-left: -200px;
  background-color: #fff;
  width: 400px;
  height: 320px;
}
.box > h3 {
  font-size: 18px;
  border-bottom: 1px solid #eeeeee;
  line-height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
}
.box > h3 > span {
  cursor: pointer;
}
.box > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box > div > p {
  width: 342px;
  display: flex;
  justify-content: flex-end;
}
.box > div > p > span {
  font-size: 14px;
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: #3498db;
}
.box > div > input {
  width: 342px;
  line-height: 37px;
  outline: 0;
  text-indent: 32px;
  margin-top: 15px;
  border: 1px solid #adadad;
}
.box > div > button {
  font-size: 20px;
  cursor: pointer;
  outline: 0;
  border: 0;
  width: 342px;
  line-height: 40px;
  background-color: #3498db;
  color: #fff;
  text-align: center;
}
.yinying {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.show1 {
  /* display: none; */
  color: #006998;
  background-color: #fff;
  line-height: 60px;
  position: absolute;
  top: 62px;
  right: 150px;
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
</style>
