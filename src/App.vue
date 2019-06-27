<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>
<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
  name: "app",
  components: {
    Header,
    Main
  }
};
</script>
<style >
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  background-color: #f4f4f4;
}
</style>

