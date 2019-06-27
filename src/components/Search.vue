<template>
  <div class="search">
    <div class="search-left">
      <h3>搜索关键词</h3>
      <div>
        <ul>
          <li v-for="(item, index) in search" :key="index" v-html="item.title"></li>
        </ul>
      </div>
    </div>
    <div class="search-right"></div>
  </div>
</template>
<script>
export default {
  name: "search",
  computed: {
    search() {
      return this.$store.state.search.search;
    }
  },
  created() {}
};
</script>
<style>
.search {
  margin-left: 90px;
  display: flex;
  margin-top: 40px;
}
.search-left {
  background-color: #fff;
  width: 872px;
}
.search-left > h3 {
  line-height: 42px;
  border-bottom: 2px solid #6aaddc;
}
.search-left > div > ul > li {
  height: 96px;
}
.search-right {
  margin-left: 50px;
  width: 300px;
}
</style>
