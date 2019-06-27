<template>
  <div class="home">
    <div class="home-left">
      <Banner/>
      <ul class="home-list">
        <li>
          <router-link to="/index" :class="isHome?'router-link-active':''">最新博文</router-link>
        </li>
        <li>
          <router-link to="/pindex">最新项目</router-link>
        </li>
      </ul>
      <router-view :key="$route.path"></router-view>
    </div>
    <div class="home-right">
      <div class="todo">
        <button>
          <router-link to="/lg/todo/list/0">
            <span>+</span>代办清单
          </router-link>
        </button>
      </div>
      <div class="friend">
        <h3>常用网站</h3>
        <p>
          <a
            :href="item.link"
            v-for="(item, index) in friend"
            :key="index"
            :style="{color:item.iconcolor==''||item.iconcolor==null?'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')':item.iconcolor}"
          >{{item.name}}</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "./Banner";
export default {
  name: "home",
  components: { Banner },
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
    friend() {
      return this.$store.state.friend.friend;
    }
  },
  created() {
    this.$store.dispatch("getFriend");
  }
};
</script>
<style>
.home {
  margin-left: 90px;
  display: flex;
  margin-top: 40px;
}
.home-left {
  width: 872px;
}
.home-right {
  margin-left: 50px;
  width: 300px;
}
.todo {
  background-color: #fff;
  margin-bottom: 20px;
  text-align: center;
  padding: 10px 0;
}
.todo > button {
  cursor: pointer;
  width: 200px;
  outline: 0;
  border: 0;
  background-color: #3498db;

  line-height: 30px;
}
.todo a {
  color: #fff;
}
.friend {
  background-color: #fff;
}
.friend > h3 {
  line-height: 42px;
  font-weight: normal;
  border-bottom: 2px solid #82b6d3;
  padding-left: 15px;
  font-size: 16px;
}
.friend > p > a {
  display: inline-block;
  margin: 5px 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
.home-list {
  display: flex;
  background-color: #fff;
  border-bottom: 2px solid #82b6d3;
}
.home-list > li {
  width: 100px;
  text-align: center;
  line-height: 50px;
}
.home-list > li > a {
  color: #333333;
}
.home-list > li .router-link-active {
  color: #016b98;
}
</style>
