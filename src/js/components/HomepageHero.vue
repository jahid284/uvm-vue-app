<template>
  <section class="homepage-hero">
    <div class="hero__content">
      <slot></slot>
    </div>
    <ul class="cb-slideshow">
      <li v-for="background in backgrounds" class="hero-bg" :style="{ 'background-image': 'url(assets/home-hero/' + background.image + ')' }"></li>
    </ul>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        backgrounds: [
          {image: 'cello2.jpg'},
          {image: 'artclass_1.jpg'},
          {image: 'laserlab.jpg'},
          {image: 'muthateaching.jpg'},
          {image: 'raingarden.jpg'},
          {image: 'studentteaching1.jpg'},
          {image: 'weclass1.jpg'}
        ]
      }
    }
  } 
</script>




