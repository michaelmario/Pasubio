<template>
  <div id="app">
    <div class="container">
      <div class="w3-row">
        <div class="w3-col">
          <header>
            <div class="w3-col m3">
              <div class="w3-dropdown-hover w3-hide-small notification">
                <button
                  class="w3-button w3-padding-large"
                  title="Notifications"
                >
                  <img src="https://static.parastorage.com/services/linguist-flags/1.480.0/assets/flags/round/USA.png" alt="English">
                  <span class="w3-badge w3-right w3-small w3-blue" id="languages">EN</span>
                </button>
                <div
                  class="w3-dropdown-content w3-card-4 w3-bar-block"
                  style="width: 300px"
                >
                  <a href="#" class="w3-bar-item w3-button"
                    >Franch</a
                  >
                  <a href="#" class="w3-bar-item w3-button"
                    >Italien</a
                  >
                  <a href="#" class="w3-bar-item w3-button"
                    >English</a
                  >
                </div>
              </div>
            </div>
            <div class="w3-col m6 w3-center">
              <h1>Architecture Design Pasubio</h1>
              <h3>Your Furniture Store</h3>
            </div>
            <div class="w3-col m3">
              <div class="logoImg">
                <img
                  src="https://via.placeholder.com/150"
                  alt="logo"
                  title="logo"
                />
              </div>
            </div>
          </header>
        </div>
        <div class="w3-col">
          <div id="nav" class="w3-container">
            <router-link to="/">
              <div class="btnNav w3-button">Home</div>
            </router-link>
            <router-link to="/products">
              <div class="btnNavCenter w3-button">Products</div>
            </router-link>
            <router-link to="/allProducts">
              <div class="btnNavCenter w3-button">AllProducts</div>
            </router-link>
            <router-link to="/about">
              <div class="btnNavCenter w3-button">About</div>
            </router-link>
            <router-link to="/contact">
              <div class="btnNavRight w3-button">Contact</div>
            </router-link>
          </div>
          <div class="w3-margin-top">
            <carousel-3d>
              <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <template
                  slot-scope="{ index, isCurrent, leftIndex, rightIndex }"
                >
                  <img
                    :data-index="index"
                    :class="{
                      current: isCurrent,
                      onLeft: leftIndex >= 0,
                      onRight: rightIndex >= 0,
                    }"
                    :src="slide.src"
                    class="w3-image"
                  />
                </template>
              </slide>
            </carousel-3d>
          </div>
        </div>
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Footer from "./components/Footer";
export default {
  data() {
    return {
      slides: [
        {
          title: "Seungri's Alleged",
          src: "/images/kit.jpg",
          desc: "1 dummy description text here...",
        },
        {
          title: "Emma",
          src: "/images/bar-hotel-modeno-1.jpg",
          desc: "2 dummy description text here...",
        },
        {
          title: "Kim Tae Hee",
          src: "/images/cuisine.jpg",
          desc: "3 dummy description text here...",
        },
        {
          title: "Kate",
          src:
            "http://cdn.koreaboo.com/wp-content/uploads/2016/12/gugudan-sejeong-1-360x270.jpg",
          desc: "4 dummy description text here...",
        },
        {
          title: "Sherry",
          src:
            "http://cdn.koreaboo.com/wp-content/uploads/2016/12/gugudan-sejeong-1-360x270.jpg",
          desc: "5 dummy description text here...",
        },
      ],
    };
  },
  components: { Carousel3d, Slide, Footer },

  methods: {},

  created() {},
};
</script>

<style>
</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  max-width: 80%;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
}
header {
  padding: 20px;
  min-height: 150px;
  height: 200px;
  border-bottom: 1px solid #ccc;
}
.w3-button {
  border: 2px solid #ccc !important;
  a:hover {
    color: red;
    background-color: blue !important;
  }
}
.btnNav {
  margin-bottom: 5px;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 2px solid #42b983;
  padding: 5px;
  text-align: center;
}
.btnNavCenter {
  margin-bottom: 5px;
  width: 200px;
  border: 2px solid #42b983;
  padding: 5px;
  text-align: center;
}
.btnNavRight {
  margin-bottom: 5px;
  width: 200px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid #42b983;
  padding: 5px;
  text-align: center;
}
#nav {
  margin-top: 5px;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #ccc;
  text-align: center;
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #000;
    }
  }
}
.mySlides {
  display: none;
}
.displayBlock {
  display: block;
}
#languages{
line-height: 3;
}
.notification{
  margin-top:30%;
}
</style>
