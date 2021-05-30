<template>
  <div class="home">
   <div class="mt-3">
     <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="4000"
      fade
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     <b-carousel-slide 
      img-src="/images/carousel/6.jpg"
      class="imgSlide"
      >
       </b-carousel-slide>
        <b-carousel-slide 
      img-src="/images/carousel/7.jpg"
      class="imgSlide"
      >
       </b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide
          img-src="/images/carousel/salon1.jpg"
          class="imgSlide"
        
      ></b-carousel-slide>
       <b-carousel-slide
          img-src="/images/carousel/kit4.jpg"
          class="imgSlide"
        
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      img-src="/images/carousel/aurora2.jpg" 
       class="imgSlide"
     >        
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
      img-src="/images/carousel/bar-hotel-modeno-1.jpg"
      class="imgSlide"
      >
       </b-carousel-slide>
        <b-carousel-slide 
      img-src="/images/carousel/2.jpg"
      class="imgSlide"
      >
       </b-carousel-slide>
        <b-carousel-slide 
      img-src="/images/carousel/3.jpg"
      class="imgSlide"
      >
       </b-carousel-slide>
        <b-carousel-slide 
      img-src="/images/carousel/4.jpg"
      class="imgSlide"
      >
       </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img          
            src="/images/carousel/diamon.jpg"
            alt="diamond"
            class="imgSlide"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img          
            src="/images/carousel/cuisine.jpg"
            alt="kitchen"
             class="imgSlide"
          >
        </template>
      </b-carousel-slide>
      </b-carousel>    
    </div>  
    <div class="col-md-4 mt-3">
      <h4>
        DESIGN PASUBIO <br />
        PROJECT AROUND THE WORLD
      </h4>
      <hr />
    </div>
    <div class="row">
      <div class="col-md-6">
         <b-card class="mb-5">
          <b-card-text>        
            <h5 class="card-title">
              Over 30 years of experience in the sector make Studio Pasubio a
              solid company able to satisfy every customer request,<br />
              quickly and with the best-customized solutions.
            </h5>
             </b-card-text>
             <b-card-text>
            <h3 class="card-title">
              Studio Pasubio coordinates a team at each aspect of the project:
            </h3>
            <ul class="card-text">
              <li>
                Our craftsmen and our carpenters create tailor-made solutions
              </li>
              <li>
                Perfectly faithful to the designs approved by the customer
              </li>
              <li>
                To guarantee the exclusivity of every furnishing and finishing
                proposal in every environment
              </li>
              .
            </ul>
            </b-card-text>
            </b-card>
          </div>        
      <div class="col-md-6">
        <div class="card mb-5">
          <img src="/images/carousel/cuisine.jpg" alt="Alps" class="img-fluid" />
          <div class="w3-container w3-center">           
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-3">
          <img src="/images/carousel/diamon.jpg" alt="Alps" class="img-fluid" />
          <div class="w3-container w3-center">            
          </div>
        </div>
      </div>
      <div class="col-md-6">
       
        <b-card>
          <b-card-text>
            <h4 class="card-title">
              Thanks to the experience of all the technicals, commercials, and
              administrative staffs, and skilled laborers..
            </h4>
          </b-card-text>
          <b-card-text>
            Tested over the years with successful projects. Studio Pasubio
            provides the customer with a concrete answer, any space becomes a
            possible challenge, a harmonious combination of design compliance
            with regulations shapes and materials for complete customer
            satisfaction
          </b-card-text>

          <b-link href="#" class="card-link"> Link here! </b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4,
h3 {
  font-weight: bolder;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.carousel{
  z-index: -1 !important;
}
.imgSlide{
 width:100%;
 height:500px;
}
@media(max-width:768px){
.imgSlide{
 width:100%;
 height:auto;
}
}
</style>
