<template>
  <div class="collect">
    <h3>收藏的博文</h3>

    <ul>
      <li v-for="(item, index) in collect" :key="index">
        <div>
          <p>{{item.title}}</p>
          <p>
            <span>作者：{{item.author}}</span>
            <span>分类：{{item.chapterName}}</span>
            <span>收藏时间：{{item.niceDate}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "collect",
  created() {
    this.$store.dispatch("getCollect");
  },
  computed: {
    collect() {
      return this.$store.state.collect.collect;
    }
  }
};
</script>
<style>
.collect {
  margin-top: 30px;
  background-color: #fff;
  margin-left: 90px;
  width: 872px;
}
.collect > h3 {
  line-height: 42px;
  border-bottom: 2px solid #82b6d3;
  padding-left: 10px;
}
.collect > ul > li {
  height: 77px;
  border-bottom: 1px solid #ccc;
}
.collect > ul > li > div {
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
}
.collect > ul > li > div > p {
  line-height: 30px;
}
.collect > ul > li > div > p > span {
  color: #999;
  font-size: 12px;
  margin-right: 6px;
}
</style>
