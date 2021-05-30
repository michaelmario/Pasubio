<template>
  <div class="AllProduct">    
    <ul class="nav nav-pills mt-4">
      <li class="active">
        <b-button v-b-toggle.collapse-1 class="m-1">Aurora Catalog</b-button>
      </li>
      <li>
        <b-button v-b-toggle.collapse-2 class="m-1">Aida Catalog</b-button>
      </li>
      <li>
        <b-button v-b-toggle="'collapse-3'" class="m-1">Aurora list</b-button>
      </li>
      <li>
        <b-button v-b-toggle="'collapse-4'" class="m-1">Aida List</b-button>
      </li>
       <li>
        <b-button v-b-toggle="'collapse-5'" class="m-1">Brochure 2021</b-button>
      </li>
    </ul>
    <hr/>
    <!-- Element to collapse -->
    <b-collapse id="collapse-1">
      <iframe src="/images/AURORA Catalogo.pdf" width="100%" height="700px">
      </iframe>
    </b-collapse>
    <b-collapse id="collapse-2">
      <iframe
        src="/images/aidaCatalogo.pdf"
        width="100%"
        height="700px"
      >
      </iframe>
    </b-collapse>
    <b-collapse id="collapse-3">
      <iframe src="/images/AURORA Listino prezzi.pdf" width="100%" height="700px">
      </iframe>
    </b-collapse>
    <b-collapse id="collapse-4">
      <iframe src="/images/Aida Listino prezzi.pdf" width="100%" height="700px">
      </iframe>
    </b-collapse>
    <b-collapse id="collapse-5">
      <iframe src="/images/BROCHURE 2021_.pdf" width="100%" height="700px">
      </iframe>
    </b-collapse>
    <carousel-3d>
      <slide :index="0">
        <b-card
          title="Aurora Catalog"
          img-src="/images/carousel/aurora.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-button v-b-toggle.collapse-1 class="m-1 mb-2">Aurora Catalogo</b-button
          >
        </b-card>
      </slide>
      <slide :index="1">
        <b-card
          title="Aurora Catalog list"
          img-src="/images/carousel/1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-button v-b-toggle.collapse-2 class="m-1">Aida Catalog</b-button>
        </b-card>
         </slide>
       <slide :index="2">
         <b-card
          title="Aurora Catalogo"
          img-src="/images/carousel/aurora.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-button v-b-toggle.collapse-3 class="m-1">Aurora list</b-button>
        </b-card>          
           </slide>
        <slide :index="3">
          <b-card
          title="Aurora Catalogo"
          img-src="/images/carousel/1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-button v-b-toggle.collapse-4 class="m-1">Aurora list</b-button> 
        </b-card>          
           </slide>
        <slide :index="4"> 
          <b-card
          title="Brochure 2021"
          img-src="/images/carousel/diamon.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-button v-b-toggle.collapse-5 class="m-1 mb-2">Brochure 2021</b-button
          >
        </b-card>         
         
           </slide>

    </carousel-3d>
    
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "about",
  data() {
    return {
     
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
<style lang="css">
.AllProduct {
  min-height: 650px;
}
.carousel-3d-container{
  height:500px ! important;
  margin:0px auto !important;
}
.carousel-3d-slide {
  height: 370px !important;
}
.carousel-3d-slider{
 margin-top: 60px !important;
}
.carousel-3d-slide img {
  height:250px !important;
}
</style>
