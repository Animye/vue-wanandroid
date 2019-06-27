<template>
  <div v-if="banner.length" :style="{width:'870px'}" class="banner">
    <div></div>
    <div class="swiper-container first">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide left"
          :style="{position:'relative'}"
          v-for="(left, index) in banner.slice(0,2)"
          :key="index"
        >
          <a :href="left.url">
            <img :src="left.imagePath" alt :style="{width:'100%'}">
            <p>{{left.title}}</p>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="swiper-container second" :style="{width:'290px'}">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :style="{height:'160px'}"
          v-for="(item, index) in banner.slice(2)"
          :key="index"
        >
          <a :href="item.url">
            <img :src="item.imagePath" alt :style="{width:'100%'}">
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "banner",
  computed: {
    banner() {
      return this.$store.state.banner.banner;
    }
  },
  created() {
    this.$store.dispatch("getBanner");
  },
  methods: {
    v() {
      new Swiper(".first", {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        observer: true,
        observeParents: true
      });
      new Swiper(".second", {
        direction: "vertical",
        slidesPerView: 2,
        loop: true,
        observer: true,
        observeParents: true
      });
    }
  },
  updated() {
    this.v();
  }
};
</script>
<style scoped>
.banner {
  display: flex;
}
.swiper-container {
  width: 578px;
  height: 280px;
  margin: 0;
}
.swiper-slide img {
  display: block;
  cursor: pointer;
}
.left p {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding-left: 20px;
  line-height: 40px;
}
</style>