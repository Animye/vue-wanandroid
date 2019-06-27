<template>
  <div class="project">
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <div style="width:540px">
          <h3>{{project.title}}</h3>
          <p>{{project.desc}}</p>
        </div>
        <a href>
          <img :src="project.envelopePic" alt>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "projects",
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  created() {
    this.$store.dispatch("getProjects");
  }
};
</script>
<style>
.project ul {
  background-color: #fff;
  padding-left: 50px;
}
.project ul > li {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 40px 0;
}
.project ul > li > div > p {
  font-size: 14px;
  color: #545c63;
  line-height: 20px;
  margin: 10px 0;
}
.project ul > li > a {
  width: 213px;
  height: 78px;
  overflow: hidden;
  margin-left: 50px;
  margin-top: 20px;
}
.project ul > li > a > img {
  width: 213px;
}
</style>
