<template>
  <div v-if="topics" class="topics">
    <ul>
      <li v-for="(topic, index) in topics" :key="index">
        <div v-if="!topic.collect" class="shoucang">
          <span title="收藏" @click="()=>{
            collect(topic.id,index)}">收藏</span>
        </div>
        <div v-else class="shoucang" @click="()=>{
            unCollect(topic.id,index)}">取消收藏</div>
        <div class="content">
          <a :href="topic.link">
            <h3>{{topic.title}}</h3>
          </a>
          <span>作者:{{topic.author}}</span>
          <span>分类:{{topic.superChapterName}}/{{topic.chapterName}}</span>
          <span>时间:{{topic.niceDate}}</span>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>请稍等。。。</div>
</template>
<script>
export default {
  name: "topics",
  computed: {
    topics() {
      return this.$store.state.topics.topics;
    }
  },
  created() {
    this.$store.dispatch("getTopics");
  },
  methods: {
    collect(id, index) {
      if (sessionStorage.username) {
        this.$store.dispatch("collect", { id, index });
      } else {
        alert("请登录");
      }
    },
    unCollect(id, index) {
      if (sessionStorage.username) {
        this.$store.dispatch("unCollect", { id, index });
      } else {
        alert("请登录");
      }
    }
  }
};
</script>
<style>
.topics {
  width: 100%;
}

.topics > ul > li {
  display: flex;
  padding-left: 20px;
  background-color: #fff;
  height: 96px;
  border-bottom: 1px solid #ccc;
}
.topics > ul > li > div > a {
  color: #2c3134;
}
.topics > ul > li h3 {
  font-size: 19px;

  line-height: 60px;
}
.topics > ul > li > .content > span {
  margin-right: 20px;
  font-size: 14px;
}
.topics > ul > li > .shoucang {
  width: 80px;
  justify-content: center;
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
