<template>
  <div class="container-fluid" id="app">
    <div class="row">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <router-link to="/" class="navbar-brand">
            <img src="/images/logomobilpiu.jpg" alt="logo" id="logoImg" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            @click="toggleNav()"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active btnNav">
                <router-link to="/" class="nav-link">
                  <i class="fas fa-home"></i> HOME
                </router-link>
              </li>
              <li class="nav-item btnNavCenter">
                <router-link to="/about" class="nav-link">
                  <i class="fas fa-tasks"></i> ALL PRODUCTS
                </router-link>
              </li>
              <li class="nav-item btnNavCenter">
                <a href="/blog" class="nav-link">
                  <i class="fab fa-blogger"></i> BLOG
                </a>
              </li>
              <li class="nav-item btnNavRight">
                <router-link to="/contact" class="nav-link">
                  <i class="far fa-address-card"></i> CONTACT
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <aside :class="{ active: active }">
          <nav>
            <ul class="mt-3">
             <li class="nav-item active btnNav mb-3">
                <router-link to="/" class="nav-link">
                  <i class="fas fa-home"></i> HOME
                </router-link>
              </li>
              <li class="nav-item btnNavCenter mb-3">
                <router-link to="/about" class="nav-link">
                  <i class="fas fa-tasks"></i> ALL PRODUCTS
                </router-link>
              </li>
              <li class="nav-item btnNavCenter mb-3">
                <a href="/blog" class="nav-link">
                  <i class="fab fa-blogger"></i> BLOG
                </a>
              </li>
              <li class="nav-item btnNavRight mb-3">
                <router-link to="/contact" class="nav-link">
                  <i class="far fa-address-card"></i> CONTACT
                </router-link>
                </li> 
                </ul>
          </nav>
        </aside>
      </div>            
      <router-view />        
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer";
export default {
  data() {
    return {
      active: false,
    };
  },
  components: { Footer },

  methods:{
     close(){
       this.active = !this.active  
    },
    toggleNav () {
      this.$parent.$emit('toggleNav')
    },
  },
    mounted() {
      this.$parent.$on("toggleNav", () => {
        this.active = !this.active;
      });
    },
    created() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #1407013d;
}
header {
  padding: 20px;
  min-height: 150px;
  height: 200px;
  border-bottom: 1px solid #ccc;
}
#logoImg {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-left:20px;
}
.btnNav {
  margin-bottom: 5px;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 2px solid #be9247;
  padding: 5px;
  text-align: center;
}
.btnNav:hover {
  background-color: rgba(90, 38, 8, 0.5);
  color: white;
}
.btnNavCenter {
  margin-bottom: 5px;
  width: 200px;
  border: 2px solid #be9247;
  padding: 5px;
  text-align: center;
}
.btnNavCenter:hover {
  background-color: rgba(90, 38, 8, 0.5);
  color: white;
}
.btnNavRight {
  margin-bottom: 5px;
  width: 200px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid #be9247;
  padding: 5px;
  text-align: center;
}
.btnNavRight:hover {
  background-color: rgba(90, 38, 8, 0.5);
  color: white;
}
#navbarNav {
  margin-left: 50px;
}
#nav {
  margin-top: 5px;
  width: 100%;
  height: 50px;
  border-bottom: 4px solid #000;
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
aside{
   display: none;
  width: 200px;
  background :#000;
  height:100vh;
  }
.carousel-3d-container {
  height: 550px !important;
}
.carousel-3d-slider {
  margin-top: 130px !important;
  width: 380px !important;
  height: 325px !important;
}

#front-page {
  color: #fff;
  width: 100%;
  height: 700px;
  background-image: url("./assets/carousel-1.jpg");
}



@media screen and (max-width: 768px) {
  #nav {
    display: none;
  }
  ul li{
  list-style: none;
  }
  #logoImg {
   margin-left:40px;
}
  aside.active{
    display:block;
    position:fixed;
    z-index:4;
    margin-top:76px;
    height:315px;
}
a{
  color: #fff !important;
   
 }
}
</style>
